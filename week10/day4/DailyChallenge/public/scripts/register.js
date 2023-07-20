const form = document.querySelector('form')
const blockMessage = document.querySelector('.message')

form.addEventListener('submit',async (event)=>{
    event.preventDefault();

    const data = event.target;
    const username = data.username.value;
    const password = data.password.value;
    const email = data.email.value;
    const first_name = data.first_name.value;
    const last_name = data.last_name.value;
    if(!username || !password || !email || !first_name || !last_name){
      blockMessage.innerHTML = 'Login or Password are empty'
    }else{
        try {
            const response = await fetch('/signup', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ username, password,email,first_name,last_name })
            });
            
            const data = await response.json();
            data.success ? blockMessage.innerHTML = 'You have successfully registered' : blockMessage.innerHTML = 'User with this username is alredy exist'
            
          } catch (error) {
            blockMessage.innerHTML = 'Something was wrong'
            }
    }
})
