import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const AuthorStyles = styled.div`
  img {
    max-height: 300px;
    width: 300px;
  }
  background-color: rgba(255, 255, 255, 0.5);
  font-size: 30px;
`;

class Author extends Component{
  constructor(){
    super();
    this.state = {
      author: {},
      books: []
    }
  }

  componentWillMount(){
    this._fetchAuthorAndBooks();
  }

  _fetchAuthorAndBooks = async () => {
    const id = this.props.match.params.id;
    const res = await axios.get(`/api/authors/${id}`)
    this.setState({
      author: res.data.author,
      books: res.data.books 
    })
  }

  render(){
    return (
        
      <AuthorStyles>
        <img src={this.state.author.preview_url} />
        <h1>{this.state.author.name}</h1>
        <div>
            <Link to={`/authors/${this.props.match.params.id}/edit`}>
            <button>Edit Author</button>
            </Link>
        </div>
        <h3>Book</h3>
        
        {this.state.books.map(book => (
          <div key={book.id}>
            <p>Title: {book.title}</p>
            <img src={book.preview_url} />
          </div>
        ))}
      </AuthorStyles>
    )
  }
}

export default Author