**# CourseMaster --- Bug Bashing & Debugging**



A bug-fixing submission for the CourseMaster learning platform. This

project focuses on identifying and correcting issues across

authentication, enrollment, course management, quizzes, assignments, API

handling, frontend state management, and navigation.



**## Project Links**

- **Bug Report / Documentation:** https://docs.google.com/document/d/15nYUM9f6aVDWowcc7UKYf7s0Day7rmXCnLdF-N6Bjwk/edit?usp=sharing
- **My Frontend Repository:** https://github.com/Alaminahmedariyan/course-master-frontend-fixed
- **My Backend Repository:** https://github.com/Alaminahmedariyan/course-master-backend-fixed
- **Original frontend repository:** https://github.com/Pullock4981/courseMaster_frontEnd
- **Original backend repository:** https://github.com/Pullock4981/courseMaster_Backend
- **Problem-solving set:** https://docs.google.com/document/d/1JUfENDeplDlPDhM8GXkt2g_vOHu4z9_LMiSDlh5kn8I/edit?usp=sharing

> Submit the corrected code through your own GitHub repositories. Keep the frontend and backend repositories separate, and do not push changes to the original repositories.


**## Project Overview**



CourseMaster is a course-learning application with student and

administrator functionality.



The bug-fixing work covers the following areas:



\-   Authentication and authorization

\-   Course enrollment and lesson progress

\-   Course listing, search, sorting, and pagination

\-   Quiz score calculation and answer protection

\-   Assignment filtering, grading, and review

\-   Admin course updates and user-facing error handling

\-   Frontend protected routes, login flow, navigation, and Redux state

\-   API configuration, CORS, database connection handling, and

    environment configuration



**## Main Bug Fixes**



The following items summarize the fixes addressed in the project.

Confirm each item against the final code and local test results before

marking it as verified in the bug report.



**&#xA0; -----------------------------------------------------------------------**

  Bug ID                  Area                    Fix summary

