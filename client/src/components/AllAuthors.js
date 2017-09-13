import React, { Component } from 'react';
import axios from 'axios';
import ArtistCard from './ArtistCard';
import styled from 'styled-components';

const AuthorListStyles = styled.div`
  margin: 20px 5%;
  width: 90%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

class AllAuthors extends Component{
  constructor(){
    super();
    this.state = {
      error: '',
      authors: []
    }
  }

  componentWillMount(){
    this._fetchAuthors();
  }

  _fetchAuthors = async () => {
    try {
      const response = await axios.get('/api/authors');
      const authors = response.data;
      this.setState({authors});
    } catch (err) {
      this.setState({error: err})
    }
  }

  render(){
    if (this.state.error){
      return <h1>{this.state.error.message}</h1>
    }
    return (
      <AuthorListStyles>
        {this.state.authors.map((author) => (
          <AuthorCard key={author.id} author={author} />
        ))}
      </AuthorListStyles>
    )
  }
}

export default AllAuthors;