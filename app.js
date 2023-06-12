                // yah modal ko call karwaya hai
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const crossbtn = document.querySelector('.fa-xmark')
// console.log(modal)
// console.log(overlay)
// console.log(crossbtn)

                // yah sari input call karwai hai 
const newaccountbtn = document.querySelector('.newaccountlogin')
const emaillogin = document.querySelector('#Email')
const passwordinput = document.querySelector('#password')
const Firstname = document.querySelector('#firstname')
const surname = document.querySelector('#surname')
const emailinfo = document.querySelector('#email-info')
const numinfo = document.querySelector('#num-info')
const passwordinfo = document.querySelector('#password-info')
const dateHandler = document.querySelector('#dateHandler')
const monthhandler = document.querySelector('#monthhandler')
const yearhandler = document.querySelector('#yearhandler')
// console.log(yearhandler)
// console.log(newaccountbtn)
// console.log(emaillogin)
// console.log(passwordinput)
// console.log(Firstname)
// console.log(surname)
// console.log(emailinfo)
// console.log(numinfo)
// console.log(passwordinfo)

const user = JSON.parse(localStorage.getItem('user')) || []

                // yah button call karway gy
const loginbtn = document.querySelector('.login-btn')
const signupbtn = document.querySelector('.signup')
loginbtn.addEventListener('click' , loginhandler)
signupbtn.addEventListener('click' , signuphandler)
// console.log(loginbtn)
// console.log(signupbtn)

newaccountbtn.addEventListener('click',()=>{
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
})
overlay.addEventListener('click',()=>{
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
})
crossbtn.addEventListener('click',()=>{
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
})

function loginhandler(){

    if(!emaillogin.value || !passwordinput.value) 
    return alert("Please enter Email & Password to login")
    const founduser = user.filter((user)=>{
        return user.emailinfo === emaillogin.value
    })
    console.log(founduser , '===>> user found')
    if(!founduser) return alert('this user is not register, please create account first')
    if(founduser[0].passwordinfo === passwordinput.value){
        alert("user is login")

        localStorage.setItem("loginuser" , JSON.stringify(founduser[0]))

        window.location.href ="./dashboard/index.html"
    }else{
        alert('password is incorrct')
    }
}

function signuphandler(){
    // dateHandler.value 
    // monthhandler.value
    // yearhandler.value
    const founduser = user.filter((user)=>{
        return user.emailinfo === emailinfo.value
    })
    console.log(founduser)
    if(founduser.length)return alert("Email is already use plzz use other email")

    
    // modal.classList.toggle('hidden')
    // console.log(Firstname.value)
    if(Firstname.value !== '' && surname.value !== '' && emailinfo !== '' && numinfo.value !== '' && passwordinfo.value !== '' && dateHandler !== undefined && monthhandler !== undefined && yearhandler !== undefined && gender !== undefined){
        if(passwordinfo.value.length < 8 )return alert('Please enter password at least eight digit')
        // if(emailinfo.value !== '@' && '.com') return alert('Please @ and .com in emailsection')

        const userobject = {
            Firstname: Firstname.value,
            surname: surname.value,
            numinfo: numinfo.value,
            emailinfo: emailinfo.value,
            passwordinfo: passwordinfo.value,
            dateHandler: dateHandler.value,
            monthhandler: monthhandler.value,
            yearhandler: yearhandler.value,
            gender
        }
        // console.log(userobject)
        user.push(userobject)
        localStorage.setItem('user' , JSON.stringify(user))

        alert("you are signup success")
        Firstname.value = ''
        surname.value = ''
        numinfo.value = ''
        emailinfo.value = ''
        passwordinfo.value = ''
        dateHandler.value = ''
        monthhandler.value = ''
        yearhandler.value = ''
        // console.log(signuphandler)

        modal.classList.toggle('hidden')
        overlay.classList.toggle('hidden')
    }else{
        alert('plzz fill the input field')
    }
}



function getgenderhandler(g){
    console.log(g)
    gender = g
}

function myfuction(){
    alert("Welcome to Login and Signup page")
}

const loader = document.getElementById('preloader')
// console.log(loader)

window.addEventListener('load', function(){
        loader.style.display = 'none'
})