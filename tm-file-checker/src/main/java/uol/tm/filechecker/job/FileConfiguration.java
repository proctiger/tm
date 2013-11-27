package uol.tm.filechecker.job;

import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Map;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.apache.commons.lang.StringUtils;

import uol.tm.filechecker.config.FileConfig;

import com.google.common.io.Files;

/**
 * @author lnferreira@uolinc.com
 */
public class FileConfiguration {

    private File fileSource; 
    private File fileTarget;
    private String urlSource;
    private String svn;
    private boolean sameFiles;
    private static File tempDir = Files.createTempDir();

    public FileConfiguration(Map<String, String> values) {
        if (tempDir == null || !tempDir.exists()) {
            tempDir = Files.createTempDir();
        }
        validadeConfig(values);
        urlSource = values.get(FileConfig.source.name());
        URL url = createURL();
        fileSource = createTempFile(urlSource);
        copyURLToFile(fileSource, url);
        fileTarget = new File(values.get(FileConfig.path.name()));
        this.svn = values.get(FileConfig.svn.name());
        this.sameFiles = sameFiles(fileSource);
    }
    
    public void clean() {
        try {
            if (tempDir != null && tempDir.exists()) {
                FileUtils.cleanDirectory(tempDir);
            }
        } catch (IOException e) {
            throw new RuntimeException(
                    String.format("Erro ao tentar limpar diretorio temporario [%s]: ", tempDir), e);
        }
    }
    
    public File getFileTarget() {
        return fileTarget;
    }

    public File getFileSource() {
        return fileSource;
    }

    public String getUrlSource() {
        return urlSource;
    }

    public String getSvn() {
        return svn;
    }

    public boolean isSameFiles() {
        return sameFiles;
    }
    
    private URL createURL() {
        try {
            return new URL(urlSource);
        } catch (MalformedURLException e) {
            throw new RuntimeException("url invalida: " + urlSource, e);
        }
    }

    private void copyURLToFile(File tempFile, URL url) {
        try {
            FileUtils.copyURLToFile(url, tempFile);
        } catch (IOException e) {
            throw new RuntimeException(String.format("erro ao tentar copiar arquivo [%s] para [%s]", 
                    url, tempFile.getAbsolutePath()), e);
        }
    }

    private File createTempFile(String url) {
        try {
            return new File(tempDir + File.separator + FilenameUtils.getName(url));
        } catch (Exception e) {
            throw new RuntimeException("erro ao tentar criar arquivo temporario: ", e);
        }
    }

    private boolean sameFiles(File fileSource) {
        try {
            return FileUtils.checksumCRC32(fileSource) == FileUtils.checksumCRC32(fileTarget);
        } catch (IOException e) {
            throw new RuntimeException(String.format("erro ao tentar acessar arquivos: [%s] e ou [%s]", 
                    fileSource.getAbsolutePath(), fileTarget.getAbsolutePath()), e);
        }
    }
    
    private void validadeConfig(Map<String, String> values) {
        for (FileConfig config : FileConfig.values()) {
            if (!values.containsKey(config.name())) {
                throw new RuntimeException("faltando configuracao de arquivo no reconf: " + config.name());
            } else if (StringUtils.isEmpty(values.get(config.name()))) {
                throw new RuntimeException("faltando valor para configuracao de arquivo no reconf: " + config.name());
            }
        }
    }
}
