import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'


const Home: React.FC = () => {
    const navigate = useNavigate()
    const token  = localStorage.getItem("accessToken")
useEffect(()=>{
    if(token){
        navigate("/companies/dashboard")
    }
},[token])
    return (
        <>
            <Navbar />
            <div
                className="h-screen bg-cover bg-center"
                style={{
                    backgroundImage: "url('')",
                }}
            >
                <div className="bg-white bg-opacity-75 h-full">
                    <main className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
                        <section className="flex flex-col items-center justify-center h-full text-center">
                            <h2 className="text-5xl font-bold leading-tight text-green-500 mb-6">
                                Simplify Your Accounting
                            </h2>
                            <p className="text-xl text-gray-600 mb-8">
                                Our accounting software helps you manage your finances with ease.
                            </p>
                            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-12" onClick={()=>navigate("/companies/register")}>
                                Get Started
                            </button>
                            <div className="flex flex-wrap justify-center -mx-4">
                                <div className="w-full md:w-1/2 xl:w-1/3 p-4">
                                    <div className="bg-white rounded shadow-md p-6">
                                        <div className="flex items-center mb-4">
                                            <svg
                                                className="w-6 h-6 text-green-500"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                                                />
                                            </svg>
                                            <h3 className="text-lg font-bold text-gray-900 ml-2">
                                                Automated Bookkeeping
                                            </h3>
                                        </div>
                                        <p className="text-gray-600">
                                            Our software automates bookkeeping tasks, freeing up more time for you to focus on your business.
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 xl:w-1/3 p-4">
                                    <div className="bg-white rounded shadow-md p-6">
                                        <div className="flex items-center mb-4">
                                            <svg
                                                className="w-6 h-6 text-green-500"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2m0-4h2a2 2 0 012 2v4m6 3v3h2a2 2 0 012 2v3m0-10h2a2 2 0 012 2v3m-3 3h6"
                                                />
                                            </svg>
                                            <h3 className="text-lg font-bold text-gray-900 ml-2">
                                                Real-time Financial Insights
                                            </h3>
                                        </div>
                                        <p className="text-gray-600">
                                            Get real-time financial insights and make informed decisions with our intuitive dashboard.
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 xl:w-1/3 p-4">
                                    <div className="bg-white rounded shadow-md p-6">
                                        <div className="flex items-center mb-4">
                                            <svg
                                                className="w-6 h-6 text-green-500"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                                />
                                            </svg>
                                            <h3 className="text-lg font-bold text-gray-900 ml-2">
                                                Streamlined Invoicing
                                            </h3>
                                        </div>
                                        <p className="text-gray-600">
                                            Create and send professional invoices in minutes, and track payments with ease.
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 xl:w-1/3 p-4">
                                    <div className="bg-white rounded shadow-md p-6">
                                        <div className="flex items-center mb-4">
                                            <svg
                                                className="w-6 h-6 text-green-500"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M12 8c1.66 0 2.99-1.34 2.99-3S13.66 2 12 2 9.01 3.34 9.01 5 10.34 8 12 8zm0 2c-2.21 0-4 1.79-4 4v1h8v-1c0-2.21-1.79-4-4-4zm0 6v2m0 2v2m-6 0h12a2 2 0 002-2v-7c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v7a2 2 0 002 2zm2-2v2m-4 0h8"
                                                />
                                            </svg>
                                            <h3 className="text-lg font-bold text-gray-900 ml-2">
                                                Billing Management
                                            </h3>
                                        </div>
                                        <p className="text-gray-600">
                                            Efficiently manage and track your billing processes, ensuring accurate and timely payments.
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 xl:w-1/3 p-4">
                                    <div className="bg-white rounded shadow-md p-6">
                                        <div className="flex items-center mb-4">
                                            <svg
                                                className="w-6 h-6 text-green-500"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M7 10h14M7 6h14M7 14h14m-7 4h7m-9 4H5a2 2 0 01-2-2V5a2 2 0 012-2h9a2 2 0 012 2v14m-2 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2"
                                                />
                                            </svg>
                                            <h3 className="text-lg font-bold text-gray-900 ml-2">
                                                Payroll Management
                                            </h3>
                                        </div>
                                        <p className="text-gray-600">
                                            Simplify your payroll process with our comprehensive management system.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home