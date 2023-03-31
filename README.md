# Contacts Management API
---
This is a RESTful API for a contacts management system. It allows users to perform CRUD (create, read, update, delete) operations on contacts. The API is built using Node.js and MongoDB, and uses the Express.js framework.

## Getting Started
---

To get started with the API, clone this repository to your local machine:
```
git clone https://github.com/nikhilpal755/contact-management-system.git
```

Then, navigate to the project directory and install the dependencies:
```
cd contact-mangament-system
npm install
```
## Configuration
---

The API uses environment variables to store sensitive information, such as database credentials and JWT secret keys. The following variables should be set:
* `MONGODB_URI`: The URI of the MongoDB database.
* `JWT_SECRET`: The secret key used to sign JWT tokens.

You can set these variables in a `.env` file in the root directory of the project. Here's an example `.env` file:
```
MONGODB_URI=mongodb://localhost/contacts
JWT_SECRET=mysecretkey
```

## Running the API
---
To run the API, start the server by running the following command:
```
npm start
```
The API will be running on `http://localhost:3000`.

## Endpoints
---

The API provides the following endpoints:

`GET /contacts`

Get all contacts with pagination and filtering.

Query Parameters
* `page` (optional) : The page number to fetch(default: 1).
* `limit` (optional) : The number of contacts to retrieve per page (default: 10).
* `search` (optional) : A search string to filter contacts by name or email.


`POST /contacts`

Create a new contact.

Request Body
* `name` (required) : The name of the contact.
* `email` (required) : The email of the contact.
* `phone` (optional) : The phone number of the contact.

`GET /contacts/:id`

Get a contact by ID.

`PUT /contacts/:id`

Update a contact by ID.

Request Body

* `name` (optional): The new name of the contact.
* `email` (optional): The new email of the contact.
* `phone` (optional): The new phone number of the contact.

`DELETE /contacts/:id`

Delete a contact by ID.

## Authentication
---

The API uses JSON Web Tokens (JWT) for authentication and authorization. To access protected endpoints, you must include an `Authorization` header with a valid JWT token.

`POST /auth/register`

Register a new user.


Request Body

* name (required): The name of the user.
* email (required): The email of the user.
* password (required): The password of the user.*

`POST /auth/login`

Authenticate a user and get a JWT token.

Request Body

* email (required): The email of the user.
* password (required): The password of the user.

## Conclusion
---

This API provides a simple and effective way to manage contacts. It supports CRUD operations on contacts with pagination and filtering, and includes authentication and authorization using JWT tokens.