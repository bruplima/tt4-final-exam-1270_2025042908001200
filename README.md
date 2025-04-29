 Docker
Which file is used to define how a Docker image is built?

A) docker-compose.yml
**B) Dockerfile**
C) image.config
D) container.yml
What does docker images command show?

A) Current containers
B) Docker logs
**C) Downloaded images**
D) Running apps
How do you remove a Docker container?

A) docker stop
B) docker delete
C) docker remove
**D) docker rm**
What port does Docker map to when using EXPOSE 80?

A) Host port 3000
**B) Container’s internal port 80**
C) Always port 8080
D) The backend’s IP
🌿 Git / GitHub
Which command initializes a new Git repository?

A) git new
B) git start
**C) git init**
D) git open
What is a Git branch?

A) A copy of a file
B) A code versioning snapshot
**C) A version of your repository history**
D) A type of commit
What does git pull do?

A) Push commits to GitHub
B) Reset your repo
**C) Fetch and merge from remote**
D) Backup your files
How do you stage all modified files?

A) git all
B) git push
C) git commit -m
**D) git add .**
⚙️ .NET Core
What is Entity Framework Core used for?

A) Managing user roles
B) Handling web requests
**C) Mapping C# classes to database tables**
D) Running JavaScript
What’s the purpose of appsettings.json?

A) Store API endpoints
**B) Configure app settings like DB connection strings**
C) Define controllers
D) Handle routing
Which command runs a .NET Core project?
A) dotnet start
B) dotnet compile
**C) dotnet run**
D) dotnet execute
What does [HttpPost] represent in a controller?
A) A file upload
B) An HTML POST form
**C) An endpoint for POST requests**
D) A redirect
⚛️ Frontend Frameworks
What command creates a new Angular project?
A) ng app create
B) ng start
**C) ng new**
D) angular init
In React, what is a component?
A) A database table
**B) A function or class that renders UI**
C) A hook
D) A node module
How do you bind data in VueJS templates?
A) {= value =}
**B) v-bind:value or :value**
C) v-for:value
D) @value
What is the default file extension for Svelte components?
**A) .svelte**
B) .svt
C) .js
D) .component
💡 General Concepts
What does REST stand for?
A) Random Enhanced Server Transfer
B) Ready State Environment Transport
**C) Representational State Transfer**
D) Remote Execution Static Transfer
What is JSON used for?
A) Sending UI files
B) Styling elements
**C) Structuring and exchanging data**
D) Loading database drivers
What is the role of Tailwind CSS?
A) It’s a database system
B) A backend tool for API management
**C) A utility-first CSS framework**
D) A JavaScript compiler
What does docker-compose down do?
A) Launches containers
**B) Stops and removes containers, networks, volumes**
C) Restarts all containers
D) Clears Docker images

Part II – Final Project (10 points)
🔧 Project: Custom Project Assigned by Last Digit of RA
Each student must build a fullstack CRUD application using:

Backend: ASP.NET Core WebAPI with Entity Framework, based on last digit of student ID
Frontend: You are free to choose the frontend framework
Docker Compose: Must be used to simulate production environment
GitHub: Public repository with correct structure and README
🛠️ Project Assignments (Choose by last digit of RA)
Last Digit	Fullstack Project
0	Contact List Manager
1	Bug Tracker System
2	Travel Journal App
3	Student Attendance System
4	Movie Watchlist
5	Fitness Tracker App
6	Expense Tracker
7	Recipe Manager
8	Job Application Tracker
9	Book Library System
✅ Must Include
📦 Backend (ASP.NET Core API):
Create a .NET Core WebAPI project
Build CRUD operations for the entity below, based on your assigned project:
Use Entity Framework with PostgreSQL || MySQL || MSSQL || SQLite
Enable CORS
Push code to a public GitHub repository

Entities by Project:
Project	Entity and Fields
Book Library System	Book: ID, Title, Author, Genre, PublishedYear
Recipe Manager	Recipe: ID, Name, Ingredients, Instructions, PrepTime
Fitness Tracker App	Workout: ID, Date, Type, Duration, CaloriesBurned
Contact List Manager	Contact: ID, FullName, Email, Phone, IsFavorite (boolean)
Bug Tracker System	Bug: ID, Title, Description, Priority, IsResolved (boolean)
Movie Watchlist	Movie: ID, Title, Genre, Watched (boolean), Rating
Expense Tracker	Expense: ID, Description, Amount, Date, Category
Job Application Tracker	Application: ID, Company, Position, Status, AppliedDate
Student Attendance System	StudentAttendance: ID, StudentName, Date, Present (boolean), Remarks
Travel Journal App	TravelEntry: ID, Location, Date, Description, Photos (string or URL)
🌐 Frontend App:
Frameworks allowed: Angular, ReactJS, VueJS, Svelte
List, Create, Update, Delete items
API integration
Use a UI library (Tailwind, Material or Bootstrap)
🐳 Docker Setup:
Dockerfile for frontend and backend
docker-compose.yml in root
App should run via docker-compose up
📁 GitHub Repo Structure
Repository name: tt4-final-exam-1270_2025042908001200

/
├── backend/
│   ├── .gitignore
│   ├── Dockerfile
│   └── ...
├── frontend/
│   └── ...
├── .gitignore
├── .dockerignore
├── default.conf
├── Dockerfile
├── docker-compose.yml
├── README.md
📄 Extra Requirement – Project README
The README.md file in the GitHub repository must contain this final exam (both parts I and II).

Students must highlight their selected answers in the multiple-choice questions by surrounding the chosen option with ** (markdown bold).

Example:
1. What is Docker?  
   - A) A relational database  
   - **B) A container platform for creating and managing environments**  
   - C) A web server  
   - D) A frontend framework  
HOW TO COPY?: scroll up, click in the button Raw, ctrl + A, ctrl + C (copy the content) and PASTE in your README.md file

📊 Grading Criteria
Section	Points	Notes
Structure (Working) + MCQ submission	4.0	Just having the full structure working + answered questions (right or wrong)
Backend implementation	2.0	CRUD API, DB, CORS, EF, correct endpoints
Frontend implementation	2.0	CRUD with correct framework, working with API
Docker & Compose setup	1.5	Functional Dockerfiles, working Compose setup
GitHub + README	0.5	Proper structure, includes this full exam in README
TOTAL	10.0	
🔍 Example Projects (Reference Only)
Product Managemnet System
Task Management System
Project Management System
Student Management System
FullSTack Project VueJS
FullSTack Project Angular
FullSTack Project ReactJS
FullSTack Project Svelte
❌ Not following the repository structure = Automatic elimination
🚨 Submit only the link to your GitHub repository
✅ This document must be included and completed in README.md