import { Component } from '@angular/core';
import { TodosComponent } from './components/todos/todos.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodosComponent, FormsModule, RouterModule], // Make sure TodosComponent is imported here
  template: `
  <main>
    <a [routerLink]="['/']">
      <header class="brand-name">
        <h1>Todo List</h1>
      </header>
    </a>
    <section class="content">
      <router-outlet></router-outlet> 
    </section>
  </main>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Your App Title'; // Change this to your desired title
}
