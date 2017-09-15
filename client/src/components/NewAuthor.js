import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class NewAuthor extends Component {
  constructor(props){
    super(props);
      this.state = {
        redirect: false,
        author: {
          name: '',
          preview_url: ''
        }
      }
  this._handleChange = this._handleChange.bind(this);
  this._addAuthor = this._addAuthor.bind(this);
  };
  _handleChange = (e) => {
    const newState = {...this.state.author};
      newState[e.target.name] = e.target.value;
      this.setState({
          author: newState
      });
  }
    
  _addAuthor = async (e) => {
    e.preventDefault();
    const payload = this.state.author
    try {
        const res = await axios.post('/api/authors', payload)
        console.log(res)
        const authorId = res.data.id;
        const redirect = !this.state.redirect
        this.setState({authorId})
        this.setState({ redirect })
    } 
      catch (err) {
          console.log(err)
      }
  }
      
  render() {
    return (
      <div>
        <form onSubmit={this._addAuthor}>
            <div>
            <label htmlFor="name">Name: </label>
            <input  type="text" name="name" placeholder={this.state.author.name} onChange={this._handleChange}/>
            </div>
            <div>
            <label htmlFor="preview_url">preview_url: </label>
            <input onChange={this._handleChange} type="text" name="preview_url" placeholder={this.state.author.preview_url} />
            </div> 
            <button>Add New Author</button>
        </form>
        {this.state.redirect && (
          <Redirect to={`/authors/${this.state.authorId}`}/>
        )}
    </div>
    )
  }
}
export default NewAuthor;