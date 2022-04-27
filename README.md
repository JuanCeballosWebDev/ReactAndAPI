<h1>Documentation of Every Function and Detailed Explanations</h1>
<br>
<br>
<br>
<h4>The App Component:</h4> This component is the parent or head of the tree. All child components go down on the tree structure as components that are returned as jsx. It has several imports. The first one is "import React, {useEffect, useState} from 'react';" which takes care of the hooks. The useState hook allows me to track states in a function component. State generally refers to data or properties that need to be tracked in an application. The useEffect hook allows me to perform side effects in my components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional. All the other imports are a way to import all the files that I will use in the parent component.
<br>
<br>
In this case, I am getting all the data from an API. The API is accessed using a link instantiated on a constant variable called URL. After this, the main function App is created. The first thing that appears inside the function is four useState hooks. They create four state variables to use globally inside the function. The second aspect is two global arrays that I will use later and that I will explain after as well. The third part is a function that takes care of the API. It uses a method called fetch(). The fetch() method in JavaScript is used to request to the server and load the information on the webpages. The request can be of any APIs that return the data of the format JSON or XML. This method returns a promise. According to the article, Introduction to Promises by Ari Lerner," [a] promise object is simply a wrapper around a value that may or may not be known when the object is instantiated and provides a method for handling the value after it is known (also known as resolved) or is unavailable for a failure reason (we'll refer to this as rejected)" (Lerner). Inside the function "getStudents" I do have not only the fetch method but also other methods like "then" and "catch" that create a chain of promises. If all the promises pass, they will continue down the chain. If not, they will go to the catch method and, in this case, give an alert. The response.json() method transforms the API object into an object suitable for javascript. 

The "delateTag" function takes two para parameters. One is each tag value located inside the array "student.tags." The second one is the object student. A copy of the array "filteredStudentData" is made inside the function. Later the copy is used with the method "forEach" to go through each student object and compare its "id" with the "id" of the object parameter student. If the "ids" are equal, the array is filtered using the filter method giving an array of the tag or tags that are not similar to the tag parameter erasing the tags selected by the user. The "addTag" function adds tags to each student when the user inputs a tag name and presses enter. It uses the push method to push new information into the array student.tags and then updates the exact student object rendering later the main object already updated. 

The "filterContent" function filters the user's search information, rendering only the student objects that the user wishes to look for. This function allows the user to search for a student using the student's name or by tag, or both. It uses the arrays "filteredContent" and "filteredContentTag" to push the information the user needs and update the main object. The function also uses the concat method to concatenate both arrays if the user searches for names and tags. The "filterContentTag" function has a similar role as "filteredContent." The main difference is that this function specifically takes care of updating the main object according to tags. "filteredContent" takes care of concatenating all the information in one array. 

Next, we have the useEffect hook, which performs the side effects of the function "getStudents" after the state is updated and the components have been rendered. After this, we have "return," which returns all the child components and HTML elements. This part has two event handlers. The first one is "handleNameFilterInput" which is the event that gets the input entered by the user and that allows him to search by name. The second one is "handleTagFilterInput" which allows users to search by tag.
<br>
<br>
<h4>The Index File:</h4> I import the react and react-dom libraries in this file. Here is where I also import the App component and the App.css file. Next, I use the function ReactDOM.render(). This function controls the content of the container nodes I pass in. With this function, I can replace the content of any DOM element using the ReactDom.render(). It renders my components to the DOM while the component's render returns the element that makes up the component. Next, we have the component React.StrictMode inside the function. The component can be viewed as a helper component that allows developers to code efficiently and brings to their attention any suspicious code which might have been accidentally added. The StrictMode can be applied to any section of the application, not necessarily to the entire application. It is beneficial to develop new code or debug the application. Inside the ReactDOM.render we have the parent component, which uses the libraries mentioned. Thanks to the parent component, all the child components can also use the react libraries mentioned "document.getElementById('root')" is part of the DOM, and it grabs all the code inside the root id. This is called a "root" DOM node because React DOM will manage everything inside it.
<br>
<br>
<h4>PlusButton child component:</h4> This part takes care of rendering the symbol "+" which is a button. When it is clicked, it switches from "+" to "-" using the same event handler and a hook that changes the string value. The function also shows or hides the grades by using the "student.grades" array, which is revealed by using the same event handler and by using another hook that updates the array.  
<br>
<br>
<h4>TagInput child component:</h4> This aspect renders a form that takes care of receiving input from the user and adds new tags to the student the user is planning to add tags to. It uses an "onChange" event to update the value entered by the user and store it in a state variable. It also uses a submit event that triggers once the user presses enter, adding the information to the function "addTag."
<br>
<br>
<h4>Tags child component:</h4> This part renders another child component called "Tag." It passes the parameters student, an object, and the function "deleteTag" already explained in the "App" component. It also maps the array "student.tags" for information. If it has, it returns HTML to show all the tags on the screen. 
<br>
<br>
<h4>Tag child component:</h4> This feature is the lowest part of the tree since the information must pass through the "tags" child component first. This is what outputs the tag or tags values on the screen using a <div> element with an "onClick" event. The event erases the tag selected by the user. To do this, the "deleteTag" function is used. 
<br>
<br>
 <h4>The "utils" JavaScript File:</h4> This file has two functions. The first one is "formatStudentData" which receives the object students already transformed into an object that JavaScript can use. Inside, the function "_sortByStudentFirstName" runs before anything else happens. This function also receives the object students as a parameter, which later is copied into the array "sortedStudents." This array is used to sort all student objects in alphabetic order using the method sort(). Once the array is sorted, the function  "formatStudentData" maps the array. The map() method calculates the average of all grades and returns an object of each student but including the keys average, fullName, and tags with their respective values. The "formatStudentData" is the only function in this document that is exported and used in the App component. 
<br>
<br>
  <h4>The "App.css" File:</h4>This file takes care of the design. I used a technology called "grid" since this relatively new technology makes things easier when you have several elements to spread around the screen. Grid can divide the screen into columns and rows and gives the developer the option to place each component in a specific cell. Another aspect is animation, specifically wiggle that wiggles the tags once the user places the cursor on them. I used ids and classes mainly to give style to all the elements I needed. Everything else is straightforward.
<br>
<br>
<br>
<h4>Works Cited</h4>

Lerner, Ari. Introduction to Promises. Fullstack React: Introduction to Promises (newline.co). https://www.newline.co/fullstack-react/30-days-of-react/day-15/
 <br>
<br>
 <br>
<br>
  <br>
<br>






# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
