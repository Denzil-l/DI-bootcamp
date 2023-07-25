import {createUser, getUserByUsername} from "../models/users.js"


export const CreateNewUser = async (req,res) =>{
    const {username ,password} = req.body
    console.log(req.body)
    try {
        const existInDb = await getUserByUsername(username)
        console.log(existInDb)
        console.log(typeof(existInDb))
        if(!existInDb){
            try {
                console.log('I am here')
                const newUser = await createUser(req.body)
                console.log(newUser)
                res.status(200).json({message:"registration succesfully"})
            } catch (error) {
                res.status(500).json({message:"Internal server error"})
            }
          
        }else{
            res.status(400).json({ error: "Username exists" });

        }
    } catch (error) {

        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const login = async (req,res) =>{
    const {username, password} = req.body
    console.log(req.body)
    try {
        const existInDb = await getUserByUsername(username)
        if(existInDb){
            if(existInDb.password === password){
                res.status(200).json({message: `Login successfully, welcome ${username}`})
            }else{
                res.status(400).json({message: `Login or Password is not correct, please try again`})
            }
           
        }else{
            res.status(400).json({ error: "Username does not exist :'(" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
}