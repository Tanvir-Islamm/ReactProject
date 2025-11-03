import MyCountry from "../api/countries.json";
export const About = () =>{
    return (
        <section className="aboutSection"> 
            <div className="text-center mb-5 " >
                <p className="aboutp">
                    Here are the interesting Facts <br/>
                    we're proud of
                </p>
            </div>


            <div className="container">
                <div className="row g-4">
                    {MyCountry.map((country) =>{
                    const {id,countryName,capital,population,interestingFact} = country;
                    return(
                    <div className=" col-12 col-sm-6 col-lg-3 ">
                        <div className="card h-100 card-style ac-style " key={id}> 
                        <div className="card-body ">
                            <h5 className="card-title">{countryName}</h5>
                            <p><span>Capital: </span>{capital}</p>
                            <p><span>Population: </span>{population}</p>
                            <p><span>Interesting Fact: </span>{interestingFact}</p>
                        </div>
                    </div></div>   
                    
                    )

                })}
                </div>

            </div>
        </section>

    )
}