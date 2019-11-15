import React, { useEffect, useState } from "react";
import axios from "axios";

export default function LocationsList() {
    const [locationData, setLocationData] = useState([]);

    useEffect(() => {
        axios
            .get(`https://rickandmortyapi.com/api/location/`)
            .then(response => {
                setLocationData(response.data.results);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    },[]);

    return (
        <section className="location-list">
            {locationData.map(data => {
                return(
                    <div className="location-data"     key={data.id} >
                       <p>Location: {data.name}</p>
                        <h4>Type: {data.type}</h4>
                        <p>Dimension: {data.dimension}</p>
                        </div>
                )
            })}
        </section>
    )

}
