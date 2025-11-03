import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () =>{
    const error = useRouteError();

    return (
        <div>
        <h1>Oops!Error Message</h1>
        {error && <p>{error.data}</p>}
        <NavLink to ="/">
        <button>Go Home</button>
        </NavLink>
        </div>
    

    );

}