import Lottie from 'lottie-react'
import React from 'react'
import { Link } from 'react-router'
import registerLogo from '../../../public/Animation - 1745422694010.json'

const Register = () => {
    const handleResister = (event) => {
        event.preventDefault()
        const from =new FormData(event.target)
        const email = from.get('email')
        console.log('🚀 ~ handleResister ~ email:', email)
        const password = from.get('password')
        console.log('🚀 ~ handleResister ~ password:', password)
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <div className="">
                        <Lottie
                            className="w-68 rounded-full"
                            animationData={registerLogo}
                        ></Lottie>
                    </div>
                    <div className="card bg-base-100  w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleResister} className="card-body">
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    className="input"
                                    placeholder="Email"
                                />
                                <label className="label">Password</label>
                                <input
                                    name="password"
                                    type="password"
                                    className="input"
                                    placeholder="Password"
                                />
                                <div>
                                    <a className="link link-hover">
                                        <Link to="/login">go to login</Link>
                                    </a>
                                </div>
                                <button className="btn btn-neutral mt-4">
                                    Register Now
                                </button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
