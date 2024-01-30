# Getting Started with Create React App

## Overview

This Admin Dashboard is a web application built using React, Redux, and Axios. The visual design is crafted with SCSS and Ant Design components. The primary functionalities include user authentication, token-based user identification, article submission, viewing and filtering submitted articles, and article editing.

## Technologies Used

## React:

A JavaScript library for building user interfaces.

## Redux:

A state management library for handling the application's state. Axios: A promise-based HTTP client for making requests to the server.

## SCSS:

A CSS preprocessor for styling the application with enhanced features.

## Ant Design:

A React UI library with a set of high-quality components.

## Key Features

## User Authentication with Redux

Token Management:
Utilizing Redux for efficient management of user information and tokens ensures proper identification of user identities, ensuring smooth login functionality.

## Seamless Logout Experience

Token Deletion:
When a user logs out, the associated token information is promptly deleted, seamlessly redirecting the user to the login interface, enhancing the overall user experience.

## Handling Token Expiry

Token Expiry:
To address token expiration due to prolonged inactivity, the system automatically invalidates tokens after a specified period of user inactivity.

## Enhanced Article Management

Article Submission:
Users can submit new articles using the React Quill rich text editor, facilitating the creation of engaging and formatted content.

## Article Viewing and Editing

The dashboard allows users to filter and view submitted articles. Additionally, users can edit the content of existing articles, providing a comprehensive content management solution.

## Third-Party Apache Echarts Integration

Homepage Analytics:
The homepage features integration with Apache Echarts, a third-party plugin. Configuration options are available for customizing the display of analytics data based on specific business requirements.

## Getting Started

Install dependencies: `npm install`
Start the development server: `npm start`
