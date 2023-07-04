// `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchQuery}&limit=${limit}&offset=${offset}`

//api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My

const form = document.forms[0]


form.addEventListener('submit', async(e)=>{
    e.preventDefault()
    const input = form.elements.category.value
    try {
        response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&q=${input}`)
        if(response.ok && response.status == 200){
            const data = await response.json()
            const src = data.data[Math.floor(Math.random()* data.data.length)].images.original.webp
            document.querySelector('.block').innerHTML += `<img src="${src}" alt="">`
        }
    } catch (error) {
        console.log(error)
    }
})
document.getElementById('delete').addEventListener('click', ()=>{
    document.querySelector('img') ? document.querySelector('img').remove() : null
})
document.getElementById('deleteALL').addEventListener('click', ()=>{
    document.querySelectorAll('img') ? document.querySelectorAll('img').forEach(element =>element.remove()) : null
})
