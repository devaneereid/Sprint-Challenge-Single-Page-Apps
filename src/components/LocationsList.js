// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import axios from "axios";

// const NewStyles = styled.section`
//     background: orange;
//     text-align: center;
//     padding: 20px;
// `;


// export default function LocationsList() {
//     const [locationData, setLocationData] = useState([]);

//     useEffect(() => {
//         axios
//             .get(`https://rickandmortyapi.com/api/location/`)
//             .then(response => {
//                 setLocationData(response.data.results);
//                 console.log(response.data);
//             })
//             .catch(error => {
//                 console.log(error);
//             });
//     },[]);

//     return (
//         <NewStyles>
//         <section className="location-list">
//             {locationData.map(data => {
//                 return(
//                     <div className="location-data"     key={data.id} >
//                         <h4>Location: {data.name}</h4>
//                         <h4>Type: {data.type}</h4>
//                         </div>
//                     )
//                 })}
//             </section>
//         </NewStyles>
//     )
// }
