const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizado no escpo`;
      console.log(ifScope);
    } else {
      const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    
  }

  testingScope(true);

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  const sortOddsAndEvens = (array) => {

  const arrayOrder = array.sort((a,b) => a - b);
  return arrayOrder

  };
  
  const arraySort = sortOddsAndEvens(oddsAndEvens)
  console.log(arraySort); 