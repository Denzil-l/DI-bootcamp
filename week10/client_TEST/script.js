const registerButton = document.getElementById("register");

const userinput = document.getElementById("userinput");
const passwordinput = document.getElementById("passwordinput");
const message = document.getElementById("message");

registerButton.addEventListener('click', async(e)=>{
    e.preventDefault()

    try {
        const data = JSON.stringify({username: userinput, password: passwordinput})
        const res = await fetch("http://localhost:3000/register",{
            method:'POST',
            headers:{"content-type":"application/json"},
            body:data
        })
        const parseData = res.json()
        if(res.status == 200){
            message.innerText = parseData.message
        }else{
            message.innerText = parseData.error
        }
    } catch (error) {
        console.log(error)
    }
})

const userLogin = document.getElementById("userlogin");
const passwordLogin = document.getElementById("passwordlogin");
const loginButton = document.getElementById("login");
const loginMessage = document.getElementById("loginMessage");



loginButton.addEventListener('click', async(e)=>{
    e.preventDefault()

    try {
        const data = JSON.stringify({username: userLogin, password: passwordLogin})
        const res = await fetch("http://localhost:3000/login",{
            method:'POST',
            headers:{"content-type":"application/json"},
            body:data
        })
        const parseData = res.json()
        if(res.status == 200){
            loginMessage.innerText = parseData.message
        }else{
            loginMessage.innerText = parseData.error
        }
    } catch (error) {
        console.log(error)
    }
})