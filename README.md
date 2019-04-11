# ThermoFisher Scientific Part Descriptions
Part Inventory description tracker/editor/exporter.  Allows input and exiting of part descriptions in multiple languages to export as HTML to be used in web applications.

You can start the application by:
1. npm install from both frontend and backend folders.
2. You'll need to create a Prisma account and deploy to prisma from backend.
3. Create a .env file in backend with:
- DB_ENDPOINT (set to your prisma endpoint)
- DB_SECRET (make a random secret for prisma to use)
- USER_SECRET (a random secret for the app to use)
- COOKIE_SECRET (something random for cookie generation)
- FRONTEND_URL=http:localhost:3000
- APP_SECRET (something random for the app to use)
4. Make .env in frontend
- NODE_ENV=development
5. npm run dev from both frontend (localhost: 3000) and backend (localhost:4000)
6. See app from locahost:3000