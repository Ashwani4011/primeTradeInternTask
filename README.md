## Scalability & Production Considerations

The project is structured with a clear separation between frontend and backend to support future scalability. 
On the backend, routes, middleware, and controllers can be modularized per feature, allowing new APIs to be added without affecting existing functionality. 
JWT-based authentication is handled via middleware, making it reusable across protected routes.

On the frontend, API calls can be centralized into a single service layer to avoid duplication and simplify maintenance. 
Reusable components and protected routing patterns allow the application to grow without increasing complexity. 
For production, environment-based configurations, proper error handling, logging, and state management (Context API or Redux) can be introduced to support higher traffic and team collaboration.
