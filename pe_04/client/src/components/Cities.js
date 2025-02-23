import React, {useEffect} from 'react';
import Card from "./Card";
import AddCity from "./AddCity";


const Cities = () => {
    const [loading, setLoading] = React.useState(true);
    const [addCity, setAddCity] = React.useState(false);
    const [cities, setCities] = React.useState([]);

    useEffect(() => {
        if(cities){
            setLoading(false);
        }
    }, [cities]);

    const handleAddCity = (city) => {
        setCities(prevState => [...prevState, city]);
        setAddCity(!addCity);
    }

    return(
        <>
        <div className={"App-header"}>
            <h2>Cities Application</h2>
            <div className={"App-nav"}>
                <h3 className={"App-nav-item"} onClick={() => setAddCity(false)}>View Cities</h3>
                <h3  className={"App-nav-item"} onClick={() => setAddCity(true)}>Add Cities</h3>
            </div>
        </div>
        <div className={"galleryListContainer"}>
            <h2>Cities List:</h2>
            {!addCity ? (
                loading ? (
                    <h2>loading... </h2>
                ) : cities.length > 0 ? (
                    cities.map((item, index) => (
                        <Card key={index * 10}
                              city_name={item.city_name}
                              country={item.country}
                              state={item.state}
                              population={item.population}
                        />
                    ))
                ) : (
                    <h2>No cities found please add one.</h2>
                )
            ) : (
                <AddCity onAddCity={handleAddCity}/>
            )
            }
        </div>
</>
)
}
export default Cities;