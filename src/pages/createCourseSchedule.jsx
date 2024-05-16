import React from 'react';
import {Link} from 'react-router-dom'

const CreateCourseSchedule = () =>{
    return(
        <div className='container'>
            
            <div className='row justify-content-center align-items-center'>
                <div className='col-md-12 display-box' style={{marginTop: '30%'}}>
                    
                    <Link className='btn btn-primary' to='/upload-transcript'>Create Course Schedule</Link>
                </div>
            </div>
        </div>
    )
    
}

export default CreateCourseSchedule;