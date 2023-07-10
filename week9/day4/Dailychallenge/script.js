const form = document.forms[0]
form.addEventListener('submit',async(e)=>{
    e.preventDefault()
    const currentCurrency = form.elements.cur1.value
    const anotherCurrency = form.elements.cur2.value
    const amount = form.elements.amount.value
    const response = await fetch(`https://v6.exchangerate-api.com/v6/7cdef5bc4248250674bcd833/latest/${currentCurrency}`)
    const data = await response.json()
    let result = 0
    for (const key in data.conversion_rates) {
        key == anotherCurrency ? result = amount * data.conversion_rates[key] : null
    }
    document.querySelector('.result').innerText = `Result: ${result}`
})


//GET https://v6.exchangerate-api.com/v6/YOUR-API-KEY/latest/codes

const GetCurrencys = async () =>{
    const response = await fetch('https://v6.exchangerate-api.com/v6/7cdef5bc4248250674bcd833/codes')
    const data = await response.json()
    const select1 = document.querySelectorAll('select')[0]
    const select2 = document.querySelectorAll('select')[1]
    data.supported_codes.forEach(element => {
        select1.innerHTML += `<option value="${element[0]}">${element[1]}</option>`
        select2.innerHTML += `<option value="${element[0]}">${element[1]}</option>`
    });
}
GetCurrencys()