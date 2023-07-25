import Button from '@mui/material/Button';
import './User.css';


const User = () => {
const users = [{
    name: 'Jhon1',
    email: "xxy@gmail.com",
    isEmail: true
},
{
    name: 'Jhon2',
    email: "xxz@gmail.com",
    isEmail: true
},
{
    name: 'Jhon3',
    email: "xyy@gmail.com",
    isEmail: true
},
{
    name: 'Jhon4',
    email: "xxz@gmail.com",
    isEmail: true
},
]

return(
    <>
    {
    users.map((item,index)=>{
        return(
            <div>
            <Button variant="contained">{item.name}</Button>
            <p></p>
            <Button variant="contained">{item.email}</Button>
            </div>
        )
    })
}
    </>
)

}
    // return (
       
    //         <Button variant="text">{user.name}</Button>
    //         
            
    //     </>
    // )

export default User