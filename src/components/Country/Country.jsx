import { useState } from 'react';
import './country.css'
const country = ({country}) => {
    console.log(country);
    const {name, flags, region,cca3} = country;
    const[visited, setVisited] = useState(false);
    const handleVisited =() =>{
        setVisited(!visited);

        
    }

    return (
        <div className="country-des">
            <h3>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <h4>Region: {region} </h4>
            <p><small>Code: {cca3}</small></p>
            <button onClick={handleVisited}>{visited? 'visited' : 'Go' }</button>
            {
                visited ? <div>
                    <h4>Welcome to {name.common}!</h4>
                    <p>This is your first time visiting this country. Enjoy your stay!</p>
                </div> : <p>Want to visit this country</p>



            }
        </div>
    );
};

export default country;