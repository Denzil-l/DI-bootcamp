import Button from '@mui/material/Button';


const Product = (props) =>{
const {info} = props
return(
    <div>

        <h2><Button variant="contained">{info.id}</Button></h2>
        <h2><Button variant="contained">{info.name}</Button></h2>
        <h2><Button variant="contained">{info.price}</Button></h2>


    </div>
)
}

export default Product