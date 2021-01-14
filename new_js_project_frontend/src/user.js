
document.addEventListener('DOMContentLoaded', () => {

    User.createUser();
})

//Params associated with a user
class User {
    constructor(user) {
        this.id = user.id;
        this.name = user.name;
        this.books = user.books;
     
    }
//POST fetch for creating a User
    static createUser(user) {
        let newUserForm = document.getElementById('new-user-form')
        newUserForm.addEventListener('submit', function(e){
            e.preventDefault();
            fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                    'Accept' : 'application/json'
                },
                body: JSON.stringify({
                    user: {
                        name: e.target.children[1].value
                    }
                })
            })
                .then(res => {
                    if (!res.ok) {
                        throw new Error(); // Will take you to the `catch` below
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
        div.setAttribute('class', 'user-greeting');
        let bc = document.getElementById('books-container')
        let Greeting = document.createElement('p');
        Greeting.innerHTML = `<h1>Hey ${this.name}! What did you read this week?</h1>`
        div.appendChild(Greeting);
        body.appendChild(div);
        this.books.forEach(function(book){
            let newBook = new Book(book)
            newBook.appendBook()
        })
    

        Book.newBookForm(this.id)
    }

}
        

