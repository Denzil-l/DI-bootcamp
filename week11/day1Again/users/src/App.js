import './App.css';
import User from'./User.js'
import Product from './components/product.js'
import Button from '@mui/material/Button';

// const products = [
//   {id: 1, name: 'Iphone', price:800},
//   {id: 2, name: 'Iphone', price:800},
//   {id: 3, name: 'Iphone', price:800},
// ]
const handleClick = async (val) =>{
try {
  const res = await fetch('https://jsonplaceholder.typicode.com/users') 
  const data = await res.json()
  console.log(data)

} catch (error) {
  console.log(error)
}

}

const handleInput = (e) =>{
const value = e.target.value
console.log(value)
}

const App = () => {
  return(
    <div className='App'>
     
      <input type='text' onChange={(e)=>handleInput(e)}></input>
      <Button onClick={() => handleClick('john')} variant="contained">Click</Button>
    </div>
  );}


export default App;
