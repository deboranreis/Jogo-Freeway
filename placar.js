let meusPontos = 0;

function incluiPontos(){
  textAlign(CENTER);
  textSize(20);
  fill(color(255,215,0));
  text(meusPontos, 95, 26);
}

function marcaPontos(){
  if (yAtor < 8){
    meusPontos += 1;
    somDoPonto.play();
    voltaAtorParaPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}