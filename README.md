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

1. **Start the development server**:

```sh
   npm run start:dev
```

This will start the NestJS application in watch mode.

2. **Build the backend**:

```sh
   npm run build
```

3. **Start the production server**:

```sh
   npm run start:prod
```

4. **Database and Migrations**:

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
