#!vm;utf-8
$response.setHeader("Cache-Control", "max-age=600")

## Recuperar path do script solicitado
#set($scriptPath = "." + $request.getParameter("ORIGINAL_PATH"))

## Patch com gambis de scripts 
#parse("./fileManager/gambis.vm")

## Remover sufixo "/h/" do path
#set($scriptPath = $scriptPath.replace("./h/","./"))

## Criando lista de conteudo
#set($fileListToInclude = [])

## Populando lista
#parse("./fileManager/manager.vm")
#if($fileListToInclude.size() > 0)
    (function (){
        #foreach($file in $fileListToInclude)
            #include($file)
        #end
    }());
#end