const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    let obj = {
        name: form.elements.f.value,
        lastname: form.elements.l.value
    }
    
    const json = JSON.stringify(obj);
    const jsonElement = document.createElement('p');
    jsonElement.textContent = json;

    document.body.appendChild(jsonElement); 
});
