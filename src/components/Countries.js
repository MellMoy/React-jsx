import React, {useState} from "react";
import axios from "axios";

function Countries() {
    const [countries, setCountries] = useState([])
    if(!countries){
    axios.get("http://restcountries.eu/rest/v2/all").then(res => {
        console.log(res);
        setCountries(res.data);

    });

    }
    return (
        <table>
            <thead><tr><th>Name</th>Capital</tr></thead>
            <tbody>
                {countries.map(country =><tr>
                    <td>{country.map}</td>
                    <td>{country.capital}</td>
                    </tr>)}
            </tbody>
        </table>
    );
}

export default Countries;