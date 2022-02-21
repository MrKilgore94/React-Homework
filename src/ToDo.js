import React, {useState} from "react";
import ToDoForm from "./ToDoForm";
import TodoList from "./ToDoList";



function Todo({todo, completeTodo, removeTodo, updateTodo }) {
const [edit, setEdit] = useState({
  id: null,
  value: '',
});

const submitupdate = value => {
  updateTodo(edit.id, value)
  setEdit({
    id: null,
    value: ''

  })
}
if(edit.id) {
  return <ToDoForm edit={edit}  onSubmit={submitupdate} />
}

 return todo.map((todo, index)=> (
   <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} 
   key={index}>

    <div key={todo.id} onClick={() => completeTodo(todo.id)}>
      {todo.text}
      </div>  
     





  </div>
 ))
}










export default Todo