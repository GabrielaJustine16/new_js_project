const { userInfo } = require("os")

document.addEventListener('DOMContentLoaded',() => )

    userInfo.createUser();
})

class User{
    constructor(user) {
        this.id = user.id;
        this.name = user.name;
        this.books = user.books;
    }

    static createUser(user) {
        let newUserForm = document.getElementById('new-user-form')
        newUserForm.addEventListener('submit',function(e){
            e.preventDefault();
            fetch('http://localhost:3000/api/v1/users',{
                method 'POST' ,
                headers:{
                    'Content-Type' : 'application/json' ,
                    'Accept' : 'application/json'
                },
                body: JSON.stringify({
                    user: {
                        name: e.target.children[1].value
                    }
                })
            })

            .then(res => {
                if (!res.ok){
                    throw new Error();
                }
                return res.json();
            })

            .then (user => {
                let newUser = new User(user)
                console.log(user)
                newUser.displayUser();
            })
            .catch(error => {
                console.error('User class Error', error)
            })
        })
    }

    displayUser() {
        let body = document.getElementById('container');
        body.innerHTML = ''
        let div = document.createElement('div');
        div.setAttribute('class','user-greeting');
        let bc = document.getElementById('books-container')
        bc.classList.remove('hidden')
        let Greeting = document.createElement('p');
        Greeting.innerHTML = `<h1>Welcome ${this.name}! Tell us what you read this week!</h1>`
        div.appendChild(Greeting);
        body.appendChild(div);




    }
}