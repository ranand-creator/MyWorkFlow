import React, { useState, useRef, useEffect } from 'react'
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid'
import './App.css'
import styles from './App.module.css'

const LOCAL_STORAGE_KEY = 'todosApp.todos'

const App = () => {

	// todos schema: name, id, completed
	const [todos , setTodos] = useState([])
	const todoNameRef = useRef()

	// Because this effect does not have any parameters in the array, it will only be called on page load
	useEffect(() => {
		const storedTodos = localStorage.getItem(LOCAL_STORAGE_KEY)
		if (storedTodos) setTodos(JSON.parse(storedTodos))
	}, [])

	useEffect(() => {
		localStorage.setItem(
			LOCAL_STORAGE_KEY, 
			JSON.stringify(todos)
		)
	}, [todos])

	const toggleTodo = (id) => {
		// Never change a state variable, create a copy and set it equal to the state
		const newTodos = [...todos]
		const todo = newTodos.find(todo => todo.id === id)
		todo.completed = !todo.completed
		console.log('In app, changed to', todo.completed)
		setTodos(newTodos)
	}

	const handleAddTodo = (e) => {
		const name = todoNameRef.current.value
		if (name === '') return
		const id = uuidv4()
		setTodos(prevTodos => [...prevTodos, {
			id: id,
			name: name,
			completed: false
		}])
		console.log(`Created new todo with name=${name}, id=${id}`)
		todoNameRef.current.value = null
	}

	const findLeftTodos = () => todos.filter(todo => !todo.completed).length

	const handleClearTodos = () => setTodos(todos.filter(todo => !todo.completed))

	return (
		<>
			<div className={styles.centerElements + ' ' + styles.titleText}>
				{findLeftTodos()} tasks left to complete
			</div> 
			<TodoList todos={todos} toggleTodo={toggleTodo} />
			<input className={styles.inputText} ref={todoNameRef} type="text" />
			<button className={styles.btn + ' ' + styles.addTask} onClick={handleAddTodo}>Add Task</button>
			<br></br>
			<button className={styles.btn + ' ' + styles.addTask} onClick={handleClearTodos}>Clear Completed Tasks</button>
		</>
	)
}

export default App

// This was initially built as a tutorial from Web Dev Simplified, but has been extended upon by adding a UI, backend, etc.