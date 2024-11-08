import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import { TodosComponent } from './components/todos/todos.component';

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page',
      },
      {
        path: 'todos',
        component: TodosComponent,
        title: 'Todo List',
      },
  ];
  export default routeConfig;