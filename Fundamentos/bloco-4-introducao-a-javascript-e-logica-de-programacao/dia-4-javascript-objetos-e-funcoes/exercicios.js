let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  };
  //exercicio 1
  console.log('Bem-vinda ' + info.personagem);
  //exercicio 2
  console.log(info.recorrente);
  //exercicio 3
  for(let key in info){
    console.log(key);
  }
  //exercicio 4
  for(let key in info){
    console.log(info[key]);
  }