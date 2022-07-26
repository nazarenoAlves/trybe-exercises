let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  };
let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain',
  nota:'Dells Four Color Comics #178 O último MacPatinhas',
  recorrente: 'sim',
}  
 /* //exercicio 1
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
  }*/
 /* 
  console.log(info.personagem + ' e ' + info2.personagem);
  console.log(info.origem + ' e ' + info2.origem);
  console.log(info.nota + ' e ' + info2.nota);
  console.log('Ambos recorrente ' + info.recorrente);*/

  let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
      {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
      }
    ],
  };
  let livros = leitor.livrosFavoritos.length
  console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' ' + 'se chama '+ leitor.livrosFavoritos[0].titulo);
  console.log(leitor.nome + ' tem ' + livros + ' favoritos');
  