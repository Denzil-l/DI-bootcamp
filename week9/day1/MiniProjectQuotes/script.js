const quotes = [
    {
      id: 0,
      author: "Albert Einstein",
      quote: "Imagination is more important than knowledge.",
    },
    {
      id: 1,
      author: "Steve Jobs",
      quote: "Stay hungry, stay foolish.",
    },
    {
      id: 2,
      author: "Nelson Mandela",
      quote: "It always seems impossible until it's done.",
    },
    {
      id: 3,
      author: "Maya Angelou",
      quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    },
    {
      id: 4,
      author: "Mahatma Gandhi",
      quote: "Be the change that you wish to see in the world.",
    },
    {
      id: 5,
      author: "Oscar Wilde",
      quote: "Be yourself; everyone else is already taken.",
    },
    {
      id: 6,
      author: "Mark Twain",
      quote: "The two most important days in your life are the day you are born and the day you find out why.",
    },
    {
      id: 7,
      author: "Ralph Waldo Emerson",
      quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    },
    {
      id: 8,
      author: "Coco Chanel",
      quote: "The most courageous act is still to think for yourself. Aloud.",
    },
    {
      id: 9,
      author: "Walt Disney",
      quote: "The way to get started is to quit talking and begin doing.",
    },
    {
      id: 10,
      author: "Albert Einstein",
      quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    },
    {
      id: 11,
      author: "Steve Jobs",
      quote: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
    },
  ];

const generate = document.querySelector('.generate')
const previous = document.querySelector('.previous')
const next = document.querySelector('.next')
const p1 = document.querySelectorAll('p')[0]
const p2 = document.querySelectorAll('p')[1]
let newArr = []
let currentQuote
generate.addEventListener('click', ()=>{
    let randomium = Math.floor(Math.random() * quotes.length)
    p1.innerHTML = `<span class='big'>"</span>${quotes[randomium].quote}<br>
    <span class='small'>${quotes[randomium].author}</span>`
})
const form = document.forms[0]

form.addEventListener('submit', (e)=>{
    currentQuote = 0
    e.preventDefault()
    let x = form.elements.search.value
    newArr = quotes.filter(e => e.author.toLowerCase().includes(x.toLowerCase()))
    p2.innerHTML = `<span class='big'>"</span>${newArr[0].quote}<br>
    <span class='small'>${newArr[0].author}</span>`

})
previous.addEventListener('click', ()=>{
    if(currentQuote > 0){
        currentQuote--
        p2.innerHTML = `<span class='big'>"</span>${newArr[currentQuote].quote}<br>
    <span class='small'>${newArr[currentQuote].author}</span>`

    }
})
next.addEventListener('click', ()=>{
    if(currentQuote < newArr.length - 1){
        currentQuote++
        p2.innerHTML = `<span class='big'>"</span>${newArr[currentQuote].quote}<br>
    <span class='small'>${newArr[currentQuote].author}</span>`

    }

})
const options = document.querySelector('#options')
const isUnique = (e,arr) =>{

}
let newArr2 = quotes.map(e => e.author).filter((element, index, arr) => arr.indexOf(element) === index);
console.log(newArr2)
newArr2.forEach(e => {
    console.log('x')
    options.innerHTML+=`<option value="${e}">`
})