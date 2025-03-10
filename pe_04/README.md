# PE 4

### Assignment: 

Create an app that would render a list of objects and allow a user to add cities to a list. The list displays the city name
if the user clicks on the user, they can see details. 

##### Components:

The application used three components, Recipes Card and AddRecipe. Recipes toggle between displaying the city list and the 
AddRecipe Component. AddRecipe component allows user to add city records. These records are held in state.  

#### Input: 

- AddRecipe takes user input. The Components is passed a function form the Recipes component that allows it to add a city record
to state and toggle the view to the city list.

<img src="Screenshot from 2025-02-22 16-24-04.png" width=300/>

- The input checks to make sure that all fields are present
'
<img src="Screenshot from 2025-02-22 16-25-29.png" width=350/>

#### Process: 

- App: renders a Recipes component.
- AddCities: Allow user to add city records
- Card: holds city data and toggles the data

#### Model: 

The data is in a list of JSON objects. As shown below. This is rendered recursively as described in process. 

```json
{
  city_name: "",
  country: "",
  state: "",
  population: ""
}
```

<img src="Screenshot from 2025-02-22 16-26-54.png" width=400/>
