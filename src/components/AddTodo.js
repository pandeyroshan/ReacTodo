import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ''
    }
    // Example of Component state
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: ''})
    }

    render() {
        return (
            <form style={{display: 'flex'}} onSubmit={this.onSubmit}>
                <input 
                    type='text' 
                    placeholder='add new todo here..' 
                    name='title' 
                    style={{flex: '10', padding: '5px'}} 
                    value={this.state.title}
                    onChange={this.onChange}>
                </input>
                <input type='submit' value='Submit' className='btn' style={{ flex: '1'}}></input>
            </form>
        )
    }
}

export default AddTodo
