
# Credit Card System

## Instructions to build and run the project

### Install the [NodeJS + NPM system](https://nodejs.org/en/)

### Download and install the [Git tools](https://git-scm.com/downloads) if you don't have it already installed.

### Clone the repository: 
> git clone `https://github.com/rspievakc/codingTest`

### Enter the frontend module:
> cd codingTest/frontend

### initialize the build system (may take some time to finish):
> npm init

### Build the frontend
> npm run build

### Switch to the backend module:
> cd ../backend

### Build the project:
For windows platforms:
>./gradlew.bat build

For OSX/Linux platforms:
>./gradlew build

### To run the project
For windows platforms:
>./gradlew.bat bootrun

For OSX/Linux platforms:
>./gradlew bootrun

### To run directly from the build artifact:

The build artifacts are located at: `backend/build/libs/`.  
This folder also contains the JavaDoc and Source code.

to execute it:

>java -jar backend/build/libs/codingTest-0.0.1-SNAPSHOT.jar

### To run the tests:

For the front end:

>cd frontend  
>npm run test


For the backend:

>cd backend
For windows platforms:
>./gradlew.bat test

For OSX/Linux platforms:
>./gradlew test