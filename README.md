# QueerBookDatabase

## Description
This application is a website featuring a list of books about LTBTQ+ themes and identeties. It is meant to be a place for people to find inspiration for what book to read next. 
## How to run it locally:
* Clone the repository using 'git clone https://github.com/kai-ericson/QueerBookDatabase'
* Open the backend code in IntelliJ
* Create application.properties in recources in the backend folder and add the mongodb uri
* Open the frontend code in VSCode
* To run the frontend type 'ng serve --proxy-config proxy.config.json' in the terminal
* To start the backend run the main method in QbdApplication
* The site can be accessed at: http://localhost:4200/
* To test HTTP calls visit localhost:8080/api/books
## Tech stack
### Frontend:
* Angular
* TypeScript
* HTML
* CSS

### Backend:
* SpringBoot
* Java
* MongoDB

## Deployment
The application is currently not deployed. In the future it will be deployed using Vercel.