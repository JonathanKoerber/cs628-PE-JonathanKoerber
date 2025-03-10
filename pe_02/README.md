# PE 2

### Assignment: 

Create an app that would render a list of objects and allow user to filter a list. The objects contain movie title, release 
year and genre. I created a directory called data to hold the list. To render the list, I created a directory called Components
that hold two components Recipes and Card. 

##### Components:

The application used two components, Recipes and Card. Recipes imports data from `data/movie.json` as a list of objects 
and maps the data into `cards`: 

#### Input: 

- Recipes: in a gallery the input it the list of movie records in a list of json objects.  
- Card: input is the props in the form of the record values. 

#### Process: 

- App: renders a Recipes component.
- Recipes: import the movie_data and reder the list of Card components
- Card: Renders props into HTML

#### Model: 

The data is in a list of JSON objects. As shown below. This is rendered recursively as described in process. 

```json
{
  "title": "string", 
  "genre": "string",
  "releaseYear": "string"
}
```