import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import TableRow from "./TableRow";


const Booking = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBooking] = useState([])
    const url = `http://localhost:5000/booking?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [url]);

    const handleDelete = (id)=>{
        console.log(id)
        fetch(`http://localhost:5000/booking/${id}`,{
            method:'DELETE'
        })
         .then(res=>res.json())
         .then(data=>{
            console.log(data)
            if(data.deletedCount>0){
                alert('booking data deleted')
                const remaining =bookings.filter(book =>book._id!==id) 
                setBooking(remaining)
            }
         })
    }
    const handleBookingConfirm =(id)=>{
        console.log(id)
        fetch(`http://localhost:5000/booking/${id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({status:'Confirm'})
        })
         .then(res =>res.json())
         .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
                const remaining = bookings.filter(book=>book._id!==id)
                const search = bookings.find(book=>book._id===id)
                search.status ='confirm';
                const result = [search,...remaining]
                setBooking(result)
            }
         })
    }
   
    return (
        <div>
            <h2 className="text-4xl text-center text-red-300">My Booking Serial :{bookings.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                serial no:
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Date and Time</th>
                            <th>details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(service=><TableRow
                            key={service._id}
                            service={service}
                            handleDelete={handleDelete}
                            handleBookingConfirm={handleBookingConfirm}
                            ></TableRow>)
                        }
                       
                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default Booking;