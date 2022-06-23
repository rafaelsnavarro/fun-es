//1 - crie uma função que exiba uma mensagem no console
function message(){
    console.log("Olá mundo!")
}
message()

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
function nomeRecebe(name){
    console.log(`Meu nome é ${name}`)
}
nomeRecebe("Rafael"); 

//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
function options(nome, idade, musica){
    console.log(`Meu nome é ${nome}, eu tenho ${idade} anos e meu estilo musical preferido são as ${musica}`);
}
options("Rafael", 26,"Musicas Paraenses"); 
//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
function movies(filme, song){
    console.log(`Filme de ficção científica favorito é ${filme} e a música que faz parte da trilha sonora ${song}`); 
}
movies("Perdido em Marte", "Starman");
//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função
function Number(numero) {
    console.log(numero * 3)
}
Number(8)