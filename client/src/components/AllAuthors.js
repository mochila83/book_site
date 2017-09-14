import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const AuthorContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  a {
    font-size: 20px;
    text-decoration: none;
    color: black;
  }
  a:hover {
    background-color: blue;
  }
`

class AllAuthors extends Component {
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
      const res = await axios.get('/api/authors');
      await this.setState({authors: res.data});
      return res.data;
    }
    catch (err) {
      console.log(err)
      await this.setState({error: err.message})
      return err.message
    }
    
  }

  render() {
    if (this.state.error){
      return <div>{this.state.error}</div>
    }
    return (
      <AuthorContainer>
        <h1>Authors of the Month</h1>
        {this.state.authors.map(author => (
          <div>
            <Link to={`/authors/${author.id}`} >{author.name}</Link> 
          </div>
        ))}
      </AuthorContainer>
    );
  }
}

export default AllAuthors;