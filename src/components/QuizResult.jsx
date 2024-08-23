import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const QuizResult = (props) => {
  return (
    <Paper className="result-box">
      <Box>
        <span>Your Score = {props.score} </span>
        <span>Total Score = {props.totalScore}</span>
      </Box>
      <Box className="btn">
        <Button variant="contained" onClick={props.tryAgain}>
          TRY AGAIN
        </Button>
      </Box>
    </Paper>
  );
};
export default QuizResult;
