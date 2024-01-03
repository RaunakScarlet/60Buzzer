import React, { useState } from 'react'
import banner from '/banner.png'
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';


const Home = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const startQuiz = () => {
         setLoading(true);
       setTimeout(() => {
           navigate('/quiz')
           setLoading(false);
       }, 3000);
    }

    return (
        <section className="lg:w-9/12 md:w-[90%] mx-auto mt-12 flex flex-col  md:flex-row-reverse justify-between items-center ">
            {loading ? <Loading /> : ""}
            <div className="w-full md:w-1/2 space-y-8">
                <img className="w-full mx-auto" src={banner} alt="banner" />
            </div>
            <div className="w-full md:w-1/2  px-8  mt-10">
                <h2 className="lg:text-4xl text-4xl font-medium text-[#333] md:w-4/6 lg:leading-normal leading-1 mb-3 ">
                    Learn new concepts for each question
                </h2>

                <p className="md:w-4/6 leading-normal mb-3 text-gray-500 border-l-4 px-2 py-3">
                    We help you prepare for exams and quizzes
                </p>

                <div className="flex md:flex-row flex-col items-center">
                    <button
                        className="bg-[#E7B400] w-32 m-2 px-3 py-2 rounded text-white"
                        onClick={startQuiz}
                    >
                        Start Quiz
                    </button>
                    <button className="inline-flex  m-2 px-3 py-2 w-32 rounded text-yellow-300 hover:bg-[#E7B400] hover:text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m8.25 4.5 7.5 7.5-7.5 7.5"
                            />
                        </svg>
                        know more
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Home
