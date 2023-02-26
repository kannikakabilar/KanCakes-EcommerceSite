# KanCakes-EcommerceSite
An ecommerce website coded using Angular15 framework for frontend along bootstap and JavaScript

[![IMAGE ALT TEXT](https://github.com/kannikakabilar/KanCakes-EcommerceSite/blob/main/screenshots/Screen%20Shot%202023-02-26%20at%201.51.02%20PM.png)](https://www.youtube.com/watch?v=uaBB5PYc2yY "KanCakes Demo")

https://www.youtube.com/watch?v=uaBB5PYc2yY

<p align="center">
  <img alt="Light" src="screenshots/Screen Shot 2023-02-26 at 4.08.33 PM.png" width="45%">
&nbsp; &nbsp; &nbsp; &nbsp;
  <img alt="Dark" src="screenshots/Screen Shot 2023-02-26 at 4.08.40 PM.png" width="45%">
</p>

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
<p align="center">
  <img alt="Light" src="screenshots/Screen Shot 2023-02-26 at 1.51.02 PM.png" width="45%">
&nbsp; &nbsp; &nbsp; &nbsp;
  <img alt="Dark" src="screenshots/Screen Shot 2023-02-26 at 4.33.44 PM.png" width="45%">
</p>
- Angular's Data Binding is used to change and show more images in the about section
<p align="center">
  <img alt="Light" src="screenshots/Screen Shot 2023-02-26 at 4.09.11 PM.png" width="45%">
&nbsp; &nbsp; &nbsp; &nbsp;
  <img alt="Dark" src="screenshots/Screen Shot 2023-02-26 at 4.33.13 PM.png" width="45%">
</p>
- Angular's Event Binding was used to detect when the user starts typing in the search bar and populate according results
![Quote](https://github.com/kannikakabilar/KanCakes-EcommerceSite/blob/main/screenshots/Screen%20Shot%202023-02-26%20at%204.09.43%20PM.png)
- Angular's ngFor was used to loop through previous Customer reviews
![Quote](https://github.com/kannikakabilar/KanCakes-EcommerceSite/blob/main/screenshots/Screen%20Shot%202023-02-26%20at%204.10.16%20PM.png)
- Angular's ngIf was used to create a new card when the user starts typing in the 'Add a Review' section
![Quote](https://github.com/kannikakabilar/KanCakes-EcommerceSite/blob/main/screenshots/Screen%20Shot%202023-02-26%20at%204.11.04%20PM.png)
- Angular's FormGroups were used to validate user's subscription signup form
  - The form will indicate/react accordingly depending on if user enters a valid or an invalid email
<p align="center">
  <img alt="Light" src="screenshots/Screen Shot 2023-02-26 at 4.11.16 PM.png" width="45%">
&nbsp; &nbsp; &nbsp; &nbsp;
  <img alt="Dark" src="screenshots/Screen Shot 2023-02-26 at 4.11.42 PM.png" width="45%">
</p>
<p align="center">
  <img alt="Light" src="screenshots/Screen Shot 2023-02-26 at 4.32.30 PM.png" width="45%">
&nbsp; &nbsp; &nbsp; &nbsp;
  <img alt="Dark" src="screenshots/Screen Shot 2023-02-26 at 4.32.48 PM.png" width="45%">
</p>
- Other visually expressive features were implemented using JavaScript functions
<p align="center">
  <img alt="Light" src="screenshots/Screen Shot 2023-02-26 at 4.08.56 PM.png" width="45%">
&nbsp; &nbsp; &nbsp; &nbsp;
  <img alt="Dark" src="screenshots/Screen Shot 2023-02-26 at 4.09.55 PM.png" width="45%">
</p>
<p align="center">
  <img alt="Light" src="screenshots/Screen Shot 2023-02-26 at 4.10.02 PM.png" width="45%">
&nbsp; &nbsp; &nbsp; &nbsp;
  <img alt="Dark" src="screenshots/Screen Shot 2023-02-26 at 4.11.50 PM.png" width="45%">
</p>
  
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
│   │   │   ├── app-routing.module.ts
│   │   │   ├── app.component.css
│   │   │   ├── app.component.html
│   │   │   ├── app.component.spec.ts
│   │   │   ├── app.component.ts
│   │   │   └── app.module.ts
│   │   └── assets/
│   │   │   ├── css/
│   │   │   ├── img/
│   │   │   └── js/
________________________________________


```
