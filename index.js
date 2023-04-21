const day = document.querySelector('#day');
const month = document.querySelector('#month');
const year = document.querySelector('#year');
const days_in_month  = [31,28,31,30,31,30,31,31,30,31,30,31];
const curDay = (new Date()).getDate();
const curMonth = (new Date()).getMonth();
const curYear  = (new Date()).getFullYear();

const days = document.querySelector('#days');
const months = document.querySelector('#months');
const years = document.querySelector('#years');

const dayErr = document.querySelector('#day-err');
const monthErr = document.querySelector('#month-err');
const yearErr = document.querySelector('#year-err');

const arrowBtn = document.querySelector('.arrow-btn');

arrowBtn.addEventListener('click',(e)=>{

    const dayValue = day.value;
    const monthValue = month.value;
    const yearValue = year.value;
    let flag = leapYear(yearValue);
    if(flag)
    days_in_month[1] = 29;
    else 
    days_in_month[1] = 28;

  if(!isNumber(dayValue) || !isNumber(monthValue)
     || !isNumber(yearValue) || dayValue < 1 || dayValue > days_in_month[monthValue-1]
     || monthValue < 1 || monthValue > 12 || yearLength(yearValue) != 4 || yearValue > curYear )
  {
     
     let inputs = document.querySelectorAll('input');
     [...inputs].forEach((input)=>
     {
        input.style.borderColor = 'red';
     });
     if(!isNumber(dayValue) || dayValue < 1 || dayValue > days_in_month[monthValue-1])
     {
       
        dayErr.classList.toggle('not-show');
     }
     if(!isNumber(monthValue) || monthValue < 1 || monthValue > 12)
     {
        
        monthErr.classList.toggle('not-show');
     }
     if(!isNumber(yearValue) || yearValue > curYear
       || yearLength(yearValue) != 4)
     {
       console.log(yearLength(yearValue));
        yearErr.classList.toggle('not-show');
     }
  }
  else{
      day.style.borderColor = 'gray';
      month.style.borderColor = 'gray';
      year.style.borderColor = 'gray';

    if(!dayErr.classList.contains('not-show'))
    {
      dayErr.classList.add('not-show');
    }
    if(!monthErr.classList.contains('not-show'))
    {
      monthErr.classList.add('not-show');
    }
    if(!yearErr.classList.contains('not-show')
       )
    {
      yearErr.classList.add('not-show');
    }
    let res = calculateAge(dayValue,monthValue,yearValue);
    days.innerText = res[2];
    months.innerText = res[1];
    years.innerText = res[0];
  }
  
});

function calculateAge(day,month,year)
{
   
   let yearDiff = (curYear-1) - year;
   let monthdiff = monthDiff(month);
   let dayDiff =   curDay - day;
   console.log(dayDiff);
   if(dayDiff < 0) 
   {
    let val = 0;
    if(curMonth == 0) val = days_in_month[11];
    else val = days_in_month[curMonth-1];
    console.log(val);
    dayDiff = dayDiff + val;
   }
   console.log(dayDiff);
   return [yearDiff,monthdiff,dayDiff];
}
function monthDiff(monthV)
{
  let cnt = 0;
  while((monthV % 13) != curMonth)
  {
    cnt++;
    monthV++;
  }
  return cnt;
}


function isNumber(n)
{
    if (n.trim().length === 0)
        return false;
    return !isNaN(n);
}

function yearLength(n)
{
    console.log(n);
    let cnt = 0;
    while(n != 0)
    {
      cnt++;
      n = Math.floor(n / 10);
    }
    return cnt;
}

function leapYear(n)
{

  if(n % 4 == 0 &&(n%100 != 0 || n % 400 == 0)) return true;
  return false;

}