class Api::v1::BooksController < ApplicationController

    def index
        books = Book.all
        render json: books
    end 

    def create
        book = Book.create(book_params)
        book.save!
        render json: book
    end 

    def destroy
        book=Book.find_by(:id => params[:id]).destroy
        render json: book
    end 

    private

    def book_params
        params.require(:book).permit(:title,:author,:review,:rating,:user_id)
    end 
end
