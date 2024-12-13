import { Component } from "react";

export class TodoApp extends Component {

    state = {
        userInput: '',
        toDoList: []
    }

    onChangeEvent(e){
        this.setState({userInput: e});
    }

    addItem(input){
        if ( input === '') {
            alert("Please add what is your plan for today")
        }
        else{
            let listArr = this.state.toDoList;
        listArr.push(input)
        this.setState({toDoList: listArr, userInput: ''})
        console.log(listArr)

        }
        

    }

    formOnSubmut(e){
        e.preventDefault();
    }

    crossedWord(e){
        const li = e.target;
        li.classList.toggle('crossed');

    }

    deletetoDo(e){
        const li = e.target;
        li.remove()
    }

    clearList(){
        let listArr = this.state.toDoList;
        listArr = [];
        this.setState({toDoList: listArr })
    }


    render() {
        return (
            <div className="container">
                <h1>Your todo's for today:</h1>
                <form onSubmit={this.formOnSubmut} >
                    <input type="text" 
                    placeholder="Plans? What are you gonna do today?"
                    onChange={(e) => this.onChangeEvent(e.target.value) }
                    value={this.state.userInput}/>
                    <button onClick={() => this.addItem(this.state.userInput)}><i class="fa-sharp fa-solid fa-circle-plus"></i></button>
                </form>
                <button onClick={() => this.clearList()} className="btn">DELETE ALL TODOS FOR TODAY <i class="fa-solid fa-trash"></i></button>
                <ul className="todo-list">
                    {this.state.toDoList.map((item, index) => (
                        <li onDoubleClick={this.crossedWord} key={index} className="todo">{item} 
                        <button onClick={this.deletetoDo} className="deleteBtn"><i class="fa-solid fa-trash"></i></button></li>
                    ))}
                </ul>
            </div>
        )
    }
}