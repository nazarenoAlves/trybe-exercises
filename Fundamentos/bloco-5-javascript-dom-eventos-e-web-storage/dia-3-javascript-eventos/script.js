function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
 

 function addDays(){
  let numberWeekDay = document.getElementById('days');
  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  
  for(index = 0; index < decemberDaysList.length; index += 1){
  const daysWeek  = decemberDaysList[index];
  const addDays = document.createElement('li');
  addDays.className = 'day';
  addDays.innerHTML = daysWeek;

  numberWeekDay.appendChild(addDays);

  if(daysWeek === 24  || daysWeek === 31){
    addDays.className = 'day holiday';
  }else if (daysWeek === 4 || daysWeek === 11 || daysWeek === 18){
    addDays.className = 'day friday';
  }else if (daysWeek === 25){
    addDays.className = 'day holiday friday';
  }else{
    addDays.className = 'day';
  }
  }
 }
 function createHolidayButton(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container')
  let newButton = document.createElement('button');
  let newButtonID = 'btn-holiday';

  newButton.innerHTML = buttonName;
  newButton.id = newButtonID;
  buttonContainer.appendChild(newButton);
}
function displayButton(){
  let getButtonHoliday = document.querySelector('#btn-holiday');
  let getHoliday = document.querySelectorAll('.holiday');
  let backgroundColor = 'rgb(238,238,238)';
  let newColor = 'white';

  getButtonHoliday.addEventListener('click', function(){
  for(let index = 0; index < getHoliday.length; index += 1) {
    if(getHoliday[index].style.backgroundColor === newColor){
      getHoliday[index].style.backgroundColor = backgroundColor;
    }else{
      getHoliday[index].style.backgroundColor = newColor;
    }
  }
  });
}
  function btnFriday(buttonName){
    let buttonFriday = document.querySelector('.buttons-container');
    let newButtonFriday = document.createElement('button')
    let buttonId = 'btn-friday';

    newButtonFriday.innerHTML = buttonName;
    newButtonFriday.id = buttonId;
    buttonFriday.appendChild(newButtonFriday);

  }

  function displayFriday(array){
    let getButtonFriday = document.querySelector('#btn-friday');
    let getFriday = document.querySelectorAll('.friday');
    let newText = 'SEXTOU O/';

    getButtonFriday.addEventListener('click', function(){
      for(let index = 0; index < getFriday.length; index += 1){
        if(getFriday[index].innerHTML !== newText){
          getFriday.innerHTML = newText;
          console.log(getFriday);
        }else{
          getFriday[index].innerHTML = array[index];
        }
      }
    });
  }
 
 createHolidayButton('Feriados');
 addDays();
 displayButton();
 btnFriday('Sexta-Feira');
 let decemberFridays = [ 4, 11, 18, 25 ];
 displayFriday(decemberFridays);