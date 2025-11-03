export const Contact = () =>{

    const handleFormSubmit = (formData) => {
        const formInputData = Object.fromEntries(formData.entries());
        console.log(formInputData);
    }
    return (
        <section className="container pdTop">
            <div className="row justify-content-center">
            
            <div className=" text-center">
                <h1>Contact Us</h1>
            </div>
            <div className="col-12 col-sm-6 col-md-6" >
                <form action={handleFormSubmit} >
                    
                    <div >
                        <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                            <input className="form-control" type="text" 
                            name="username" 
                            placeholder="Enter your name"
                            required
                            autoComplete="off" />
                        
                    </div>
                    <div >
                        <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                            <input  className="form-control" type="email" 
                            name="Email" 
                            placeholder="Enter your email"
                            required
                            autoComplete="off"/>
                    
                        
                    </div>

                    <div >
                        <label htmlFor="eexampleFormControlTextarea1" className="form-label"></label>
                            <textarea class="form-control" type="text" id="exampleFormControlInput1"
                            name="Message" 
                            placeholder="Enter your Message"
                            required
                            autoComplete="off"
                            rows = "10"></textarea>

                        
                    </div>

              
                    <button type="submit" value="send" className="btn btn-danger my-2">Send</button>
                </form>
            </div>
                
            </div>
        </section>
    )
    
}