import { Component } from '@angular/core';
import { Todo } from './models/todo.models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos : Todo[] = [];
  public title : string = 'Minhas tarefas';

  constructor() {

    this.todos.push(new Todo(1, 'Passear com o cachorro', false));
    this.todos.push(new Todo(2, 'ir no mercado', true));
    this.todos.push(new Todo(3, 'cortar o cabelo', false));
  

  }


remove (todo : Todo){
  const index = this.todos.indexOf(todo);
  if (index !== -1){
    // verifica se o todo esta na lista, se for !== -1 está na lista,
      // ai pode remover
    this.todos.splice(index, 1);
    // pega o item que vai ser removido e diz quantos item precisa remover
  }
}

  markAsDone(todo: Todo) {
    todo.done = true;
  }

  markAsUndone(todo: Todo) {
    todo.done = false;
  }

  alterarTexto(){
    this.title = 'Texto alterado'
  }
}


