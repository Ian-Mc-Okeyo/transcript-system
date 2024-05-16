import React from 'react';

const UploadTranscript = () =>{
    return(
        <div className='container'>
            
            <div className='row justify-content-center align-items-center'>
                <div className='col-md-8'>
                    <form>
                    <div style={{marginTop: '40%'}} className='display-box'>
                        <label for="formFileLg" class="form-label"><b>Upload Unofficial Transcript</b></label>
                        <input class="form-control form-control-lg" id="formFileLg" type="file"/>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
    
}

export default UploadTranscript;