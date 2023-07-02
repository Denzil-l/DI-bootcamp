// let theForm = document.forms.yours;
// console.log(theForm);


// let elem = theForm.elements.one;
// console.log(elem);
// let firstFormX = document.forms[0]
// let firstFormY = document.forms.my
// console.log(firstFormX == firstFormY)

// console.log(firstFormX.elements.one)
// console.log(firstFormY.elements.two)

// let thirdForm = document.forms[2]
// let age = thirdForm.elements.age
// console.log(age[1].value)

// console.log(form.elements.login)
// let form4 = form.elements.userFields
// console.log(document.forms[0].one.form)
// let form = document.forms[0]
// console.log(form.elements.name.checked)


const volume = (l) => (w) => (h) => l*w*h
console.log(volume(1)(2)(3))


// let student = {
//     name: 'John',
//     age: 30,
//     isAdmin: false,
//     courses: ['html', 'css', 'js'],
//     wife: null
//   };
  
//   let jsonStudent = JSON.stringify(student,null, 10);

//   console.log(jsonStudent)

// const func = () => {
//     try {
//         console.log("starting the try block")
//         //Unexisting variable
//         hello
//         //not accessed if there is an error with the above code
//         console.log("finishing the try block")
//     } catch (err) {
//         console.log("starting the catch block")
//         console.log(err.name)
//         err.message = 'XXXXXXXXX'
//         console.log(err.message)
//     } finally {
//         console.log("Function done")
//     }
// }

// func()

const func = (a, b) => {
    let result;
    try {
        result = a / b
        if (b == 0) {
            throw new Error('Cannot divide by Zero');
        }
    } catch (err) {
        if (err instanceof ReferenceError) {
            console.log(`
                Error Name : ${err.name}, 
                Error Msg : ${err.message}`
            )
        } else {
            console.log(`
                Error Name : ${err.name}, 
                Error Msg : ${err.message}`
            )
        }
    } finally {
        console.log("Function done")
    }
}

func(3, 0)