# KanCakes-EcommerceSite
An ecommerce website coded using Angular15 framework for frontend along bootstap and JavaScript
[![Watch the video](https://i.imgur.com/vKb2F1B.png)](https://www.youtube.com/watch?v=uaBB5PYc2yY)
<video src='https://www.youtube.com/watch?v=uaBB5PYc2yY'/>

# How to run
- Open terminal and navigate to where the project is cloned/downloaded
```md
> cd KanCakes-EcommerceSite
> npm install --legacy-peer-deps
> ng serve
```
- If address 4200 is already in use, you can just kill which ever process is using the port with below command, and run again
```md
> lsof -ti:4200 | xargs kill -9
```
Go to the browser to this url: http://localhost:4200 and explore through the KanCakes Ecommerce site.

# Features and Concepts Learned
- Angular pipes were used to convert prices between CAD and USD
- Angular's Data Binding is used to change and show more images in the about section
- Angular's Event Binding was used to detect when the user starts typing in the search bar and populate according results
- Angular's ngFor was used to loop through previous Customer reviews
- Angular's ngIf was used to create a new card when the user starts typing in the 'Add a Review' section
- Angular's FormGroups were used to validate user's subscription signup form
  - The form will indicate/react accordingly depending on if user enters a valid or an invalid email
  
# File Structure
```
.
├── KanCakes-EcommerceSite/
│   ├── README.MD
│   ├── .editorconfig
│   ├── angular.json
│   ├── package-lock.json
│   ├── package.json
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   ├── tsconfig.spec.json
│   ├── .angular/
│   ├── node_modules/
│   └── src/
│   │   ├── styles.css
│   │   ├── main.ts
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── app/
│   │   └── assets/

```
