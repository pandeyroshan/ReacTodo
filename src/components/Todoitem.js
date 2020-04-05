import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Todoitem extends Component {

    getStyle = () => {
        // if(this.props.todo.completed){
        //     return {
        //         textDecoration: 'line-through'
        //     }
        // }
        // else{
        //     return {
        //         textDecoration: 'none'
        //     }
        // }

        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    render() {
        const {id,title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}></input> {' '}
                    {title}
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
                </p>
            </div>
        )
    }
}
const btnStyle = {
    background: '#ff0000',
    color: 'white',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    float: 'right',
    cursor: 'pointer'
}

Todoitem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default Todoitem