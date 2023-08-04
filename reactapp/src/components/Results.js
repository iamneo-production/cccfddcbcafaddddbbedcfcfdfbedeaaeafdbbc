import Button from '../UI/Button/Button'; 
 
function Results({ onResetQuiz }) { 
 
return ( 
<div className="results"> 
<Button onClick={onResetQuiz}>Start Quiz</Button> 
</div> 
); 
} 
