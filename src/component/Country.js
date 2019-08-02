import React from 'react';

function Country(props){
    return (
        <li> <button onClick = {this.DeleteCountry}> Delete </button>Country name:{props.data.name},
        <img  src={props.data.flag}></img> ,
        Capital: {props.data.capital} </li>
    )
}

export default Country;