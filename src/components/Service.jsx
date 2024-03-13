
import { useContext, useEffect } from "react";
import { useState } from "react";
import ServiceCart from "./ServiceCart";
import { AuthContext } from "../provider/AuthProvider";



const Service = () => {
    const {loading} = useContext(AuthContext)
    const [services, setServices] = useState([])
   
        useEffect(() => {
            fetch('http://localhost:5000/cars')
                .then(res => res.json())
                .then(data => setServices(data))
        }, [])
        if (loading) {
            return <>
                <div className="w-42 h-48 mx-auto py-3  border-l-2 border-green-500 rounded-full flex justify-center items-center animate-[spin_1.8s_linear_infinite]"><div className="w-16 h-16  border-b-2 border-indigo-500 rounded-full flex justify-center items-center animate-[spin_1.8s_linear_infinite]"><div className="w-10 h-10  border-r-2  border-sky-500 rounded-full animate-[spin_1.8s_linear_infinite]"></div></div></div>
            </>
        }
        return (
            <>
            
                <div className="text-center mt-20">
                    <h4 className="text-2xl text-red-400">Service</h4>
                    <h2 className="text-4xl font-semibold">Our Service Area</h2>
                    <p className="text-1xl px-4 mt-3">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-6 md:px-3 my-4">
                    {services.map(service => <ServiceCart
                        key={service._id}
                        service={service}
                    ></ServiceCart>)}
                </div>
            </>
        );
    };

    export default Service;