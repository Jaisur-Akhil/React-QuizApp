import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'How many planets are there?',
			answerOptions: [
				{ answerText: '7', isCorrect: false },
				{ answerText: '9', isCorrect: false },
				{ answerText: '8', isCorrect: true },
				{ answerText: '10', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Google?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Sundar Pichai', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'How  many hours are there in a day?',
			answerOptions: [
				{ answerText: '21', isCorrect: false },
				{ answerText: '22', isCorrect: false },
				{ answerText: '23', isCorrect: false },
				{ answerText: '24', isCorrect: true },
			],
		},
		{
			questionText: 'How many Harry Potter movies are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '7', isCorrect: false },
				{ answerText: '8', isCorrect: true },
			],
		},
	];
	const [currentQuestion , setCurrentQuestion]=useState(0)
	
	const [showScore, setShowscore] = useState(false);
	const [score ,setScore] = useState(0);
	const handelAnswerButtonClick=(isCorrect)=>{
		if(isCorrect){
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length){
			setCurrentQuestion(nextQuestion)}
		else{
			setShowscore(true)
		}
	}	
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>You scored {score} out of {questions.length}
				<button onClick = {()=>{window.location.reload(false)}}>Play Again !!</button>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion+1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOptions)=>(<button onClick={() => handelAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>))} 
						{/* <button>Answer 1</button>
						<button>Answer 2</button>
						<button>Answer 3</button>
						<button>Answer 4</button> */}
					</div>
				</>
			)}
		</div>
	);
}
