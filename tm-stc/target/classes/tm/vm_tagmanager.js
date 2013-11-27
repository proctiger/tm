#!vm;utf-8
$response.setHeader("Cache-Control", "max-age=600")

## Recuperar path do script solicitado
#set($scriptPath = "." + $request.getParameter("ORIGINAL_PATH"))

## Patch com gambis de scripts 
#parse("./src-js/file-manager/gambis.vm")

## Remover sufixo "/h/" do path
#set($scriptPath = $scriptPath.replace("./h/","./"))

## Criando listas de conteudo
#set($fileListToInclude = [])
#set($fileListToParse = [])

## Populando lista
#parse("./src-js/file-manager/manager.vm")
#if($fileListToInclude.size() > 0)
    (function (){
        #foreach($file in $fileListToInclude)
            #include($file)
        #end
        #foreach($file in $fileListToParse)
	        #parse($file)
	    #end
    }());
#end