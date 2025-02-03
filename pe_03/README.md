# CS628 Full stack Web
# PE 03

### Assignment: 
- Create separate components for the ToDo list and ToDo tasks.
- Use the useState hook to manage the state of the ToDos.
- Implement event handlers to capture user interactions, such as clicking the "Add Task" or "Delete" buttons.
- Use the .map() function to dynamically render the list of ToDos.
- Apply CSS styling of your choice to enhance the user interface.
- Write 150-word analysis explaining how the program works using the input processes model

### Analysis
How the application runs using REACT was discussed in the PE02, so we will focus on the components used for fulfilling
assignment requirements. 

#### Input
___

This application uses a built-in Form components form react. Within the Form component, I nested an input and button 
components. With in the Form comments JSX we set the onSubmit prop to set the function that would be called when the 
submit button pressed. Button type prop is set to sumbit, and input name prop is set to todo. Wich these props set the 
form component is set to take input form the user. When the *submit* button is pressed `handleAddTodo` button is called 
and collecting the input in the input box. 
#### Process
____

- Adding Todo messages. When the user has added text to the input box, and they press submit, the text in the
input box is passed the `handleAddTodo` message. This function is passed as input the text from the form input. If the 
input string is empty, it returns without adding any records to state, it creates a unique id and then adds the object
to the application state. 
- One a task object is added to the application state the useState object that in this case is an array of task objects
is mapped into a div below the form. Each object is rendered into a div using their id and displaying the task description.
A Delete button is also added so that the task object can be deleted from the list. 
- Deleting Todo messages. When the delete button is clicked, `handleRemoveTodo` is called. This takes the task object unique
Id and filter that id out of the list. The state list is updated and the useState method setState is called. 

#### Model
____

Data is stored in an array using he useState hock. Task objects are stored with a text and unique id. The useStat hook
allows the application to access this data though the constant value `todo` and update the data in the const with the 
`setTodos` function. 