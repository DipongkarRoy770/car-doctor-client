import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";


const BookService = () => {
    const { user } = useContext(AuthContext)
    const service = useLoaderData()
    //console.log(service)
    const { _id, title, price, img } = service;

    const submitData = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const price = form.price.value;
        const order = {
            customar: name,
            email,
            service_name: title,
            service_img: img,
            date,
            price,
            service: _id
        }
        console.log(order)
        fetch('https://car-doctor-server-beta-liart.vercel.app/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged === true) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Confirm order have been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    return (
        <div>
            <h3 className="text-2xl font-semibold text-center text-red-300">Book service : {title}</h3>

            <form onSubmit={submitData}>
                <div className="md:flex px-4 md:px-12 gap-3 ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="name" placeholder="Name" name="name" defaultValue={name} className="input input-bordered" required />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" placeholder="date" name="date" className="input input-bordered" required />

                    </div>
                </div>
                <div className="md:flex px-4 md:px-12 gap-3 ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" defaultValue={user.email ? user.email : "not accound"} className="input input-bordered" required />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Due Price</span>
                        </label>
                        <input type="text" placeholder="price" name="price" defaultValue={price ? price : 'low'} className="input input-bordered" required />

                    </div>
                </div>
                <div className="px-12">

                    <input className="btn btn-success w-full mt-4" type="submit" value="Confrom Order" />
                </div>
            </form>
        </div>
    );
};

export default BookService;