/*function palindromo(word){
  let invertida = word.split('').reverse().join(''); 
 if(word == invertida ){
    return true;
 }
 else{
    return false;
 }
}
console.log(palindromo('arara'))*/

/*function maxValue(array) {
  let maior = array[0];
  let indice = 0;
  for (let index = 0; index < array.length; index+=1) {
      if (array[index] > maior) {
          maior = array[index];
          indice = index;
      }
  }
  return indice;
}

let array = [2, 3, 6, 7, 10, 1];
console.log(maxValue(array));*/

/*function maisRepetido(array){
  contador = {};
  array.forEach((conta => {
   contador[conta] = (contador[conta] || 0) + 1;
  }));
  let maiorValor = Math.max(...Object.values(contador));
  
  let num = Object.keys(contador).find((key) => contador[key] === maiorValor);
  
  return num;
}

console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));*/

function quantidadeDeIntens(array){
  let nArray = Object.create(null)
  
  for(let index of array){
    if(nArray[index]){
      nArray[index] += 1
    }
    else{
      nArray[index] = 1;
    }
  }
  return nArray

}

const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

console.log(quantidadeDeIntens(basket));