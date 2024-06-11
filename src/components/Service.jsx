
import { useEffect, useRef } from "react";
import { useState } from "react";
import ServiceCart from "./ServiceCart";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init()



const Service = () => {
    // const {loading} = useContext(AuthContext)
    const [services, setServices] = useState([])
    console.log(services);
    const [asc, SetAsc] = useState(true)

    const searchRef = useRef(null)
    const [search ,setSearch] =useState('')

    useEffect(() => {
        fetch(`https://car-doctor-server-beta-liart.vercel.app/cars?search=${search}&sort=${asc ? 'asc' : 'desc'}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [asc,search])
    const handleSearch=()=>{
        console.log(searchRef.current.value)
        setSearch(searchRef.current.value)
    }
    return (
        <>

            <div className="text-center mt-20" data-aos="fade-up">
                <h4 className="text-2xl text-red-400">Service</h4>
                <h2 className="text-4xl font-semibold">Our Service Area</h2>
                <p className="text-1xl px-4 mt-3">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                <button onClick={() => SetAsc(!asc)} className="btn btn-secondary">{asc ? "price:high to low" : "price:low to high"}</button>
                <div className="join ml-5">
                    <input ref={searchRef} className="input input-bordered join-item" placeholder="search now" />
                    <button onClick={handleSearch} className="btn join-item rounded-full">Search</button>
                </div>
               
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-6 md:px-3 my-4"  >
                {services.map(service => <ServiceCart
                    key={service._id}
                    service={service}
                ></ServiceCart>)}
            </div>
        </>
    );
};

export default Service;