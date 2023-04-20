import { useFormik } from 'formik';
import { MDBInput, MDBTextArea } from 'mdb-react-ui-kit';
import React from 'react'

const AddSpace = () => {






    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-md-6">
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title text-center">ADD OFFICE SPACE</h3>

                            <form action="">

                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        <MDBInput className='' label='Size (in feet)' id='form1' type='text' />
                                    </div>
                                    <div className="col-md-6">
                                        <MDBInput className='' label='Rate (per hours)' id='form1' type='text' />
                                    </div>
                                </div>
                                <MDBTextArea className='my-3' label='Location' id='textAreaExample' rows={3} />
                                <MDBTextArea className='my-3' label='Facilities' id='textAreaExample' rows={4} />

                                <button type="submit" className="btn btn-primary w-100">
                                    Button
                                </button>

                            </form>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AddSpace