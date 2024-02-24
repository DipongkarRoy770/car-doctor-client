
import { useEffect } from "react";
import { useState } from "react";
import ServiceCart from "./ServiceCart";


const Service = () => {
    const [services ,setServices] = useState([])

    useEffect(()=>{
        fetch('services.json')
         .then(res=>res.json())
          .then(data=>setServices(data))
    },[])
    return (
        <>
            <div className="text-center mt-20">
                <h4 className="text-2xl text-red-400">Service</h4>
                <h2 className="text-4xl font-semibold">Our Service Area</h2>
                <p className="text-1xl px-4 mt-3">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-6 md:px-3 my-4">
               {services.map(service=><ServiceCart
               key={service._id}
               service={service}
               ></ServiceCart>)}
            </div>
        </>
    );
};

export default Service;