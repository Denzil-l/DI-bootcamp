//Exercise 1/2

const fs = require('fs').promises

const readFunction = async (file) => {
    try {
        console.log(await fs.readFile(`${file}`,'utf-8'))
        
    } catch (error) {
        console.error(error)
    }
}


const writeFunction = async (file) =>{
    try {
        await fs.writeFile(`${file}`,'Some text in new file')
    } catch (error) {
        
    }
}
const appendFunction = async (file) =>{
    try {
        await fs.appendFile(`${file}`,'\n Some new text for this file')
    } catch (error) {
        
    }
}

const deleteFunction = async (file) =>{
    try {
        await fs.unlink(`${file}`)
    } catch (error) {
        
    }
}
const allFunctions = async () =>{
    await readFunction('text.txt')
    await writeFunction('data.txt')
    await appendFunction('data.txt')
    await readFunction('data.txt')
    await deleteFunction('data.txt')
}

allFunctions()
