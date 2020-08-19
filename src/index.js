import './styles.css';

import { Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';



export const todoList = new TodoList();

// const tarea = new Todo('Aprennder JS!!');

// todoList.nuevoTodo( tarea );


// console.log(todoList);

// crearTodoHtml( tarea );

todoList.todos.forEach( todo  => crearTodoHtml( todo ) );
// todoList.todos.forEach( crearTodoHtml );

// const newTodo = new Todo('Aprendiendo JS');
// todoList.nuevoTodo( newTodo );
todoList.todos[0].imprimirClase;
// newTodo.imprimrClase();

console.log('todos', todoList.todos);