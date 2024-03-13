import { Link } from "react-router-dom";
import logo from '../assets/images/login/login.svg'
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
   
    const { signInUser, signInGoogle } = useContext(AuthContext)
    const handleLogin = (event) => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                alert('login sucessfully')
            })
            .catch(error => console.log(error))
    }
    const handleGoogle = () => {
        signInGoogle()
            .then(result => {
                const user = result.user;
                console.log(user)
                alert('Google accound diye login korci')
            })
            .catch(error => console.log(error))

    }
    
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content w-3/4 flex-col lg:flex-row">
                <img className='w-full md:w-1/2 border-2 border-green-400 rounded' src={logo} alt="" />

                <div className="card bg-orange-200 w-full md:w-1/2">
                    <form onSubmit={handleLogin} className="card-body">
                        <h2 className='text-3xl font-semibold text-center'>Login</h2>

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
                            <input className="btn btn-primary" type="submit" value="Login here" />
                        </div>
                    </form>
                    <p className='my-4 text-center'>have a new accound <Link className='text-orange-500 font-bold' to='/signup'>Resgister</Link></p>
                    <button onClick={handleGoogle} className='btn btn-primary w-20 mx-auto mb-3 ' >Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;