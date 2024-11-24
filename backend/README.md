# RBAC-system
Role-Based Access Control (RBAC) API is a backend solution for managing access control in applications. It allows for defining roles, permissions, and user assignments, ensuring secure and scalable authorization management.

## Features
User Authentication: Secure login using JWT.
Role Management: Create, update, and delete roles.
Permission Management: Define permissions and assign them to roles.
User-Role Assignment: Assign roles to users dynamically.
Endpoint Protection: Guard API routes based on roles and permissions.
Extensible Design: Easily integrate with frontend applications or other services

# Tech Stack
Node.js: Backend runtime.
Express.js: Web framework.
MongoDB: Database for storing users, roles, and permissions.
Mongoose: ODM for MongoDB.
JWT: For secure token-based authentication.
bcrypt: For hashing passwords.

## Installation

### Clone the repository:
git clone 
cd rbac-api
### Install dependencies:
npm install
### Set up environment variables: 

PORT=5000
MONGO_URI=mongodb://localhost:27017/rbac
JWT_SECRET=your_jwt_secret

### Run the application:
npm run dev


## Images
![image](https://github.com/user-attachments/assets/c8421860-1951-41a6-8b0e-c34ad55b27a8)
![image](https://github.com/user-attachments/assets/57e5e3ed-0a97-456b-ab6e-9b882fb1482d)
![image](https://github.com/user-attachments/assets/d1e5f85a-36d4-4fa9-bf40-730a45b118c2)
![image](https://github.com/user-attachments/assets/fe66efd3-c08c-4984-aadb-c5f1cc2ff45e)
![image](https://github.com/user-attachments/assets/a5adcaf3-073a-4016-a3ba-fb7d255a1957)
