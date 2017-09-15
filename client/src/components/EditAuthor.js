import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class EditAuthor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            author: {
                name: '',
                preview_url: ''
            }
        }
        this._handleChange = this._handleChange.bind(this);
        this._editAuthor = this._editAuthor.bind(this);
     }
    
    componentWillMount() {
        const authorId = this.props.match.params.id
        this._fetchAuthor(authorId)       
    }
    _fetchAuthor = async (authorId) => {
        try {
            const res = await axios.get(`/api/authors/${authorId}`)
            await this.setState({
                author: {
                    name: res.data.author.name,
                    preview_url: res.data.author.preview_url
                }
            })
        }
        catch (err) {
            console.log(err)
        }
    }   
    _editAuthor = async (e) => {
        e.preventDefault();
        const author = this.state.author
        const authorId = this.props.match.params.id
        try {
            const res = await axios.patch(`/api/authors/${authorId}`, author)
            this.setState({ redirect: true })
            return res.data
        } 
        catch (err) {
            console.log(err)
        }
    }
    _deleteAuthor = async (e)=>{
        const id = this.props.match.params.id;
        try{
            const res = await axios.delete(`/api/authors/${id}`)
            this.setState({redirect: true})
        } catch(err){
            console.log(err)
        }
    }
    _handleChange = (e) => {
        const newState = {...this.state.author}
        newState[e.target.name] = e.target.value
        this.setState({
            author: newState
        })
    }
    render() {
        if (this.state.redirect) {
            return (
                <Redirect to={`/authors`}/>
            )
                } else {
      return (
            <div>
                <h1>Edit Author</h1>
                <form onSubmit={this._editAuthor}>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input onChange={this._handleChange} type="text" name="name" placeholder={this.state.author.name} />
                    </div>
                    {/* <div>
                        <label htmlFor="book">book: </label>
                        <input onChange={this._handleChange} type="text" name="book" value={this.state.book.title} />
                    </div> */}
                    <div>
                        <label htmlFor="preview_url">preview_url: </label>
                        <input onChange={this._handleChange} type="text" name="preview_url" placeholder={this.state.author.preview_url} />
                    </div>
                    <button>Submit</button>
                </form>
                <button onClick={this._deleteAuthor}>DELETE</button>
            </div>
        );
    }
}
}
export default EditAuthor;