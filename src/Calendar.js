const createTable = () => {
  const notesData = {};
  const renderModal = (fieldName) => {
    document.getElementById("notesModal").innerHTML = '';
    console.log(fieldName);
    console.log(notesData);
    let inputText = document.createElement('input');
    if (notesData[fieldName]) {
      inputText.value = notesData[fieldName];
    }
    document.getElementById('notesModal').appendChild(inputText);

    let saveButton = document.createElement('button');
    saveButton.innerHTML = 'save';
    saveButton.onclick = () => {
      const textData = document.getElementById('notesModal').firstChild.value;
      //notesData['date' + date.getDate() + date.getMonth() + date.getFullYear()] = textData;
      notesData[fieldName] = textData;
    }
    document.getElementById('notesModal').appendChild(saveButton);

    let cancelButton = document.createElement('button');
    cancelButton.innerHTML = 'cancel';
    cancelButton.onclick = () => {
      document.getElementById("notesModal").innerHTML = '';
    }
    document.getElementById('notesModal').appendChild(cancelButton);
  }

   let nowDate = new Date();
   let today = nowDate.getDate(); //поточний день
   let currentMonth = nowDate.getMonth(); //поточний month
   let currentYear = nowDate.getFullYear(); // поточний year
   let temp = new Date(currentYear, currentMonth + 1, 0);
   let lastDay = temp.getDate();  //ост день місяця

   let nextButton = document.createElement('button');
   nextButton.innerHTML = 'Next month';
   nextButton.onclick = () => {
     currentMonth = currentMonth + 1;
     renderCalendar();
   }
   document.getElementById('monthControlButtons').appendChild(nextButton);

   let prevButton = document.createElement('button');
   prevButton.innerHTML = 'Prev month';
   prevButton.onclick = () => {
     currentMonth = currentMonth - 1;
     renderCalendar();
   }
   document.getElementById('monthControlButtons').appendChild(prevButton);

   const renderCalendar = () => {
     document.getElementById('calendarTable').innerHTML = '';

     let mon = document.createElement('th');
     mon.innerHTML = 'mon';
     document.getElementById('calendarTable').appendChild(mon);

     let tue = document.createElement('th');
     tue.innerHTML = 'tue';
     document.getElementById('calendarTable').appendChild(tue);

     let wed = document.createElement('th');
     wed.innerHTML = 'wed';
     document.getElementById('calendarTable').appendChild(wed);

     let thur = document.createElement('th');
     thur.innerHTML = 'thur';
     document.getElementById('calendarTable').appendChild(thur);

     let fri = document.createElement('th');
     fri.innerHTML = 'fri';
     document.getElementById('calendarTable').appendChild(fri);

     let sat = document.createElement('th');
     sat.innerHTML = 'sat';
     document.getElementById('calendarTable').appendChild(sat);

     let sun = document.createElement('th');
     sun.innerHTML = 'sun';
     document.getElementById('calendarTable').appendChild(sun);


     let d = new Date(currentYear, currentMonth, 1);
     let t = d.getDay() - 1; //порядковий номер поточного дня
     if(t < 0) {
       t = 6;
     }
     let a = 0;
     while (d.getMonth() === currentMonth){
       console.log(currentMonth);

       let tableRow = document.createElement('tr');
       let i = 0 ;
       while(i < 7) {
         let td = document.createElement('td');
         let tableDataButton = document.createElement('button');
         tableDataButton.innerHTML = d.getDate();
         let fieldName = 'date' + d.getDate() + (d.getMonth() + 1) + d.getFullYear();
         tableDataButton.onclick = () => {
           renderModal(fieldName);
         }
         //console.log(d.getDate());
         if (a === 0) {
           if (i < t) {
             td.innerHTML = '';
             } else {
               td.appendChild(tableDataButton);
               d.setDate(d.getDate() + 1);
             }
         }
          else {
            if (d.getDate() == lastDay) {
              d.setDate(d.getDate() + 1);
              break;
            }
            td.appendChild(tableDataButton);
            d.setDate(d.getDate() + 1);
          }
          tableRow.appendChild(td)
          i++;
      }
      document.getElementById('calendarTable').appendChild(tableRow);
      a++;
    }
  }

  renderCalendar();
}

 createTable();
