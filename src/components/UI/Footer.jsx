import { MdPlace } from "react-icons/md";
import MyFooter from "../../api/footerApi.json";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
import { NavLink } from "react-router-dom";

export const Footers = () =>{
    const footerIcon ={
        MdPlace:< MdPlace/>,
        IoCallSharp:<IoCallSharp/>,
        TbMailPlus:<TbMailPlus/>,
    }
    return(
    <div className="mt-5 bg-dark text-light">
    <footer className="container ">
        <div className="row py-3">
        
            {MyFooter.map((footeritem,index)=>{
        const {icon,title,details} = footeritem;
        return(
            <section className=" col-md-4  d-flex justify-content-md-center  myfooter" key={index}>
                <div className="fs-4 px-3 align-items-center ">
                    {footerIcon[icon]}
                </div>

                <div >
                    <p className="mytext">{title}</p>
                    <p className="mytext">{details}</p>
                </div>
            </section>
            
        )
    
    })}
        
    </div>
    


        <div className="container"> 
            <div className="row justify-content-between">
                <div className="col-md-6 text-md-center">
                    <p>
                        Copyright &copy; 2025, All Right Reserved <NavLink to="https://github.com/Tanvir-Islamm" className="text-decoration-none">Mahin</NavLink>
                    
                    
                        
                    </p>
                </div>

                <div className="col-md-6 " >
                    <ul className="d-flex justify-content-md-end list-unstyled mb-0">
                        <li className="nav-item ">
                            <NavLink className="footernav social"to="https://github.com/Tanvir-Islamm">
                               <span className="social">Social</span> 
                            </NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="footernav"to="https://github.com/Tanvir-Islamm">
                                Contact
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="footernav"to="/home">
                                Home
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    
    </footer>
    </div>
    )
    
}