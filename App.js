
import './App.css';
import QuizList from './components/Quiz';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
   const [currentquestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [select, setSelect] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [lock, setLock] = useState(false);
  const [quiz, setQuiz] = useState([]);
  //console.log(quiz))

   const ChangeQuestion = () => {
    if (lock === true) {
      if (select !== null) {
       AddScore();
       }

      if (currentquestion < quiz.length - 1) {
        setCurrentQuestion(currentquestion + 1);
       setSelect(0);
        setLock(false);
       } else {
        setShowResult(true);
      }
   }
 };

   const AddScore = () => {
     if (select === quiz[currentquestion].correctAnswer) {
       setScore(score + 1);
      // console.log(setScore)
    }
   };
   const getData = async(url) => {
      try {
        const rsp = await axios.get(url)
        // console.log(rsp)
        const quize_Question = await rsp.data;
       //  console.log(quize_Question)
        setQuiz(quize_Question)
      } catch (error) {
        console.log("error")
      }
    }
  
  useEffect(() => {
     const API = "https://the-trivia-api.com/api/questions?limit=10&categories=general_knowledge&difficulty=medium"
   getData(API)
   
 }, [])
  

   const HandleOptionClick = (option) => {
     if (!lock) {
       setSelect(option);
       setLock(true);
     }
   };

  const ResetAll = () => {
    setShowResult(false);
    setSelect(0);
    setScore(0);
    setCurrentQuestion(0);
    setLock(false);
  };
  return (
    <>
    
      <QuizList ResetAll={ResetAll} select={select} currentquestion={currentquestion} showResult={showResult} score={score} setQuiz={setQuiz} quiz={quiz} ChangeQuestion={ChangeQuestion} HandleOptionClick={HandleOptionClick} />
    </>
  );
}

export default App;
