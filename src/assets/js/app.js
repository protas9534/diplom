let registration = document.querySelector('.reg__registration')
let regBlock = () => {
    document.querySelector('.reg__window-entry').style.display = 'none'
    document.querySelector('.reg__window-reg').style.display = 'flex'
}
registration.addEventListener('click', regBlock)

let entry = document.querySelector('.reg__entry-reg')
let entryBlock = () => {
    document.querySelector('.reg__window-entry').style.display = 'flex'
    document.querySelector('.reg__window-reg').style.display = 'none'
}
entry.addEventListener('click', entryBlock)



let users = []

let formReg = document.querySelector('.reg__form-reg')
formReg.onsubmit = (event) => {
    event.preventDefault()
    let email = document.querySelector('.reg__email-input-reg').value
    let tel = document.querySelector('.reg__tel-input-reg').value
    let pass1 = document.querySelector('.reg__pass-input-reg').value
    let pass2 = document.querySelector('.pass').value
    let checkPass = () => {
        if (pass1 === pass2){
        return pass1
        } else {
        document.querySelector('.reg__err').style.opacity = '1'
        }
    }
    let person = {
        email: email,
        tel: tel,
        pass: checkPass()
    }
    
    let pushUser = () => {
        if (!!person.pass == true){
            users.push(person)
            entryBlock()
            console.log(users)
        }
    }
    pushUser()
}





let form = document.querySelector('.reg__form')
form.onsubmit = (event) => {
    event.preventDefault()
    let email = document.querySelector('.reg__email-input').value
    let pass = document.querySelector('.reg__pass-input').value
    console.log(email + ' ' + pass)
    let allPass = users.map(person => person.pass)
    let allEmail = users.map(person => person.email)
    let checkUser = () => {
        if (allEmail.includes(email) && allPass.includes(pass)){
            document.querySelector('.registration').style.display = 'none'
        } else {
            document.querySelector('.reg__pass-err').style.opacity = '1'
        }
    }
    checkUser()
}
console.log(users)

