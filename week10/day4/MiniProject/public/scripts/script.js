const forms  = document.querySelectorAll('form')
const messageBlock = document.querySelector('.message')
forms[0].addEventListener('submit', async (event)=>{
    event.preventDefault();

    const form = event.target;
    const username = form.username.value;
    const password = form.password.value;
    if(!username || !password){
        messageBlock.innerHTML = 'Login or Password are empty'
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
            data.success ? messageBlock.innerHTML = `Welcome Back ${username}` : messageBlock.innerHTML = 'Login or Password is not correct'
          } catch (error) {
            messageBlock.innerHTML = 'Something was wrong'
                    }
    }
})
forms[1].addEventListener('submit', async (event)=>{
    event.preventDefault();

    const form = event.target;
    const username = form.username.value;
    const password = form.password.value;
    const email = form.email.value;
    const first_name = form.first_name.value;
    const last_name = form.last_name.value;
    console.log(username)
    console.log(password)
    console.log(email)
    console.log(first_name)
    console.log(last_name)
    if(!username || !password || !email || !first_name || !last_name){
        messageBlock.innerHTML = 'Login or Password are empty'
    }else{
        try {
            console.log('xxxx')
            const response = await fetch('/signup', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ username, password,email,first_name,last_name })
            });
            
            const data = await response.json();
            data.success ? messageBlock.innerHTML = 'You have successfully registered' : null
            
          } catch (error) {
            messageBlock.innerHTML = 'Something was wrong'
                    }
    }
})
