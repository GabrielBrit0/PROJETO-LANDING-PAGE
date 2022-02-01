const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

// BOTÃO AVANÇAR
setaAvancar.addEventListener('click', function () {
    const totalDeImagens = imagensPainel.length -1;
    if (imagemAtual === totalDeImagens) {
        return;
    }

    imagemAtual ++ ;

    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });

    imagensPainel[imagemAtual].classList.add('mostrar');
});

// BOTÃO VOLTAR
setaVoltar.addEventListener('click', function() {

    if (imagemAtual === 0 ) {
        return
    }

    imagemAtual -- ;

    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });

    imagensPainel[imagemAtual].classList.add('mostrar') ;
})