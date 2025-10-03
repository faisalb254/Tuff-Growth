import React from 'react'
import { Link } from 'react-router-dom'

export default function Author(props) {
  const { author, fullname, questions } = props.writer;

  return (
    <div className="pb-10 w-full">
      {questions.map((q, index) => (
        <div key={index} className="mb-10">
          <h1 className="font-black text-3xl md:text-5xl pt-5">
            {q.heading}
          </h1>
          <p className="my-4.5 text-gray-600">
            {q.date} / by{" "}
            <Link to={`/author/${author}`} className="">
              {fullname}
            </Link>
          </p>
          <p className="text-lg">{q.para}</p>
        </div>
      ))}
    </div>
  )
}
