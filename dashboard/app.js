const loginuser = JSON.parse(localStorage.getItem('loginuser'))


if(!loginuser){
    window.location.href = "../index.html"
}