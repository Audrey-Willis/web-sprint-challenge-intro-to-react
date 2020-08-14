import React from "react";
import styled from 'styled-components'

const StyledCharacter = styled.div`

    border: solid #f0e14a 5px;
    width:30%;
    margin:5%;
    background-color:#e4a788;
img{
    border: 2px solid #44281d;
    padding:3%;
    background-color:#44281d;
    margin:2%;
    width:50%;
}
h1{
    font-size:1.2rem;
    text-decoration:underline;
}


`

 const Character = ({image, name, status, origin, species, gender}) => {
     return(
         <StyledCharacter>
             <img src= {image}/>
             <h1> {name} </h1>
              <p>Status: {status}</p>
              <p>Planet: {origin}</p>
              <p>Species: {species}</p>
              <p>Gender: {gender}</p>
        </StyledCharacter>
     );
 };

 export default Character; 

 


