const GetTimetoJanuary = () =>{
  let currentDate = new Date(); 
  let nextYear = currentDate.getFullYear() + 1; 
  let newYearDate = new Date(nextYear, 0, 1); 
  let timeRemaining = newYearDate - currentDate
  let seconds = Math.floor(timeRemaining / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);

  hours %= 24;
  minutes %= 60;
  seconds %= 60;
    return `the 1st January is in ${days} days and ${hours}:${minutes}:${seconds}hours`
}
const AllMinutes = (year,month,day) =>{
  let currentDate =new Date() 
  let birthday = new Date(year,month,day, 0,0,0)
  let milliseconds = currentDate - birthday
  console.log(birthday)
  return milliseconds / 60 / 1000
}



module.exports = {
    GetTimetoJanuary : GetTimetoJanuary,
    AllMinutes : AllMinutes
}
