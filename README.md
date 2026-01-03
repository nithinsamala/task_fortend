
install node.js (v18)
step 1. Clone the Frontend Repository
Open terminal and run:
git clone https://github.com/nithinsamala/task_fortend.git

step 2 go to project folder 
cd task_fortend

step 3:Install Dependencies
npm install

step 4. Create Environment Variable File
Create a file in the project root:
.env
Add this inside .env:
VITE_API_URL=http://localhost:5000/api/task

step 5: Run the Frontend App
npm run dev
You will see output like:
Local: http://localhost:5173/

step 6. Open in Browser
Open:
http://localhost:5173
You should see the Task Manager UI
Frontend ↔ Backend Connection Check
Make sure:Backend is running
/api/tasks endpoint works
.env API URL is correct
Test backend directly:
http://localhost:5000/api/tasks
Common Errors & Fixes
API returns 404
Check .env value
Ensure backend URL ends with /api/tasks










# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
