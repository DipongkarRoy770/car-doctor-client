import { Link } from "react-router-dom";
import logo from '../assets/images/login/login.svg'
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {

    const {createSingUp} = useContext(AuthContext)
    const handleSignUp =(event)=>{
        event.preventDefault()

        const form = event.target ;
        const name = form.name.value ;
        const email = form.email.value ;
        const password = form.password.value ;
        console.log(name,email,password)
        createSingUp(email,password)
         .then(result=>{
            const user = result.user 
            console.log(user)
            Swal.fire({
                title: 'success!',
                text: 'User login fast now',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            form.reset('')  
         })
         .catch(error=>console.log(error))

    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content w-3/4 flex-col lg:flex-row">
            <img className='w-full md:w-1/2 border-2 border-green-400 rounded' src={logo} alt="" />

            <div className="card bg-rose-300 w-full md:w-1/2">
                <form onSubmit={handleSignUp}  className="card-body">
                    <h2 className='text-3xl font-semibold text-center'>Resgister</h2>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" name='name' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" name='email' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" name='password' className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Resgister Now" />
                    </div>
                </form>
                <p className='my-4 text-center'>have a new accound <Link className='text-orange-500 font-bold' to='/login'>Login</Link></p>
                {/* <button className='btn btn-primary w-20 mx-auto mb-3 ' >Google</button> */}
            </div>
        </div>
    </div>
    );
};

export default Register;