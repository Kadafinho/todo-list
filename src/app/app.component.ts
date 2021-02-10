import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos : any[] = [];
  public title : string = 'Minhas tarefas';

  constructor() {

    

    this.todos.push('passear com cachorro');
    this.todos.push('ir ao super mercado');
    this.todos.push('cortar cabelo');
    this.todos.push('Aprender a pegar o onibus no terminal');
    this.todos.push('Tentar usar um celular que nao seja apple');

  }

  alterarTexto(){
    this.title = 'Texto alterado'
  }
}
