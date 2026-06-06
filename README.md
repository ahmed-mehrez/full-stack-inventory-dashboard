# Full-Stack Inventory Dashboard

A full-stack inventory management dashboard built with React, Node.js, Express, and SQL concepts. The application allows users to create, view, search, and manage product records through a responsive user interface.

## Tech Stack

- React
- JavaScript
- Node.js
- Express.js
- REST APIs
- SQL concepts
- HTML/CSS
- Git/GitHub

## Features

- Add inventory items through a React form
- View inventory records in a structured table
- Search products by name or category
- Validate user input before submitting records
- Connect a React front end to an Express back-end API
- Use REST API endpoints for inventory data management
- Responsive layout for desktop and mobile screens

## Project Structure

```text
full-stack-inventory-dashboard/
├── client/
│   ├── index.html
│   ├── package.json
│   └── src/
│       ├── App.jsx
│       └── styles.css
├── server/
│   ├── package.json
│   └── server.js
├── .gitignore
└── README.md

## API Endpoints

GET    /api/inventory       Get all inventory items  
POST   /api/inventory       Add a new inventory item  
PUT    /api/inventory/:id   Update an existing inventory item  
DELETE /api/inventory/:id   Delete an inventory item

## What I Built

I developed the application structure, including the React front end, Express back end, REST API routes, form validation, search functionality, responsive styling, and Git/GitHub project organization.

## Future Improvements

- Connect the API to a PostgreSQL or MySQL database
- Add user authentication
- Add item edit/delete buttons in the user interface
- Add dashboard analytics
- Deploy the front end and back end online
