# Employee Data Store App

This is a simple Java Spring Boot application that provides a RESTful API for managing employee data. With this application, you can create, view, update, and delete employees. The project is primarily designed to demonstrate basic CRUD (Create, Read, Update, Delete) operations in Spring Boot.

## 🚀 Features

-   ✅ **Add Employee:** Add new employees to the system.
-   ✅ **View All Employees:** Get a list of all employees in the database.
-   ✅ **Find Specific Employee:** Search for a specific employee using their ID.
-   ✅ **Update Employee Information:** Update the information of an existing employee.
-   ✅ **Delete Employee:** Remove an employee from the system.

## 🛠️ Technologies Used

-   **Backend:**
    -   Java 11
    -   Spring Boot
    -   Spring Data JPA
    -   Maven
-   **Database:**
    -   H2 (In-Memory Database)

## ⚙️ Getting Started

Follow the steps below to run this project on your local machine.

### Prerequisites

You need to have the following installed on your system:
-   Java Development Kit (JDK) 11 or a newer version.
-   Apache Maven

### Installation

1.  Clone this repository:
    ```bash
    git clone [https://github.com/kamruj-akash/employee-data-store-app.git](https://github.com/kamruj-akash/employee-data-store-app.git)
    ```

2.  Navigate to the project directory:
    ```bash
    cd employee-data-store-app
    ```

3.  Run the application using Maven:
    ```bash
    mvn spring-boot:run
    ```
    The application will start by default on port `http://localhost:8080`.

## 📖 API Endpoints

This application provides the following REST API endpoints:

| Method | Endpoint | Description | Example (Request Body) |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/v1/employees` | Shows a list of all employees. | N/A |
| `GET` | `/api/v1/employees/{id}` | Shows the employee with the specified ID. | N/A |
| `POST` | `/api/v1/employees` | Creates a new employee. | `{ "firstName": "Kamruj", "lastName": "Akash", "emailId": "kamruj.akash@example.com" }` |
| `PUT` | `/api/v1/employees/{id}` | Updates the information of the employee with the specified ID. | `{ "firstName": "Kamruzzaman", "lastName": "Akash", "emailId": "kamruzzaman.akash@example.com" }` |
| `DELETE` | `/api/v1/employees/{id}` | Deletes the employee with the specified ID. | N/A |

---

You can use Postman or any other API testing tool to test these endpoints.