**&#xA0; ----------------------- ----------------------- -----------------------**

  BUG-001                 Enrollment              Prevent duplicate

                                                  course enrollment



  BUG-002                 Authentication          Compare the submitted

                                                  password with the

                                                  stored password hash



  BUG-003                 Authentication          Return a clear \`401\`

                          middleware              response for invalid or

                                                  expired tokens



  BUG-004                 Enrollment              Save enrollment changes

                                                  before returning the

                                                  updated record



  BUG-005                 Lesson progress         Scope enrollment lookup

                                                  to the current student



  BUG-006                 Lesson progress         Validate lesson

                                                  ownership and calculate

                                                  completion percentage

                                                  safely



  BUG-007                 Registration            Validate the admin

                                                  registration key before

                                                  assigning the admin

                                                  role



  BUG-008                 Quiz                    Calculate the quiz

                                                  score percentage

                                                  correctly



  BUG-009                 Course listing          Exclude correct quiz

                                                  answers from public

                                                  course responses



  BUG-011                 Authentication          Block login for banned

                                                  users



  BUG-012                 Admin course management Run validators when

                                                  updating a course



  BUG-013                 Assignments             Apply course filtering

                                                  to assignment queries



  BUG-014                 Assignment review       Validate status and

                                                  grade, and record

                                                  review details



  BUG-015                 Request validation      Return structured

                                                  validation errors



  BUG-016                 Course API              Validate MongoDB

                                                  ObjectId format and

                                                  return an appropriate

                                                  status



  BUG-027                 Course search           Escape user input

                                                  before using it in

                                                  regular expressions



  BUG-029                 Environment             Document the required

                                                  backend environment

                                                  variables



  BUG-033                 Documentation           Correct the documented

                                                  API base URL



  BUG-034                 API setup               Configure CORS and JSON

                                                  request parsing



  BUG-036                 Course listing          Support deterministic

                                                  sorting by creation

                                                  date and price



  BUG-039 / BUG-040       Package configuration   Set the package entry

                                                  point and remove the

                                                  unused \`recharts\`

                                                  dependency



  BUG-041                 Repository cleanup      Remove the stray

                                                  \`hash.js\` file from Git

                                                  tracking



  BUG-046                 Database startup        Add a root health

                                                  response before

                                                  database connection

                                                  middleware and remove

                                                  the duplicate

                                                  connection call



  Frontend Fix-1          Token/API handling      Standardize token

                                                  storage and handle

                                                  unauthorized responses



  Frontend Fix-2          App state               Load the current user

                                                  and enrollments when a

                                                  token exists



  Frontend Fix-3          Login/registration      Improve login state

                                                  handling and password

                                                  input validation;

                                                  remove the development

                                                  bypass



  Frontend Fix-4          Routing/layout          Protect routes by role

                                                  and use nested admin

                                                  routes



  Frontend Fix-5          Navigation              Correct home/dashboard

                                                  navigation and remove

                                                  the unsupported footer

                                                  link



  Frontend Fix-6          Redux state             Clear enrollment/admin

                                                  state on logout and

                                                  handle course-update

                                                  loading state



  Frontend Fix-7          Course details          Handle enrollment

                                                  state, errors, course

                                                  price, and navigation

                                                  actions



  Frontend Fix-8          Course listing          Debounce search and

                                                  reset pagination when

                                                  filters change



  Frontend Fix-9          Course forms            Reuse a course form for

                                                  creating and editing

                                                  courses, and apply

                                                  related UI fixes

  -----------------------------------------------------------------------



**## Tech Stack**



Based on the provided project configuration and fix notes:



\-   **\*\*Frontend:\*\*** React, React Router, Redux Toolkit, Axios,

    Tailwind/DaisyUI utility classes

\-   **\*\*Backend:\*\*** Node.js, Express, MongoDB, Mongoose, JWT, bcrypt

\-   **\*\*Development tools:\*\*** npm and environment variables



Check each repository's \`package.json\` for the exact runtime and script

versions.



**## Getting Started**



The frontend and backend are separate applications and should be cloned

and configured separately.



**### 1. Prerequisites**



Install:



\-   Node.js (use a version compatible with the repository's

    \`package.json\`)

\-   npm

\-   MongoDB locally or a MongoDB connection URI

\-   Git



**### 2. Backend setup**



\`\`\` bash

git clone \<YOUR_BACKEND_REPOSITORY_URL>

cd \<BACKEND_PROJECT_DIRECTORY>

npm install

\`\`\`



Create a \`.env\` file in the backend project directory. Use

\`.env.example\` as a reference:



\`\`\` env

PORT=5000

NODE_ENV=development

MONGODB_URI=mongodb://localhost:27017/coursemaster

JWT_SECRET=replace-with-a-long-random-secret

ADMIN_REGISTRATION_KEY=replace-with-a-private-admin-registration-key

EMAIL_SERVICE=gmail

EMAIL_USER=your-email\@gmail.com

EMAIL_PASSWORD=your-email-app-password

FRONTEND_URL=http\://localhost:5173

\`\`\`



Replace the example secrets and email settings with your own values. Do

not commit \`.env\` or real credentials.



Start MongoDB, then run the backend using the script defined in

\`package.json\`. For example, if the repository defines a \`dev\` script:



\`\`\` bash

npm run dev

\`\`\`



The backend API base URL is:



\`\`\` text

http\://localhost:5000/api

\`\`\`



The root health response, if configured, is available at:



\`\`\` text

http\://localhost:5000/

\`\`\`



**### 3. Frontend setup**



Open a separate terminal:



\`\`\` bash

git clone \<YOUR_FRONTEND_REPOSITORY_URL>

cd \<FRONTEND_PROJECT_DIRECTORY>

npm install

\`\`\`



Configure the frontend API base URL using the environment-variable name

expected by the frontend source code. For a Vite project, this may be a

variable such as \`VITE_API_URL\`; confirm the actual name in the

repository before setting it.



For local development, the frontend is expected to run at

\`http\://localhost:5173\` when using the default Vite port. Start it using

the script defined in \`package.json\`, commonly:



\`\`\` bash

npm run dev

\`\`\`



**### 4. Verify the local setup**



\-   Confirm the backend starts without environment or database errors.

\-   Confirm the frontend starts and can reach the backend API.

\-   Test registration and login for a student account.

\-   Test admin registration only with the configured admin registration

    key.

\-   Test course listing, search, sorting, and pagination.

\-   Test enrollment, lesson completion, and progress calculation.

\-   Test admin course creation/editing and assignment review.

\-   Confirm protected routes redirect unauthenticated users to login.

\-   Confirm logout clears user-specific Redux state.

\-   Check browser console, network requests, and backend logs for

    errors.



**## Bug Report Documentation**



Maintain the detailed bug report in the required Google Docs document.

For every reproducible bug, record:



1\.  **\*\*Bug ID & Title\*\***

2\.  **\*\*Location & Steps to Reproduce\*\***

3\.  **\*\*Expected vs. Actual Result\*\***

4\.  **\*\*Severity & Evidence\*\***

5\.  **\*\*Fix & Verification Status\*\***



**### Severity and priority**



\-   **\*\*Critical:\*\*** Core functionality unavailable, application crash, or

    severe security issue

\-   **\*\*High:\*\*** Important feature fails or produces significantly

    incorrect behavior

\-   **\*\*Medium:\*\*** Incorrect behavior with a workaround

\-   **\*\*Low:\*\*** Minor UI or low-impact inconsistency



Priority levels:



\-   **\*\*P1:\*\*** Fix immediately

\-   **\*\*P2:\*\*** Fix as soon as possible

\-   **\*\*P3:\*\*** Fix after higher-priority issues

\-   **\*\*P4:\*\*** Low urgency



Only mark a bug **\*\*Fixed & Verified\*\*** after reproducing the original

issue, testing the fix, and checking relevant regression cases.

Otherwise, mark it **\*\*Unresolved\*\*** or indicate that verification is

pending. Add screenshots or error logs where applicable.



**## Part 2 --- Problem Solving**



The assigned problem set is available here:



[Open the problem-solving

set]\(https\://docs.google.com/document/d/1JUfENDeplDlPDhM8GXkt2g_vOHu4z9_LMiSDlh5kn8I/edit?usp=sharing)



Place all assigned JavaScript or TypeScript solutions in one file, such

as \`solution.js\` or \`solution.ts\`. Separate problems with comments

containing each problem's number and title, and test the solutions with

appropriate inputs and edge cases.



Suggested structure:



\`\`\` text

problem-solving/

├── solution.js

└── README.md

\`\`\`



This README documents the CourseMaster bug-fixing project. The actual

problem statements and completed solutions should be included in the

single solution file required by the assignment.



**## GitHub Submission Checklist**



\-   [ ] Frontend code is pushed to my own frontend repository.

\-   [ ] Backend code is pushed to my own backend repository.

\-   [ ] Original repositories remain unchanged.

\-   [ ] \`.env\`, passwords, API keys, and other secrets are excluded from

    Git.

\-   [ ] Both repositories include setup instructions.

\-   [ ] The bug report contains reproduction steps, expected/actual

    results, severity, evidence, fixes, and verification status.

\-   [ ] Fixes marked verified have been tested locally.

\-   [ ] All assigned problem-solving solutions are in one JavaScript or

    TypeScript file.

\-   [ ] Commits use meaningful messages.

\-   [ ] The final repositories contain the latest completed work.



**## Notes**



This README is based on the assignment requirements and the supplied

list of fix notes. Repository-specific commands, environment-variable

names, screenshots, and verification results should be confirmed against

the actual code and test runs before submission.
