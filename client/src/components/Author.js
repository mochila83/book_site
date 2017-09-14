import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const AuthorStyles = styled.div`
  img {
    max-height: 400px;
    width: 100%;
  }
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
      author: res.data
   
    })
  }

  render(){
    return (
      <AuthorStyles>
        <img src={this.state.author.preview_url} />
        <h1>{this.state.author.name}</h1>
        <h3>Books</h3>
        {this.state.books.map(book => (
          <div key={book.id}>
            <p>Title: {book.title}</p>
          </div>
        ))}
      </AuthorStyles>
    )
  }
}

export default Author