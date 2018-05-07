function calc(a,b,c) {
    
    try{
        switch(b){

            case "+":
            return (a+c);
            break;

            case "-":
            return (a-c);
            break;

            case "*":
            return (a*c);
            break;

            case "/":
            return (a/c);
            break;

            default:
            throw "Ошибка:не правильный оператор"
            break;
            // доделать!!!

        }
    }
    catch(e){
        return e;
    }
}

function searchSubstring(arr,substr) {
    // arr.forEach(function(elem){
    //     if(elem.indexOf(substr)>=0){
    //         return true;
    //     }
    //     // else continue;
    // });
    for(let i=0; i<arr.length; i++){
        if(arr[i].indexOf(substr)>=0)return true;
    };
};

function convertNum(num){
    num=+num.toFixed(2);
    return num.toLocaleString('ru-RU');
};

function createCalendar(year, mon) {
  var elem = document.getElementById("calendar");
  var d = new Date(year, --mon);
  var table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';
  
  for (var i = 0; i < getDay(d); i++) {
    table += '<td></td>';
  };
  while (d.getMonth() == mon) {
    table += '<td>' + d.getDate() + '</td>';
    if (getDay(d) % 7 == 6) { 
      table += '</tr><tr>';
    };
    d.setDate(d.getDate() + 1);
  };
  if (getDay(d) != 0) {
    for (var i = getDay(d); i < 7; i++) {
      table += '<td></td>';
    };
  };
  table += '</tr></table>';
  elem.innerHTML = table;
};
function getDay(date) {
  var day = date.getDay();
  if (day == 0) day = 7;
  return day - 1;
};