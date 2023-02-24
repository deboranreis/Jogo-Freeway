//código do carro
let xCarros = [600, 700, 630, 720, 650, 680];
let yCarros = [40, 100, 150, 210, 265, 319];
let velocidadeCarros = [3.1, 2.9, 4, 3, 3.1, 2.8];

//tamanho carros
let comprimentoCarro = 60;
let larguraCarro = 35;


function mostraCarro(){
  for (let i = 0; i < imagemCarros.length;  i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, larguraCarro);
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    if (passouTodaATela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function passouTodaATela(xCarros){
  return  xCarros < - 52;
}
