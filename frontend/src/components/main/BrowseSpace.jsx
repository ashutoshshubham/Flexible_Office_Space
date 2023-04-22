import React, { useEffect, useState } from 'react'

const BrowseSpace = () => {

    const [allSpaceData, setAllSpaceData] = useState([])

    const fetchAllSpaceData = async () => {
        const res = await fetch('http://localhost:5000/addSpace/getall')
        console.log(res.status)
        if (res.status === 200) {
            const data = await res.json();
            console.log(data)
            setAllSpaceData(data)
        }
    }

    useEffect(() => {
        fetchAllSpaceData();
    }, [])




    return (
        <div>
            <table className="table mt-3">
                <thead>
                    <tr>
                        <th scope="col">Provider's Name</th>
                        <th scope="col">Provider's Contact</th>
                        <th scope="col">Provider's Email</th>
                        <th scope="col">Hall Name</th>
                        <th scope="col">Size (in sq feet)</th>
                        <th scope="col">Rate (per hours)</th>
                        <th scope="col">Location</th>
                        <th scope="col">Facilities</th>
                    </tr>
                </thead>
                {
                    allSpaceData.map((data) => (

                        <tbody>
                            <tr>
                                <th scope="row">{data.providerName}</th>
                                <td>{data.providerContact}</td>
                                <td>{data.providerEmail}</td>
                                <td>{data.name}</td>
                                <td>{data.size}</td>
                                <td>{data.rate}</td>
                                <td>{data.location}</td>
                                <td>{data.facilities}</td>
                            </tr>
                            
                        </tbody>
                    ))
                }
            </table>


        </div>
    )
}

export default BrowseSpace