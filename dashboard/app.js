const loginuser = JSON.parse(localStorage.getItem('loginuser'))
console.log(loginuser)

if(!loginuser){
    window.location.href = "../index.html"
}

const username = document.getElementById('username')
const emailinfo = document.getElementById('email-info')
const numinfo = document.getElementById("num-info")
const gender = document.getElementById("gender-box")

const modal1 = document.querySelector('.modal-1')
// console.log(modal1)
const logoutbtn = document.querySelector('.logout-btn')
// console.log(logoutbtn)
const imgclick = document.querySelector(".img-1")
// console.log(imgclick)


username.innerHTML = `${loginuser.Firstname} ${loginuser.surname}`
emailinfo.innerHTML = `${loginuser.emailinfo}`
numinfo.innerHTML = `${loginuser.numinfo}`
gender.innerHTML = `${loginuser.gender}`

imgclick.addEventListener('click',()=>{
    modal1.classList.toggle('hidden')
})

function logout(){
    localStorage.removeItem('loginuser')
    window.location.href = '../index.html'
}

