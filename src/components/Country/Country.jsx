import './country.css'
const country = ({country}) => {
    console.log(country);
    const {name, flags, region} = country;
    return (
        <div className="country-des">
            <h3>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <h4>Region: {region} </h4>
        </div>
    );
};

export default country;