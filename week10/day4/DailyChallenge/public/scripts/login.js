const form = document.querySelector('form')
const blockMessage = document.querySelector('.message')

form.addEventListener('submit',async (event)=>{
    event.preventDefault()
    const data = event.target
    const username = data.username.value;
    const password = data.password.value;
    if(!username || !password){
      blockMessage.innerHTML = 'Login or Password are empty'
    }else{
        try {
            const response = await fetch('/signin', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ username, password })
            });
        
            const data = await response.json();
            console.log(data)
            data.success ? blockMessage.innerHTML = `Welcome Back ${username}` : blockMessage.innerHTML = 'Login or Password is not correct'
          } catch (error) {
            blockMessage.innerHTML = 'Something was wrong'
                    }
    }


})