import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormData({ ...formData, [id]: value });
    };

    const changeURL=()=>{
        navigate("/register");
    }
    return (
        <>
            <div class="min-h-screen flex items-center justify-center bg-gray-100">
                <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-lg w-full">
                    <form class="w-full">
                        <h1 class="text-center text-2xl font-bold mb-8">Login to Your Account</h1>  {/* Updated title */}
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left" for="email">
                                    Email
                                </label>
                                <input
                                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="email"
                                    type="email"
                                    placeholder="example@example.com"
                                />
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left" for="password">
                                    Password
                                </label>
                                <input
                                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="password"
                                    type="password"
                                    placeholder=""
                                />
                            </div>
                        </div>
                        <div className='flex gap-4 '>
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Login
                        </button>
                        <button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"
                        onClick={changeURL}>
                            SignUp
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        </>

    )
}

export default LoginForm