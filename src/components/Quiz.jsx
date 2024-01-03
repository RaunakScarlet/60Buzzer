import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CalculateLoading from './CalculateLoading';

const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const remainingSecond = seconds % 60;
    const formatedTime=`${minutes}`
}

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    const [showResult, setShowResults] = useState(false);
    const [score, setScore] = useState(0);
    const [loading, setLoading] = useState(false);
    const [timer, setTimer] = useState(60);
    const [timerIntervalId, setTimerIntervalId] = useState('');
    const [status, setStatus] = useState('')
    const navigate=useNavigate();

    useEffect(() => { 
        fetch("/quiz.json")
            .then((data) => data.json())
            .then((data) => setQuestions(data));
        
        const intervalId = setInterval(() => {
            setTimer((time)=>time-1)  
        }, 1000)
        
        setTimerIntervalId(intervalId);

        return () => {
            clearInterval(intervalId)
            if (timer === 60) {
                // alert('Time is out')
            }
        }

    }, [timer])
    
    const restartQuiz = () => {
        setAnswers({})
        setScore(0)
        setShowResults(false)
        setLoading(false)
        setTimer(60)
        navigate('/quiz')
    }
    const handleOption = (qId, selected) => {
        const updatedAnswers = { ...answers, [qId]: selected }
        
        setAnswers(updatedAnswers);

        
    }
    const handleSbmit = () => {
        window.scrollTo(
           { top: 0,
                behavior: "smooth"
            }
        )
        setLoading(true)
        clearInterval(timerIntervalId);

        setTimeout(() => {
            const quizScore = calculateScore(answers)
            setScore(quizScore)

            const percentage = (quizScore / questions.length)*100
            const newStatus = percentage >= 50 ? "Pass" : "Fail";

            setStatus(newStatus);
            setShowResults(true)
            setLoading(false)
        }, 5000);
    };

    const calculateScore = (userAnswers) => {
        const corretAnswers = questions.map(question => question.answer);
        let score = 0;
        for (const qId in userAnswers)
            if (userAnswers[qId] === corretAnswers[qId - 1]) {
                score++
            }
        return score;
    }

  return (
      <section>
          <div className="md:w-9/12 w-[90%]  mx-auto mb-8 flex flex-col sm:flex-row justify-between items-start">
              <div className=" md:w-[70%] w-full ">
                  {questions.map((question, index) => (
                      <div
                          key={question.id}
                          className="p-3 m-3 shadow-sm border border-gray-200 rounded"
                      >
                          <p className="flex items-center rounded text-xs p-2 cursor-pointer">
                              <span className="h-8 w-8 bg-yellow-400 flex items-center justify-center rounded-full text-white p-3 mr-3">
                                  {question.id}
                              </span>
                              <span className="text-base inline-block">
                                  {question.question}
                              </span>
                          </p>
                          <div className="grid grid-cols-2 gap-4 mt-5">
                              {question?.options?.map((item, index) => (
                                  <div
                                      key={index}
                                      onClick={() =>
                                          handleOption(question.id, item)
                                      }
                                      className={`border border-gray-200 p-2 rounded text-sx cursor-pointer ${
                                          answers[question.id] === item
                                              ? "bg-gray-300"
                                              : ""
                                      }`}
                                  >
                                      <p className="text-[10px] mb-1">
                                          Option {index + 1}
                                      </p>
                                      <p>{item}</p>
                                  </div>
                              ))}
                          </div>
                      </div>
                  ))}

                  <button
                      className="bg-yellow-400 text-white p-3 rounded-sm ml-3 "
                      onClick={handleSbmit}
                  >
                      {" "}
                      Submit
                  </button>
              </div>

              <div className="md:w-[30%] w-full p-4">
                  {showResult && (
                      <div>
                          <h3 className="text-2xl font-medium">
                              Your Score :{" "}
                          </h3>
                          <div className="h-[220px] w-[220px] mx-auto mt-8 flex flex-col justify-center items-center border-2 rounded-tr-[50%] rounded-bl-[50%]  ">
                              <h3
                                  className={`text-xs ${
                                      status === "Pass"
                                          ? "text-green-500"
                                          : "text-red-500"
                                  }`}
                              >
                                  {status}
                              </h3>
                              <h1 className="text-3xl font-bold my-2">
                                  {score * 10}
                                  <span className="text-slate-800">/60</span>
                              </h1>
                              <p>
                                  Total time: <span>1 min</span>{" "}
                              </p>
                          </div>
                          <button
                              className="bg-yellow-400 text-white p-3 rounded-sm  w-full mt-8 "
                              onClick={restartQuiz}
                          >
                              Restart
                          </button>
                      </div>
                  )}{" "}

                  {
                      loading && (
                          <CalculateLoading/>
                      )
                  }
              </div>
          </div>
      </section>
  );
}

export default Quiz
