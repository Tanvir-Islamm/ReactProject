import { NavLink } from "react-router-dom";

export const CountryCard = ({country})=>{
    const{flags, name, population, region, capital} = country;
    return(

        <div className="card h-100 card-style">
            <div>
                <img src={flags.svg} alt={flags.svg} className="card-img-top country-img"  />
            </div>

            <div className="card-body">
                <h5 className="card-title">{name.common.length >10?name.common.slice(0,10)+"...":name.common}</h5>
                <p>Population: {population}</p>
                <p>Region: {region}</p>
                <p>
                    Capital: {capital && capital[0] 
                        ? (capital[0].length > 10 ? capital[0].slice(0,10) + ".." : capital[0]) 
                        : "N/A"}
                </p>


                <NavLink  to={`/country/${name.common}`}>
                <button className="btn btn-primary">Read More</button>
                </NavLink>

            </div>
            </div>
             

        
    )
}

