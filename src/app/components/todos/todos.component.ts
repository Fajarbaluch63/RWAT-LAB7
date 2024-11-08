import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../todo.service'; 
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  
  todos: Todo[] = [];
  inputTodo: FormGroup;
  searchTermControl: FormControl<string | null>; 
  filteredTodos: Todo[] = [];

  constructor(private todoService: TodoService) {
    this.inputTodo = new FormGroup({
      content: new FormControl('')
    });
    
    this.searchTermControl = new FormControl<string | null>(''); // Initialize with type
  }

  async ngOnInit(): Promise<void> {
    try {
        this.todos = await this.todoService.getTodos();
        this.updateFilteredTodos(); 
        console.log('Loaded todos:', this.todos);
    } catch (error) {
        console.error('Error loading todos:', error);
    }

    // Subscribe to the search term changes
    this.searchTermControl.valueChanges.subscribe(() => this.updateFilteredTodos());
  }

  updateFilteredTodos(): void {
    const searchTerm = this.searchTermControl.value ? this.searchTermControl.value.toLowerCase() : ''; // Handle possible null
    this.filteredTodos = this.todos.filter(todo =>
        todo.content && todo.content.toLowerCase().includes(searchTerm) // Ensure todo.content is not null
    );
  }

  async toggleDone(id: number): Promise<void> {
    try {
        await this.todoService.toggleTodoCompletion(id);
        // Toggle the completed status locally without re-fetching
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
        }
        this.updateFilteredTodos();
    } catch (error) {
        console.error('Error toggling todo completion:', error);
    }
}


async deleteTodo(id: number): Promise<void> {
  try {
    // Call the delete method from the service
    await this.todoService.deleteTodo(id); // Assuming deleteTodo in service uses fetch or HttpClient

    // Remove the deleted todo from the local list
    this.todos = this.todos.filter(todo => todo.id !== id);

    // If you have a separate filtered list (e.g., for search or filter functionality),
    // update it to reflect the changes in the UI
    this.updateFilteredTodos(); 
  } catch (error) {
    console.error('Error deleting todo:', error);
  }
}



  async addTodo(): Promise<void> {
    if (this.inputTodo.valid) {
      await this.todoService.addTodo(this.inputTodo.value.content);
      this.inputTodo.reset(); 
      this.todos = await this.todoService.getTodos(); 
      this.updateFilteredTodos(); 
    }
  }
}
