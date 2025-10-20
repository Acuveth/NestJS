# Application Startup Instructions

## Steps to Start Both Parts of the Application

### Starting the Backend

1. Open a terminal and navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the backend server:
   ```bash
   npm run start
   ```

   For development with automatic reloading:
   ```bash
   npm run start:dev
   ```

4. Verify the backend is running:
   - API: http://localhost:3000/hello
   - Swagger documentation: http://localhost:3000/api

### Starting the Frontend

1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend application:
   ```bash
   npm start
   ```

   Or alternatively:
   ```bash
   ng serve
   ```

4. Access the application:
   - Frontend: http://localhost:4200

## Technologies and Versions Used

### Backend
- **Node.js**: v20+ (recommended)
- **NestJS**: ^11.0.1
- **TypeScript**: ~5.9.2
- **Swagger/OpenAPI**: ^11.2.1
- **Port**: 3000

### Frontend
- **Node.js**: v20+ (recommended)
- **Angular**: ^20.3.0
- **TypeScript**: ~5.9.2
- **AdminLTE**: ^4.0.0-rc3
- **Font Awesome**: ^7.1.0
- **Port**: 4200

## Special Features

### Backend
- NestJS REST API with automatic Swagger documentation at `/api`
- CORS enabled for Angular frontend
- Modular structured architecture

### Frontend
- Angular 20 with standalone components
- Modern responsive design with gradient backgrounds
- Animations and transitions for better user experience
- HTTP service for API communication
- Error handling with retry functionality
- Loading states with custom spinner

### Important Notes
The backend must be started before the frontend for the application to work properly. CORS is configured for `http://localhost:4200` - if you change the frontend port, you must update the CORS settings in `backend/src/main.ts`.
