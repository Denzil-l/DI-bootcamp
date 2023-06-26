// //Exercise 1

// const calculateTip = () =>{
//     let billAmount  = +document.getElementById('billamt').value
//     let serviceQuality = +document.getElementById('serviceQual').value
//     let numberOfPeople = +document.getElementById('peopleamt').value
//     if(serviceQuality == 0 || !billAmount){
//         alert('Input billAmount and serviceQuality')
//     }
//     if(!numberOfPeople || numberOfPeople <= 1){
//         numberOfPeople = 1
//         document.querySelector('#each').style.display = 'none'

//     }else{
//         document.querySelector('#each').style.display = 'block'

//     }
//     let total = ( billAmount * serviceQuality ) / numberOfPeople
//     total.toFixed(2)
//     document.querySelector('#totalTip').style.display = 'block'
//     document.querySelector('#tip').innerHTML = total
// }
// document.querySelector('#totalTip').style.display = 'none'
// document.querySelector('#calculate').addEventListener('click', ()=>{
//     calculateTip()
// })

//Exercise 2
//the first version

// const CheckValidation = () =>{
//     let email = document.querySelector('#email').value
//     email = email.split('')
//     switch (true) {
//         case email.indexOf('@') == -1:
//             alert('The input is not valid')
//             break;
//         case email.indexOf('.') == -1:
//             alert('The input is not valid')
//             break;
//         case email.indexOf('@') > email.indexOf('.') == -1:
//             alert('The input is not valid')
//             break;
//         case email.indexOf('@') == 0 || email.indexOf('@') == email.length -1:
//             alert('The input is not valid')
//             break;
//         case email.indexOf('.') == 0 || email.indexOf('.') == email.length -1:
//             alert('The input is not valid')
//             break;
    
//         default:
//             alert('succsess')
//             break;
//     }
// }
// document.querySelector('button').addEventListener('click', CheckValidation)
//the second version with regular expressions

// const CheckValidation = () =>{
//     if(/^[^@.]+@[^@.]+\.[^@.]+$/.test(document.querySelector('#email').value)){alert('succsess')}
//     else{
//         alert('the input is not valid')
//     }
// }
// document.querySelector('button').addEventListener('click', CheckValidation)

//Exercise 3
var x = document.querySelector('.my-postition');
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}

document.querySelector('button').addEventListener('click', getLocation)