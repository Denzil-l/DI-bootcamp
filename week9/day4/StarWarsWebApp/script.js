const main = document.querySelector('main')
const form = document.forms[0]

const getPerson = async (input) =>{
    try {
    const response = await fetch(`https://www.swapi.tech/api/people/?name=${input}`)
    if(response.status == 200){
        const data = await response.json()
        return data.result
    }else{
        throw new Error('Somethin was wrong')
    }
} catch (error) {
        console.log(error)
}
    
}
form.addEventListener('submit', async(e)=>{
    e.preventDefault()
    form.style.opacity = 0
    setTimeout( ()=>{
        form.style.display = 'none'
        const loading = document.createElement('div')
        loading.classList = 'loading'
        loading.innerHTML = ` <div class="loading__image">
        <img src="./sources/loading.png" alt="">
        </div>`
        main.appendChild(loading)

        setTimeout(async()=>{
            const input = form.elements.name.value
            const result =await getPerson(input)
            if(result == undefined || result.length == 0){
                document.querySelector('.loading').remove()
                const error = document.createElement('div')
                error.classList = 'error'
                error.innerHTML = `<div class="error__image">
                <img src="./sources/error.jpg" alt="">
                </div>
                <button class="error__reset">Reset</button>`
                main.querySelector('p').innerText = 'Something was wrong. Try Again'
                main.appendChild(error)
                document.querySelector('.error__reset').addEventListener('click', ()=>{
                    location.reload()
                })
            }else{
                console.log(result)
                document.querySelector('.loading').remove()

                result.forEach(element => {
                    let info = element.properties
                    main.innerHTML += `
                    <div class="block">
                    <div class="block__name">Name: ${info.name}</div>
                    <div class="block__birth_year">Birth Year: ${info.birth_year}</div>
                    <div class="block__created">Created: ${info.created}</div>
                    <div class="block__eye_color">Eye color: ${info.eye_color}</div>
                    <div class="block__gender">Gender: ${info.gender}</div>
                    <div class="block__height">Height: ${info.height}</div>
                    <div class="block__mass">Mass: ${info.mass}</div>
                    <div class="block__skin_color">Skin Color: ${info.skin_color}</div>

                </div>
                    `
                });
                main.innerHTML+= `<button class="error__reset">Reset</button>`
                document.querySelector('.error__reset').addEventListener('click', ()=>{
                    location.reload()
                })
                
            }

        },1000)


    },1000)
   
    
   
})

