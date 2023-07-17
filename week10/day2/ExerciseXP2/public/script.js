const Do = async () =>{
    try {
        
   

    const response = await fetch('/users')
    const data = await response.json()
    const userDataDiv = document.getElementById('user-data');
    userDataDiv.textContent = JSON.stringify(data);
} catch (error) {
      console.log('Error:',error)  
}
}
Do()