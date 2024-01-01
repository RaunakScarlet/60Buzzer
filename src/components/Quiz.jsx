import React, { useEffect,useState } from 'react'

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    const [showResult, setShowResults] = useState(false);
    const [score, setScore] = useState(0);

    useEffect(() => { 
        fetch("/quiz.json")
            .then((data) => data.json())
            .then((data) => setQuestions(data));
    },[])

    const handleOption = (qId, selected) => {
       
    }

  return (
      <section>
          <div className="md:w-9/12 w-[90%]  mx-auto">
              <div className=" md:w-[70%] w-full ">
                  {questions.map((question, index) => (
                      <div
                          key={question.id}
                          className="p-3 m-3 shadow-sm border border-gray-200 rounded"
                      >
                          {console.log(question)}
                          <p className="flex items-center rounded text-xs p-2 cursor-pointer">
                              <span className="h-8 w-8 bg-yellow-300 flex items-center justify-center rounded-full text-white p-3 mr-3">
                                  {question.id}
                              </span>
                              <span className="text-base inline-block">{question.question}</span>
                          </p>
                          <div
                          className='grid grid-cols-2 gap-4 mt-5'>
                              {question?.options?.map((item, index) => (
                                  <div key={index}
                                      onClick={()=>handleOption(question.id, item) }  className={`border border-gray-200 p-2 rounded text-sx cursor-pointer ${answers[question.id] === item ? "bg-gray-300" : ''}`}>
                                      <p className='text-[10px] mb-1'>
                                          Option {index + 1}</p>
                                      <p>
                                          {item}
                                      </p>
                                  </div>
                              ))}
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>
  );
}

export default Quiz
