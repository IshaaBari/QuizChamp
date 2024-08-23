import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
//import quizQuestions from "./QuizData";
import QuizResult from "./QuizResult";

const QuizList = ({
  ResetAll,
  HandleOptionClick,
  ChangeQuestion,
  showResult,
  currentquestion,
  score,
  select,
  setQuiz,
  quiz,
}) => {
  if (quiz.length > 0) {
    const { incorrectAnswers, correctAnswer } = quiz[currentquestion];
    const allOptions = [...incorrectAnswers, correctAnswer];
    const shuffledOptions = allOptions.sort();

    return (
      <Box className="mainbox">
        <Box className="main-heading">
          <h1>Quiz App</h1>
        </Box>
        {showResult ? (
          <div className="main_result_box">
            <QuizResult
              score={score}
              totalScore={quiz.length}
              tryAgain={ResetAll}></QuizResult>
          </div>
        ) : (
          <>
            <Paper className="centralBox" elevation={24}>
              <Box className="btnbox">
                <Paper elevation={24} className="paper-size">
                  <span className="bnt-txt">
                    {currentquestion + 1} / {quiz.length}
                  </span>
                  <span className="bnt-txt">
                    {quiz[currentquestion].question}
                  </span>
                </Paper>
              </Box>
              <Box className="optn-list">
                {shuffledOptions.map((option, i) => {
                  return (
                    <Paper elevation={24}>
                      <p
                        className="optn-list"
                        style={{
                          backgroundColor:
                            select === option // Check if the option matches
                              ? select === quiz[currentquestion].correctAnswer // Check if the clicked option matches
                                ? "green" // If it's the correct answer
                                : "red" // If it's an incorrect answer,
                              : "transparent",
                          color: select === option ? "white" : "black",
                        }}
                        key={i}
                        onClick={() => HandleOptionClick(option)}>
                        {option}
                      </p>
                    </Paper>
                  );
                })}
              </Box>

              <Box>
                <Button
                  variant="contained"
                  marginTop="20px"
                  marginBottom="20px"
                  onClick={ChangeQuestion}>
                  NEXT
                </Button>
              </Box>
            </Paper>
          </>
        )}
      </Box>
    );
  } else {
    <p>Loading questions...</p>;
  }
};
export default QuizList;
