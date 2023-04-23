import { Formik, useFormik } from 'formik';
import { MDBInput, MDBTextArea } from 'mdb-react-ui-kit';
import React, { useState } from 'react'
import Swal from 'sweetalert2';

const AddSpace = () => {

    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')))
    console.log(currentUser)

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
            // resetForm();
            // return data._id;
            // navigate('/user');
        }
    }






    return (
        <div className='container'>

            <div className="card border border-primary mt-5">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6 my-auto">
                            <img src="https://coolwallpapers.me/picsup/3090602-apple_computer_desk_electronics_indoors_lamp_laptop_light_macbook_room_table_technology_workplace_workspace.jpg" alt="" className='w-100' />
                        </div>
                        <div className="col-md-6">
                            <div className="card shadow-0">
                                <div className="card-body">
                                    <h3 className="card-title text-center">ADD OFFICE SPACE</h3>

                                    <Formik
                                        initialValues={{
                                            providerName: '',
                                            providerContact: '',
                                            providerEmail: '',
                                            name: '',
                                            size: '',
                                            rate: '',
                                            location: '',
                                            facilities: '',
                                            user: currentUser._id
                                        }}
                                        onSubmit={spaceData}>

                                        {({ values, handleChange, handleSubmit }) => (
                                            <form onSubmit={handleSubmit}>

                                                <div className="row">
                                                    <div className="col-md-6  mt-3">
                                                        <MDBInput className='' label="Provider's Name" id='providerName'
                                                            value={values.providerName} onChange={handleChange} type='text' />
                                                    </div>
                                                    <div className="col-md-6 mt-3">
                                                        <MDBInput className='' label="Provider's Contact" id='providerContact' value={values.providerContact} onChange={handleChange} type='number' />
                                                    </div>
                                                </div>

                                                <MDBInput className='mt-3' label="Provider's Email" id='providerEmail'
                                                    value={values.providerEmail} onChange={handleChange} type='email' />
                                                <MDBInput className='mt-3' label='Hall Name' id='name'
                                                    value={values.name} onChange={handleChange} type='text' />

                                                <div className="row">
                                                    <div className="col-md-6  mt-3">
                                                        <MDBInput className='' label='Size (in sq feet)' id='size'
                                                            value={values.size} onChange={handleChange} type='text' />
                                                    </div>
                                                    <div className="col-md-6 mt-3">
                                                        <MDBInput className='' label='Rate (per hours)' id='rate' value={values.rate} onChange={handleChange} type='text' />
                                                    </div>
                                                </div>
                                                <MDBTextArea className='my-3' label='Location' rows={3} id='location' value={values.location} onChange={handleChange} />
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





            </div>
        </div>
    )
}

export default AddSpace