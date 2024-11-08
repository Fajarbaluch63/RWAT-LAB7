import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router for navigation

@Component({
  selector: 'app-home',
  template: `
    <h1>Welcome to the Todo Application!</h1>
    <p>Manage your tasks efficiently with our simple Todo application.</p>
    <a (click)="navigateToTodos()">Go to Todos</a>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) {} // Inject the Router

  navigateToTodos() {
    console.log('Link clicked: Navigating to Todos'); // Log message
    this.router.navigate(['/todos']); // Use router to navigate
  }
}
