import { NavLink } from "react-router-dom";
export const HeroSection = () =>{
     return(
        <main className="container hero">
            <section className="row align-items-end hero">
                
                <div className="col-12 col-md-6 heroOne">
                    <h1>Explore the World,One <br />Country at a Time</h1>
                    <p>Discover the history,culture and beauty of every nation.Sort,search and <br />
                    Filter through countries to find the details you need.</p>
                    <button className="btn btn-danger">
                        <NavLink to="/country" className=" px-2 py-2 rounded-3 fw-semibold text-decoration-none text-white">
                            Start Exploring
                        </NavLink>
                    </button>
                </div>
                
                <div className="col-12 col-md-6 heroTwo"> 
                    <img src="/images/world.png" alt="World Image" className="img-fluid "/>
                    
                </div>
                
                
            </section>
        </main>

     );
}