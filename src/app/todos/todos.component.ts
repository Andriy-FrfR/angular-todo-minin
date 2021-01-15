import { TodosService } from './../shared/todos.service';
import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  public loading = true;
  public searchString = '';

  constructor(public todosService: TodosService) { }

  ngOnInit(): void {
    this.todosService.fetchTodos()
    .pipe(delay(1000))
    .subscribe(() => {
      this.loading = false;
    });
  }

  onChange(id: number): void {
    this.todosService.onToggle(id);
  }

  onClick(id: number): void {
    this.todosService.deleteTodo(id);
  }
}
