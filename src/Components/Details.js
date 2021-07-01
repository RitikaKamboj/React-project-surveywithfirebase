import React from 'react'

export default function Details(props) {
    return (
        <div className="container-fluid">
            <div className="col-md-5 m-auto">
                <div className="mt-3">
                    <div className="card text-left">
                        <div className="card-body">
                            <form onSubmit={props.submit}>
                                <div className="form-group">
                                    <label htmlFor="">
                                        {" "}
                                        <b>1.</b>Name
                                    </label>
                                    <input
                                    type="text"
                                    name="name"
                                    className="form-control"  
                                    placeholder="Please Enter Your Name"
                                    autoComplete="off"    
                                    required     
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">
                                        {" "}
                                        <b>2.</b>Email
                                    </label>
                                    <input
                                    type="email"
                                    name="email"
                                    className="form-control"  
                                    placeholder="Please Enter Your EmailID"
                                    autoComplete="off" 
                                    required        
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Next
                                </button>
                            </form>
                            <center>
                                <span className="badge badge-pill badge-primary">1</span>
                                <span className="badge badge-pill disabled">2</span>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
