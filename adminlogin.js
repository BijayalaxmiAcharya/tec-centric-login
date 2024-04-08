let loginForm = document.querySelector("#login-form")
let pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
console.log(loginForm);

let errorMsg = document.getElementById("error")
errorMsg.style.color = "red"

loginForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let formdata = new FormData(loginForm)
    console.log(formdata);

    let email = document.getElementById("email").value
    console.log(email);
    if (matchEmail(email)) {
        errorMsg.innerHTML = ""
        fetch("https://tec-centric.com/api/login/login.php", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: formdata,
        })

            .then((res) => {
                console.log(res)
                return res.json()

            })

            .then((data) => {
                console.log(data)
            })

    }

    else {
        errorMsg.innerHTML = "email is not valid"
    }
    console.log(e);


})

function matchEmail(email) {

    return email.match(pattern)

}