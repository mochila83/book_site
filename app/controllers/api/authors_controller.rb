class Api::AuthorsController < ApplicationController

      def index
        @authors = Author.all
        render json: @authors
      end
    
      def create
        @author = Author.create(author_params)
        render json: @author
      end
    
      def show
        @author = Author.find(params[:id])
        @books = @author.books.all
        render json: {
          author: @author,
          books: @books
        }
      end
    
      def update
        @author = Author.find(params[:id])
        @author.update!(author_params)
        redirect_to author_path(@author)
      end
    
      def destroy
        @author = Author.find(params[:id])
        @author.destroy
        redirect_to authors_path
      end
    
      private
    
      def author_params
        params.require(:author).permit(:name, :preview_url)
      end
    end
