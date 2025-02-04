# 🌟 **Project Setup & Guide**

Welcome to **TrelloFox**! This repository houses both the **frontend** and **backend** of our application. Below is the guide you need to get up and running.

---

## **🌍 Project Overview**

This **Todo App** provides a sleek interface for managing tasks efficiently. Key features include:

- **Create tasks**
- **Update tasks**
- **Delete tasks**
- **Mark tasks as completed**
- **Organize tasks by categories**

With the combination of **Next.js** for frontend and **NestJS** for the backend, we aim to provide an optimized and scalable application for task management.

![image](https://github.com/user-attachments/assets/0fa76dbf-4de4-4727-a725-1f23172e78ac)


---

## **🛠 Project Configuration**

### **Clone the Repository**

To begin, clone this repository to your local machine:

```sh
git clone git@github.com:Nicolasalx/Technical-Test-Quantfox.git
```

### **Install Dependencies**

#### Frontend (Next.js):

```sh
cd frontend
npm install
```

#### Backend (NestJS):

```sh
cd backend
npm install
```

---

## **🚀 Frontend: Running the Application**

1. **Start the development frontend**:

```sh
   npm run dev
```

This will start the Next.js application in development mode at `http://localhost:3000`.

2. **Build the frontend**:

```sh
   npm run build
```

3. **Start the production frontend**:

```sh
   npm start
```

---

## **⚙️ Backend: Running the Application**

1. **Database and Migrations**:

   - **Spin up Docker container** (for database):

```sh
     npm run db:up
```

- **Apply migrations**:

```sh
     npm run db:migrate
```

- **Reset database**:

```sh
     npm run db:reset
```

- **Access Prisma Studio**:

```sh
     npm run db:view
```

2. **Start the development server**:

```sh
   npm run start:dev
```

This will start the NestJS application in watch mode.

3. **Build the backend**:

```sh
   npm run build
```

4. **Start the production server**:

```sh
   npm run start:prod
```

---

## **📦 Project Architecture**

### **Frontend (Next.js)**:

- **Framework**: Built using **Next.js** for fast server-side rendering and static site generation.
- **Automatic Optimization**: Automatically optimizes images, **JavaScript**, and **CSS** without manual configuration.
- **Simplified Routing**: The file-based routing system makes page management easier.

### **Backend (NestJS)**:

- **Framework**: **NestJS**, a modular and scalable backend framework.
- **Database**: **PostgreSQL** with **Prisma ORM** for seamless database interaction and migrations.
- **API Routes**: Structured with **Controllers** and **Services** for maintainable and testable code.

---

## 📂 **Frontend Architecture**

The frontend is built using **Next.js**, a powerful React-based framework optimized for both server-side rendering and static site generation. The codebase follows a modular structure, ensuring clarity, scalability, and maintainability. Here's an overview of the main folders and files:

### 📂 **`src/`**

The `src` directory houses all the core application files, structured as follows:

#### **1. `app/`**

This is the core directory for the Next.js app routing system. It contains all the pages, components, and styling for the application.

- **`Board.tsx`**: The main component that renders the task board, providing an overview of all task lists and categories.
- **`List.tsx`**: Handles the logic and UI for individual task lists within the board, grouping tasks by status or category.
- **`Task/`**: A subdirectory for task-specific components:

  - **`Task.tsx`**: Defines the UI and behavior for individual tasks displayed in the lists.
  - **`TaskModal.tsx`**: Handles the modal for creating or updating tasks, including task details and actions.
  - **`TaskStatus.tsx`**: Manages the status of tasks, allowing users to mark them as completed or change their status dynamically.

- **`globals.css`**: Contains global styles, including TailwindCSS utility classes for consistent styling throughout the app.
- **`layout.tsx`**: Defines the shared layout and structure for all pages, including the header, footer, and content wrapper.
- **`page.tsx`**: The default landing page of the application, providing an entry point for the task board.

### 📂 **Root-Level Configuration Files**

The root directory contains essential configuration files to manage dependencies, builds, and styling:

- **`next.config.ts`**: Configures Next.js settings for optimized builds and custom behavior.
- **`tsconfig.json`**: TypeScript configuration file for strict typing and code reliability.
- **`tailwind.config.ts`**: TailwindCSS configuration file for customizing themes and utility classes.
- **`postcss.config.mjs`**: Configures PostCSS to process TailwindCSS styles.
- **`package.json`**: Defines project dependencies, scripts, and metadata for both development and production environments.
- **`next-env.d.ts`**: Provides TypeScript type definitions for Next.js features.

### 📂 **`public/`**

This folder stores static assets such as images, icons, and fonts, which are served directly by Next.js.

- **`favicon.ico`**: The application’s favicon for browser tabs.

---

## 🛠 **Backend Architecture**

The backend architecture is built using **NestJS** with a modular organization. Here’s an overview of the main folders and files:

### **1. `src/`**

The main folder containing the backend implementation.

### **2. `common/`**

This folder holds reusable components within the application, such as:

- **DTOs**: Data transfer objects used to validate user input (e.g., `create-task.dto.ts`).
- **Entities**: Models representing data structures in the application.
- **Interfaces** and **Types**: Used to define contracts and types within the app.
- **Utils**: Utility functions.

### **3. `microservices/`**

This section contains services that manage various parts of the system:

- **lists-service**: Manages task lists.
- **tasks-service**: Manages tasks.
- **prisma-service**: Interface between Prisma and the application for database operations.

### **4. `main.ts`**

The main entry point of the application where modules and services are configured and launched.

### 📂 **Prisma Folder**

The **Prisma** folder contains all the necessary files to manage the database using Prisma ORM. Here’s the structure of the folder:

#### **1. `migrate.js`**

A file managing database migrations, ensuring schema changes are applied correctly.

#### **2. `migrations/`**

This folder contains database migrations. Each migration is represented by an SQL file, such as `20250131100011_init`, which defines the initial database structure.

#### **3. `reset/`**

Contains an SQL script to reset the database to its initial state, allowing a fresh start if needed.

#### **4. `schema.prisma`**

The main Prisma file defining data models and database configuration. It outlines table structures and their relationships.

#### **5. `seed/`**

Contains a SQL script used to seed test data into the database, facilitating development.

---

The architecture relies on a modular structure that facilitates easier maintenance and scalability, providing clear separation of responsibilities between services.

---

### **Swagger API Documentation**

We use **Swagger** to provide an interactive API documentation for all the backend routes. This tool allows you to easily explore, test, and interact with the API endpoints in a user-friendly way.

- **Accessing the Swagger Documentation**:
  After starting the backend server, you can access the Swagger UI at the following URL:

http://localhost:8080/api

![image](https://github.com/user-attachments/assets/68acb09e-7388-4977-b8fe-bd48997ee7a1)


This will open the Swagger interface, where you can see all available API routes, their descriptions, request parameters, and responses.

- **Interactive UI**: Allows you to test endpoints directly from the documentation.
- **Real-Time Updates**: Automatically reflects any changes made to the API.
- **Error Handling**: Provides detailed error messages and possible status codes for each route.

- **How It Works**:
  Swagger is integrated into the backend using **NestJS Swagger module**, which automatically generates API documentation based on the decorators used in the controller files. It ensures that the documentation is always up to date with the latest API changes.

This feature makes it easy for developers and API consumers to interact with and understand the backend endpoints, reducing the time spent on integration.

---

## **📜 Contribution Guidelines**

We welcome contributions! Here's how to get involved:

1. **Fork the repository** to your GitHub account.
2. **Clone your fork** locally.
3. Create a **new branch** for your feature or fix.
4. **Commit your changes** with clear, concise messages.
5. **Push your changes** and submit a pull request.

---

## **💡 Troubleshooting**

- **Ensure all dependencies are installed** by running `npm install` in both the frontend and backend directories.
- **Check your database configuration** in the `.env` file.
- **Review logs** for error details and consult the documentation for common issues.

---

Happy coding! 🚀
