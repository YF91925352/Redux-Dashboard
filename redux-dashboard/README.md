# Redux Admin Dashboard

This Admin Dashboard is a web application built using React, Redux, and Axios. The visual design is crafted with SCSS and Ant Design components. The primary functionalities include user authentication, token-based user identification, article submission, viewing and filtering submitted articles, and article editing.

## Overview
![Screen-Recording-2024-01-30-at-1 (3)](https://github.com/YF91925352/Redux-Dashboard/assets/113684176/30cab6c4-068e-4f9e-8684-a035e8cf8b73)
![ScreenRecording2024-01-30at19 03 55-ezgif com-video-to-gif-converter](https://github.com/YF91925352/Redux-Dashboard/assets/113684176/e6051cad-4250-4f00-9cc2-cee8675e0e93)

## Technologies Used

- [React](https://reactjs.org/)
- [@reduxjs/toolkit](https://redux-toolkit.js.org/)
- [react-redux](https://react-redux.js.org/)
- [react-router-dom](https://reactrouter.com/)
- [Ant Design ](https://ant.design/)
- [Axios](https://axios-http.com/)

## Key Features

- **User Authentication with Redux:**
  Utilizing Redux for efficient management of user information and tokens ensures proper identification of user identities, ensuring smooth login functionality.
- **Seamless Logout Experience:**
  When a user logs out, the associated token information is promptly deleted, seamlessly redirecting the user to the login interface, enhancing the overall user experience.
- **Handling Token Expiry:**
  To address token expiration due to prolonged inactivity, the system automatically invalidates tokens after a specified period of user inactivity.
- **Enhanced Article Management:** UUsers can submit new articles using the React Quill rich text editor, facilitating the creation of engaging and formatted content.
- **Article Viewing and Editing:** The dashboard allows users to filter and view submitted articles. Additionally, users can edit the content of existing articles, providing a comprehensive content management solution..

- **Third-Party Apache Echarts Integration:** The homepage features integration with Apache Echarts, a third-party plugin. Configuration options are available for customizing the display of analytics data based on specific business requirements.

# Getting Started

Install dependencies: `npm install`
Start the development server: `npm start`
