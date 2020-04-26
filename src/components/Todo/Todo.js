import React, {Component} from 'react';
import TodoList from './TodoList/TodoList';
import './Todo.css';
import AddTodo from './AddTodo/addTodo'


class Todo extends Component {

    state = {
        todos:[
            {
                title:"I will eat",
                time: '9:30'
            } ,
            {
                title:" exercise time, dont forget!",
                time: '9:30'
            } , 
            {
                title:"God's time is the best!",
                time: 'God\' Time'
            } ,   
        ],
        formValue:{
            title: "",
            time: ''
        }

    }
    componentDidMount(){
        let Todos = [...this.state.todos];
        let newTodos = Todos.map((Todo, index) => {
            return{
                id:(index + 1),
                ...Todo,
            }
        })
        this.setState({
            todos: newTodos
        })
    }

    addTodoHandler = (event) =>{
        event.preventDefault();
        let Todos = [...this.state.todos];
        console.log(Todos)
        let ArrLength = Todos.length
        Todos.push({
            id: (ArrLength + 1),
            title: this.state.formValue.title,
            time: this.state.formValue.time
        })
        this.setState({
            todos : Todos
        })

    }
    
    titleHandlerFunc = (event) => {
        let formValue = {...this.state.formValue};
        formValue.title = event.target.value;
        this.setState({
            formValue
        })
    }

    timehandlerFunc = (event) => {
        let formValue = {...this.state.formValue};
        formValue.time = event.target.value;
        this.setState({
            formValue
        })
    }

    deleteTodoFunc = (event, num) => {
        event.preventDefault();
        let Todos = [...this.state.todos];
        
        let newTodos = Todos.filter(Todo => {
            console.log(Todo.id)
            console.log(num)
            return Todo.id !== (num)})
        this.setState({
            todos: newTodos,
        })
    }

    render(){
        return(
            <div style={{backgroundColor: '#edced3', height: '100%'}}>
                <div className="Title">To Do App</div>
                <TodoList
                deleteTodo =  {this.deleteTodoFunc}
                todos = {this.state.todos}
                />
                <AddTodo
                title={this.state.formValue.title}
                time={this.state.formValue.time}
                titleHandler = {this.titleHandlerFunc}
                timehandler = {this.timehandlerFunc}
                addTodoHandler = {this.addTodoHandler}
                />
            </div>
        )
    }
}

export default Todo;