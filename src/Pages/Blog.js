import React, { useState } from "react"

const Blog = () => {
	const [question, setQuestion] = useState(1)
	const answer1 = {
		js: "JavaScript is a programming language, a kind of high-level scripting programming language, developed by a man named Brendan Eich in 1985, JavaScript is commonly used on the web, and it is object oriented.",
		node: "Node JS is a JavaScript Runtime environment, it can be used in JavaScript outside of the browser, it is usually used in backend development, it works in asynchronous way and its performance is much better.",
	}
	const questions = [
		"Difference between Javascript and Node Js",
		"When should i use mongodb? and when should i use node js?",
		"What is the purpose of jwt?",
		"Difference between sql and no sql database",
	]
	return (
		<div className="container min-h-[80vh] pt-[12vh]  mx-auto ">
			<div className="grid">
				{questions.map((ques, index) => (
					<button
						key={index}
						onClick={() => console.log(index + 1)}
						className="text-gray-800 dark:border-gray-200 border-gray-700  dark:text-gray-100 bg-slate-300 dark:bg-slate-800 text-center py-4 rounded-xl  border-2 m-2"
					>
						{ques}
					</button>
				))}
			</div>

			<div>
				<div className="flex justify-center w-full ">
					<div className="w-full  font-mono p-14">{answer1.js}</div>
					<div className="w-full border-l-2 border-yellow-400 font-mono p-14">
						{answer1.node}
					</div>
				</div>
			</div>
		</div>
	)
}

const QuestionButton = ({ setQuestion, ques }) => {
	return (
		<button
			onClick={() => setQuestion(4)}
			className="text-gray-800 dark:border-gray-200 border-gray-700  dark:text-gray-100 bg-slate-300 dark:bg-slate-800 text-center py-4 rounded-xl  border-2 m-2"
		>
			{ques}
		</button>
	)
}

export default Blog
