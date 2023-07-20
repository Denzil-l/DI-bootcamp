const forms = document.querySelectorAll('form')

forms[0].addEventListener('submit',async(event)=>{
    event.preventDefault()
    const form = event.target
    const data = JSON.stringify({title:form.title.value})
    console.log(form.title.value)
    console.log(form.title.options[0].value);
    try {
        const response = await fetch('/search/title',{
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body:data
        })
        if(response.ok){
            const searchData = await response.json();
            document.querySelector('.posts').innerHTML = `
            <div class="post">
                <a href="${searchData.link}">
                    <h2>${searchData.title}</h2>
                </a>
                <p>Date: ${searchData.pubDate}</p>
                <p>Creator: ${searchData.creator}</p>
                <p>Category: ${searchData.categories}</p>
                <p>Content: ${searchData.content}</p>
            </div>`
        }else{
            console.log(response)
        }
    } catch (error) {

        console.log(error)
    }
})
forms[1].addEventListener('submit',async(event)=>{
    event.preventDefault()
    const form = event.target
    const data = JSON.stringify({category:form.category.value})

    document.querySelector('.posts').innerHTML = ''
    try {
        const response = await fetch('/search/category',{
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body:data
        })
        if(response.ok){
            const searchData = await response.json();
            searchData.forEach(element => {
                document.querySelector('.posts').innerHTML += `
            <div class="post">
                <a href="${element.link}">
                    <h2>${element.title}</h2>
                </a>
                <p>Date: ${element.pubDate}</p>
                <p>Creator: ${element.creator}</p>
                <p>Category: ${element.categories}</p>
                <p>Content: ${element.content}</p>
            </div>`
            });
            
        }else{
            console.log(response)
        }
    } catch (error) {

        console.log(error)
    }
})