# cs628-pe_01

## Resume

This application uses create-react-app to build an application. We then follow along with the 
assignment to end up with which what is displayed in this repo. We are asked to create a 
150-word essay on explaining how the project works for an input process model. I'll do my best, but 
there is a lot of JS magic that goes on inside REACT that makes this all work which I can only 
summarize at a high level. 

### My Understanding of REACT 
REACT is responsible for creating and maintaining the app's Document Object Model (DOM) tree. REACT 
components are javascript objects are rendered into as html. In src/index.mjs you can see this 
happening in the following code.
```javascript
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
```

#### Input
Our input in this case is the App component from client/src/App.js. This is the sum total of all the
files that will be included in the app. In our we only have one component resume-v1.js. React uses 
the idea of composition. While we are not doing this in this app, generally in a React app you'll 
see hundreds of components that can be used through the app.

#### Process

React takes the App or whatever the root object is called and renders it using ReactDOM to create
the DOM object that renders into mode. 

##### Model

The model in this case would be the DOM which React maintains a copy of and is able to analyze to 
detect changes in. React when a change happens, it is able to update just the part of the DOM that has
changed and doesn't need to update and redraw the entire UI. 

###### Reference 
[React Under the Hood](https://www.freecodecamp.org/news/react-under-the-hood/) - FreeCodeCamp


