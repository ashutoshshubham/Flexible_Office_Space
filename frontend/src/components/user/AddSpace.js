import { Formik, useFormik } from 'formik';
import { MDBInput, MDBTextArea } from 'mdb-react-ui-kit';
import React from 'react'
import Swal from 'sweetalert2';

const AddSpace = () => {

    const spaceData = async (formdata, { resetForm }) => {
        const res = await fetch('http://localhost:5000/addSpace/add', {
            method: 'POST',
            body: JSON.stringify(formdata),
            headers: {
                'Content-Type': 'application/json'
            }
        })


        console.log(res.status);

        if (res.status === 200) {
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Data Added Successfully'
            })
            const data = await res.json();
            console.log(data)
            resetForm();
            // return data._id;
            // navigate('/user');
        }
    }






    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-md-6">
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title text-center">ADD OFFICE SPACE</h3>

                            <Formik
                                initialValues={{
                                    size: '',
                                    rate: '',
                                    location: '',
                                    facilities: ''
                                }}
                                onSubmit={spaceData}>

                                {({ values, handleChange, handleSubmit }) => (
                                    <form onSubmit={handleSubmit}>

                                        <div className="row mt-3">
                                            <div className="col-md-6">
                                                <MDBInput className='' label='Size (in feet)' id='size'
                                                value={values.size} onChange={handleChange} type='text' />
                                            </div>
                                            <div className="col-md-6">
                                                <MDBInput className='' label='Rate (per hours)' id='rate' value={values.rate} onChange={handleChange} type='text' />
                                            </div>
                                        </div>
                                        <MDBTextArea className='my-3' label='Location' rows={3} id='location' value={values.location} onChange={handleChange}/>
                                        <MDBTextArea className='my-3' label='Facilities' id='facilities' value={values.facilities} onChange={handleChange} rows={4} />

                                        <button type="submit" className="btn btn-success w-100">
                                            Submit
                                        </button>

                                    </form>
                                )}

                            </Formik>



                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AddSpace