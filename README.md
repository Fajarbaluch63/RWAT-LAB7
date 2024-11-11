# 📋 Todo Manager

Welcome to the **Todo Manager** application! This project is built with Angular and provides an interactive interface for managing todos. With features like Firebase integration, keyboard shortcuts, grid-based layout, and GitHub Pages deployment, this app is designed to offer an intuitive user experience.

---

##  Features

###  Core Functionality

- **Home Page**: A welcoming Home component introduces users to the app.
- **Todo List Display**: A Todos component that offers:
  - **Completion Toggle**: Allows marking tasks as completed.
  - **Delete**: Remove tasks from the list.
  - **Add New Todo**: Input a new todo and add it to the list.
  - **Search**: Filter todos based on keywords.
  - **Dynamic List Rendering**: Uses `*ngFor` to display todos dynamically.
- **Form Integration**: A form within the Todos component allows adding new todos using Angular’s form features.

###  Advanced Features

- **Angular Services**: The `TodoService` handles CRUD operations and connects to Firebase for data persistence.
- **Keyboard Shortcuts**:
  - **Add Todo**: Press 'a' to start adding a new todo.
  - **Edit Text**: Press 'Spacebar' to edit the selected box directly.
  - **Remove Elements**: Press 'r' to delete elements in the grid layout.

- **Grid-Based Layout**:
  - Organize todos, boxes, or arrows in a grid format.
  - Each cell supports one element (box or arrow) with options for editing, moving, and rotating.

- **Firebase Integration**:
  - **Firestore**: Stores todos, grid layouts, and configurations for persistent access.
  - **Authentication**: Ensures secure access and user-specific data handling.

- **Save and Load Functionality**:
  - **Save**: Save the current state, including the grid layout and configurations, to Firebase Firestore.
  - **Load Previous**: Load previously saved configurations when the app starts with the **Load Previous Image** feature.

- **Routes and Navigation**:
  - **RouterModule**: Enables navigation between the Home and Todos pages.
  - **Back to Home**: Easily return from Todos to the Home page.

- **Deployment to GitHub Pages**:
  - Configured for deployment to GitHub Pages, with `baseHref` correctly set to enable routing.

---

##  Project Structure

### Components

- **AppComponent**: The root component that initializes the app.
- **HomeComponent**: Displays a welcome message and app overview.
- **TodosComponent**: Displays the list of todos with options to add, delete, and toggle completion.
- **AddTodoComponent**: Embedded within Todos for adding new todos.

### Services

- **TodoService**: Manages todo data, including operations to add, delete, toggle, and retrieve todos from Firebase Firestore.

### Angular Features Used

1. **Data Binding**
   - One-Way Binding: Displays todo content and completion status dynamically.
   - Two-Way Binding: Used in the form input to instantly update the model with user input.

2. **Directives**
   - `*ngFor`: Renders the todo list by iterating over the todo array.
   - `*ngIf`: Conditionally displays UI elements.

3. **Routing**
   - **RouterModule**: Configured for seamless navigation between Home and Todos pages.

4. **Firebase Integration**
   - Firestore is used to store todo data and configurations, allowing persistence across sessions.

5. **GitHub Pages Deployment**
   - Configured for static site deployment with GitHub Pages.

---

##  Installation

1. **Clone the Repository**:  
   ```bash
   git clone https://github.com/yourusername/todo-manager.git
   cd todo-manager


## 🔗 Links
GitHub Repository: https://github.com/Fajarbaluch63/RWAT-LAB7.git
Live Demo on GitHub Pages: [Todo Manager Live](https://fajarbaluch63.github.io/RWAT-LAB7/)


