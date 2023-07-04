//https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400
const form = document.forms[0]
form.addEventListener('submit', async (e)=>{
    e.preventDefault()
    const lat1 = form.elements.lat1.value
    const long1 = form.elements.long1.value
    const lat2 = form.elements.lat2.value
    const long2 = form.elements.long2.value

    const arr = await Promise.all([((async() =>{
            let response = await fetch(`https://api.sunrise-sunset.org/json?lat=${lat1}&lng=${long1}`)
            if(response.ok && response.status == 200){
                const data = await response.json()
                return data.results.sunrise
            }else{
                throw new Error('Somethin was wrong')
            }

        })()),(async() =>{
            let response = await fetch(`https://api.sunrise-sunset.org/json?lat=${lat2}&lng=${long2}`)
            if(response.ok && response.status == 200){
                const data = await response.json()
                return data.results.sunrise
            }else{
                throw new Error('Somethin was wrong')
            }

        })()
    ])
    document.querySelector('.block').innerHTML = `<p>SunRise in this coordinate:
    latitude:${lat1}
    Longtitude:${long1}
   time:${arr[0]}</p>
<p>SunRise in this coordinate:
    latitude:${lat2}
    Longtitude:${long2}
   time:${arr[1]}</p>`

})