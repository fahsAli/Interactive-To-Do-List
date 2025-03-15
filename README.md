# Interactive-To-Do-List
A feature-rich interactive to-do list built with Spring Boot (backend) and Angular 19 (frontend), leveraging Angular Material for an intuitive drag-and-drop experience. This project serves as a learning tool for mastering modern full-stack development with Spring Boot and Angular.

## Features

- **Drag-and-Drop Interface**: Easily move tasks between "To Do" and "Done" lists
- **Task Management**: Create, edit, and delete tasks
- **Task Properties**: Set priorities and due dates for better organization
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **Modern UI**: Clean interface built with Angular Material components

## Frontend Technical Stack

- **Angular 19**
- **Angular Material**
- **Angular CDK**
- **TypeScript**
- **SCSS**
- **Font Awesome**

## Project Structure

### Components

- **Task Card Component**: Individual task display with edit/delete functionality
- **Task Lists**: To-do and done lists with drag-and-drop support
- **Add Task Dialog**: Modal for creating new tasks
- **Navigation Bar**: App navigation with links to different sections

### Models

- **TaskRequest**: Interface for sending task data to the API
  ```typescript
  export interface TaskRequest {
      title: string,
      task_is_done: boolean,
      created_at: string,
      priority: number | null,
      due_date: string | null
  }
  ```

- **TaskResponse**: Interface for task data received from the API
  ```typescript
  export interface TaskResponse {
      id: number,
      title: string,
      task_is_done: boolean,
      created_at: string,
      priority: number | null,
      due_date: string | null
  }
  ```

### Services

- **TaskService**: Handles all API communications for task operations
  - `getAllTasks()`: Retrieves all tasks
  - `getTaskById(id)`: Gets a specific task
  - `createTask(task)`: Creates a new task
  - `updateTask(id, task)`: Updates an existing task
  - `deleteTask(id)`: Deletes a task

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)
- Angular CLI (v19)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/fahsAli/Interactive-To-Do-List.git
   cd .\Frontend\angular-todolist\
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   ng serve
   ```

4. Navigate to `http://localhost:4200/` in your browser

## Usage

1. **Adding Tasks**:
   - Click the "Add New Task" button
   - Fill in the task details (title, priority, due date)
   - Click "Save"

2. **Managing Tasks**:
   - Edit: Click the "Edit" button on a task card
   - Delete: Click the "Delete" button on a task card
   - Move: Drag tasks between the "To Do" and "Done" lists

3. **Organizing Tasks**:
   - Tasks are color-coded based on priority
   - Sort by due date or priority as needed

## Backend Integration

This frontend application communicates with a Spring Boot backend API. The API endpoint is configured in the `TaskService` as:
```typescript
private apiUrl = 'http://localhost:8080/api/tasks';
```

Ensure the backend server is running at this address or update the URL to match your backend configuration.

## Future Enhancements

- User authentication and personal task lists
- Task categories and tags
- Filter and search functionality
- Dark mode theme
- Task notifications and reminders
- Project and team management features

# Todo List Backend API

This is the backend API for a Todo List application. It provides CRUD (Create, Read, Update, Delete) operations for managing tasks.

## Table of Contents

1. [Technologies Used](#technologies-used)
2. [API Endpoints](#api-endpoints)
3. [Request and Response Examples](#request-and-response-examples)
4. [Setup and Run](#setup-and-run)

---

## Technologies Used

- **Java**
- **Spring Boot**
- **PostgreSQL**
- **JPA (Java Persistence API)**
- **Maven**

---

## API Endpoints

| HTTP Method | Endpoint          | Description                     |
|-------------|-------------------|---------------------------------|
| `GET`       | `/api/tasks`      | Get all tasks                  |
| `GET`       | `/api/tasks/{id}` | Get a task by ID               |
| `POST`      | `/api/tasks`      | Create a new task              |
| `PUT`       | `/api/tasks/{id}` | Update an existing task by ID  |
| `DELETE`    | `/api/tasks/{id}` | Delete a task by ID            |

---

## Request and Response Examples

### 1. **Get All Tasks**

#### Request:
- **Method**: `GET`
- **URL**: `/api/tasks`

#### Response:
```json
[
    {
        "id": 1,
        "title": "Complete project",
        "task_is_done": false,
        "created_at": "2023-10-01T12:00:00.000+00:00",
        "priority": 1,
        "due_date": "2023-10-10T12:00:00.000+00:00"
    },
    {
        "id": 2,
        "title": "Buy groceries",
        "task_is_done": true,
        "created_at": "2023-10-02T12:00:00.000+00:00",
        "priority": 2,
        "due_date": "2023-10-05T12:00:00.000+00:00"
    }
]
```

### 2. **Get Task by ID**

#### Request:
- **Method**: `GET`
- **URL**: `/api/tasks/{id}`

#### Response:
```json
{
    "id": 1,
    "title": "Complete project",
    "task_is_done": false,
    "created_at": "2023-10-01T12:00:00.000+00:00",
    "priority": 1,
    "due_date": "2023-10-10T12:00:00.000+00:00"
}
```

### 3. **Create a New Task**

#### Request:
- **Method**: `POST`
- **URL**: `/api/tasks`
- **Body**:
```json
{
    "title": "Learn Spring Boot",
    "task_is_done": false,
    "created_at": "2023-10-03T12:00:00.000+00:00",
    "priority": 1,
    "due_date": "2023-10-15T12:00:00.000+00:00"
}
```

#### Response:
```json
{
    "id": 3,
    "title": "Learn Spring Boot",
    "task_is_done": false,
    "created_at": "2023-10-03T12:00:00.000+00:00",
    "priority": 1,
    "due_date": "2023-10-15T12:00:00.000+00:00"
}
```

### 4. **Update a Task**

#### Request:
- **Method**: `PUT`
- **URL**: `/api/tasks/{id}`
- **Body**:
```json
{
    "title": "Complete project",
    "task_is_done": true,
    "created_at": "2023-10-01T12:00:00.000+00:00",
    "priority": 1,
    "due_date": "2023-10-10T12:00:00.000+00:00"
}
```

#### Response:
```json
{
    "id": 1,
    "title": "Complete project",
    "task_is_done": true,
    "created_at": "2023-10-01T12:00:00.000+00:00",
    "priority": 1,
    "due_date": "2023-10-10T12:00:00.000+00:00"
}
```

### 5. **Delete a Task**

#### Request:
- **Method**: `DELETE`
- **URL**: `/api/tasks/{id}`

#### Response:
- **Status**: 204 No Content

---

## Setup and Run

### Prerequisites
- Java 23
- Maven
- PostgreSQL

### Database Configuration
1. Create a PostgreSQL database:
```sql
CREATE DATABASE todolist;
```

2. Configure the database connection in `application.properties`:
```properties
# DataSource Configuration
spring.datasource.url=jdbc:postgresql://localhost:5432/todolist
spring.datasource.username=USERNAME
spring.datasource.password=PASSWORD

# JPA Configuration
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
```

### Build and Run
1. Build the application with Maven:
```bash
mvn clean install
```

2. Run the application:
```bash
mvn spring-boot:run
```

The API will be available at `http://localhost:8080`.

---

# Authors

* [Ali FAHS](https://github.com/fahsAli)
* [Christian HASBANI](https://github.com/Christian-Hasbani)
