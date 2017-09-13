class Api::BooksController < ApplicationController
    def index
        @author = Author.find(params[:author_id])
        @books = @author.books.all
    
        render json: @books
      end
    
      def show
        @author = Author.find(params[:author_id])
        @book = @author.books.find params[:id]
    
        render json: @book
     end
end
