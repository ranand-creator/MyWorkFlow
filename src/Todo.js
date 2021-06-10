import React from 'react'
import styles from './App.module.css'

const Todo = ({ todo, toggleTodo }) => {

	const handleTodoClick = () => {
		toggleTodo(todo.id)
	}

	return (
		<div className={ todo.completed ? (styles.completeTask) : (styles.incompleteTask) } checked={ todo.completed } onChange={ handleTodoClick }>
			<label>
				<input type="checkbox" checked={todo.completed}/>
				{todo.name}
			</label>
		</div>
	)

}

export default Todo