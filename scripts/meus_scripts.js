
botao1.onclick = function(){
    let valor = parseInt(numero.value);
    if(valor % 2 === 0){
        result.value = "Número par";
    }else{
        result.value = "Número impar";
    }
}

img1.onclick = function(){
    imagem.src = '../imagens/tigre1.avif';
}
img2.onclick = function(){
    imagem.src = '../imagens/tigre2.jpg';
}
img3.onclick = function(){
    imagem.src = '../imagens/tigre3.jpg';
}