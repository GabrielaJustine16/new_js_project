//Params associated with a book
class Book {
    constructor(book){
        this.id = book.id;
        this.title = book.title;
        this.author = book.author;
        this.review = book.review;
        this.rating = book.rating;
    }

    static newBookForm(user_id) {
        let body = document.getElementById('container');
        let form = 
        ` <form id="new-book-form">
         <label>Book Title:</label>
         <input type="text" id="book-title"  placeholder: "Title">
         <label>Author:</label>
         <input type="text" id="book-author">
         <label>Review:</label>
         <input type="text" id="book-review">
         <label>Rate this book 1-5:</label>
         <input type="text" id="book-rating">
         <input type="submit"/>
         </form>
         `
         body.insertAdjacentHTML('beforeend', form)
        Book.postBook(user_id)
}
