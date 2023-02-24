//variáveis ator
let yAtor = 368;
let xAtor = 83;
let comprimentoAtor = 25;
let tamanhoAtor = 25
let colisao = false;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, comprimentoAtor, tamanhoAtor);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    yAtor += 3;
  }
}

function voltaPosicaoInicialAtor(){
   if (yAtor < - 28){
    yAtor = 368
  }
    if (yAtor > 369){
      yAtor = 366
    }
}

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i = i + 1){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, larguraCarro, xAtor, yAtor, 13);
    if (colisao){
      voltaAtorParaPosicaoInicial();
      somDaColisao.play();
      if (pontosMaiorQueZero()){
        meusPontos -=1;
      }   
    }
  }
}

function voltaAtorParaPosicaoInicial(){
  yAtor = 368;
}
