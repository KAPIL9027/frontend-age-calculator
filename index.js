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
 
  
  if(!isNumber(dayValue) || !isNumber(monthValue)
     || !isNumber(yearValue) || dayValue < 1 || dayValue > days_in_month[monthValue-1]
     || monthValue < 1 || monthValue > 12 || yearLength(yearValue) != 4 || yearValue > curYear)
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
  }
  
})

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
   
    return cnt;
}