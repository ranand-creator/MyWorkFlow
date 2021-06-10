import React from 'react'
import Todo from './Todo'
import styles from './App.module.css'

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <div className={styles.taskText}>
      {
        todos.filter(todo => 
          !todo.completed
        ).map(todo => 
          <Todo key={todo.id} todo={todo}  toggleTodo={toggleTodo} />
        )
      }
      {
        todos.filter(todo => 
          todo.completed
        ).map(todo => 
          <strike><Todo key={todo.id} todo={todo}  toggleTodo={toggleTodo} /></strike>
        )
      }
    </div>
  )
}

export default TodoList