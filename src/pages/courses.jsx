import React from "react";

const Courses = () =>{
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className='col-md-12 display-box' style={{marginTop: '10%'}}>
                    <div className="row justify-content-around align-items-center inner-display-box">
                        <div className="col-3">
                            <h4>Term</h4>
                        </div>
                        <div className="col-3">
                            <h4>Year</h4>
                        </div>
                        <div className="col-3">
                            <h4>Level</h4>
                        </div>
                    </div>
                    <br/>
                    <div className="col-md-12 inner-display-box">
                        <ul className="list-group" style={{textAlign: 'left'}}>
                            <li className="list-group-item">Computer Science</li>
                            <li className="list-group-item">Engineering</li>
                            <li className="list-group-item">Medicine</li>
                            <li className="list-group-item">Accounting</li>
                            <li className="list-group-item">Economics</li>
                        </ul>
                    </div>
                    <br/>
                    <div style={{float: 'right'}}>
                        <button className="btn btn-primary">Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses;