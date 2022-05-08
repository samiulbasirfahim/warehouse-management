import React from "react"

const Blog = () => {
	return (
		<div className="min-h-[80vh] pt-[14vh] container mx-auto grid">
			<TableLikeAns
				question={"Difference between Javascript and Node Js"}
				answer1={`JavaScript is a programming language, a kind of
                high-level scripting programming language, developed by
                a man named Brendan Eich in 1985, JavaScript is commonly
                used on the web, and it is object oriented.`}
				answer2={`Node JS is a JavaScript Runtime environment, it can be
                used in JavaScript outside of the browser, it is usually
                used in backend development, it works in asynchronous
                way and its performance is much better.`}
			></TableLikeAns>

			<TableLikeAns
				question={
					"When should i use mongodb? and when should i use node js?"
				}
				answer1={`Mongo db is the most popular nosql databse, mongodb is the best choise when my data doesn’t fit well into the schema of a relational database.  and this is document structure based databse, its usally used in ecommerce platform.if i represent my data in a form of a bunch of documents, MongoDB could be a good choice for me.`}
				answer2={`nodejs is the most suitable server technology for real-time applications, it is so fast for its single thread nature, it is usually used in the backend of the application, nodejs should be used in all applications that require very fast data transfer.`}
			></TableLikeAns>

			<TableLikeAns
				question={"Difference between sql and no sql database"}
				answer1={`sql is a structured query database, Maria DB, mysql is an example of a sql database. All data is structured, here schema has to be set, sql does not have much freedom that day`}
				answer2={`nosql is non relational, in the example of nosql
                There are mongodb, amazonadynamodb. In nosql the data is not structured, there is no need to set the schema, the schema is set dynamically. Nosql best for working independently`}
			></TableLikeAns>
			<div
				className="mt-14"
				data-aos="zoom-in-down"
				data-aos-easing="linear"
				data-aos-duration="500"
			>
				<p className="text-yellow-600 border-b-2 text-center font-bold font-mono px-4 lg:text-2xl border-b-red-700">
					What is the purpose of Jwt and how it works?
				</p>
				<p className="w-full py-8 px-6">
					Jwt, json web token, The full form of jwt is json web token,
					basically jwt token used for security purpose, When an user
					logged in, we create a jwt token for him, we can authorize
					user by check her token, is it valid and the token
					information is matched with the user information, it means
					he is authorized.
				</p>
			</div>
		</div>
	)
}

const TableLikeAns = ({ question, answer1, answer2 }) => {
	return (
		<div
			className="mt-14 mb-6"
			data-aos="zoom-in-down"
			data-aos-easing="linear"
			data-aos-duration="500"
		>
			<p className="text-yellow-600 border-b-2 text-center font-bold font-mono px-4 lg:text-2xl border-b-red-700">
				{question}
			</p>
			<div className="flex flex-col lg:flex-row  justify-center">
				<p className="w-full py-8 px-6 lg:border-r-2 border-b-2 lg:border-b-0 border-lime-500">
					{answer1}
				</p>
				<div className="w-full py-8 px-6">{answer2}</div>
			</div>
		</div>
	)
}

export default Blog
