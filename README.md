# AUTH PROJECT SOFTWARE DEVELOPMENT LIFE CYCLE

I am building a SPA project that will be used for authorization through sudmomains of Muum Dev. Network. All subdomain must be authorized by the token that is created by this login project. It should use Firebase for login and login status must be sycned between tabs. 

## 1. Planning

The project will need 4 pages: Profile, Login, Register and Forgot Password.

### Software Arcitecture (What & Where)
- Routing for country detail page ✅
- Global State for auth status, performance and stability ✅
- Header with navbar (visible only authenticated users)
- Navbar must contain links for other Network sites and logout button


### Design Pattern (What & How)
- Atomic Design while developing components ✅
- React router for routing ✅
- Redux for global state management ✅
- Best practices for performance issues ✅
- SOLID principles while developing project ✅
- TailwindCSS for the project UI ✅
- Containerize the entire application with Docker file 
- Docker file to the repo source code
- TypeScript (and its best practice) ✅
- React-query with React Router ✅
- Unit tests for the components
- CI/CD pipeline with Github Actions for running tests  ✅
- CI/CD pipeline with Github Actions for running linting  ✅
- ESLint recommended rules and precommit hooks for linting and code formatting validation ✅
- Prevent commit if linting not passed  ✅
- Formik & custom hook for form elements, their validation and warning rules
- Once form is submitted, generate token by using the fake Login API from https://reqres.in/api/login 
- React-icons for icons

## 2. Analysis of Requirements
**Login Page**
- Must contain, email, password, remember me checkbox
- Inputs must have validation
- On Fail
    - Show a toast message for user
- On Success:
    - Store the token on localstorage if the remember me checkbox is checked 
    - Redirect to country listing page 
- When ever you refresh the page, you need to set user as authenticated if you have token available in localstorage (if you checked the remember me checkbox)
- This login page should not be accessible for authenticated users (if you checked the remember me checkbo)

