import db from '../config/database.js'

export const createUser = async(user)=>{
  console.log('I am in createuser')
  const answer = await db("users2").insert(user);
  console.log('I am here after connection to database')
  return answer;
}
export const getUserByUsername = async (username) =>{
    const answer = await db('users2').where('username', username).first()
    return answer
}