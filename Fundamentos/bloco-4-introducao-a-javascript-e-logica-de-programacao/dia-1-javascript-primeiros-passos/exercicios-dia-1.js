// 1 - programa de operações aritimeticas 
// let a = 10;
// let b = 5;

//let resultado = a + b ;
//console.log(resultado);

  //resultado = a - b ;
  //console.log(resultado);

  //resultado = a * b ;
  //console.log(resultado);

  //resultado = a / b ;
  //console.log(resultado);

  //resultado = a % b ;
  //console.log(resultado);

// 2 - comparação de valores

  //const a = 15;
  //const b = 5;
  
  //if (a > b){
    //console.log(a)
  //}
  //else{
   // console.log(b)
  //}
 
// 3 - comparar 3 numeros  
// const a = 10 ;
//const b = 5 ;
//const c = 6 ;

//  if (a > b && a > c){
//    console.log(a)    
//  }
//  else if(b > a && b > c ){
//    console.log(b)
//  }
//  else{
//    console.log(c)
//  }

//4 - Identificar valor postivo ou negativo

//  const valor = 5 ;

//  if(valor > 0){
//    console.log("O valor "  + valor + "é postivo !")
//  }
//  else{
//    console.log("O valor " + valor + "é negativo !")
//  }

//5- Verificador de um triangulo 

// const a = 60 ;
// const b = 60 ;
// const c = 60 ;
 
//let soma = a + b + c ;

// if(soma == 180 ){
//    console.log (true)
// }
//else{
//    console.log (false)
//}

// 6 - Movimento da peça de xadrez

let peca = 'Bispo' ;

switch (peca.toLowerCase()){
    case 'Bispo':
        console.log('Diagonais');
    break ;

    case 'Peão':
        console.log('frente');
    break ;

    case 'Torre':
        console.log('Qualquer casa ao longo da fileira ou coluna em que se encontra');
    break ;

    case 'Cavalo':
        console.log('O cavalo pode ser movido para uma das casas mais próximas a que ocupa que não esteja na mesma fileira, coluna ou diagonal');
    break ;

    case 'Rainha':
        console.log('A dama pode ser movida para qualquer casa ao longo da fileira, coluna ou diagonal em que se encontra.');
    break ;

    case 'Rei':
        console.log(' Movendo-o para uma casa vizinha');
    break ;  
}