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

  alterarTexto(){
    this.title = 'Texto alterado'
  }
}
