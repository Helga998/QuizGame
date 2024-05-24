import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function QuestionsList() {
  const {id} = useParams()
  const [question, setQuestion] = useState('')
  const [answer, SetAnswer] = useState('')
  const[rightAnswer, setRightAnswer] = useState('')
  // const [count, setCount] = useState(id)
  // console.log(count);
  async function loadQuestions() {
    const response = await fetch(`/api/question/${id}`);
    console.log(response)
    const data = await response.json();
    setQuestion(data);
  }
  useEffect(() => {
    console.log("4. USE EFFECT");
    loadQuestions();
    return () => {
      console.log("5. UNMOUNT");
    };
  }, [id]);
  console.log(question);

  function checkAnswer() {
    if(answer === question.answer) {
      setRightAnswer('Wow!!!')
      console.log('Wow!!!')
    } else {
      setRightAnswer(`No!! Правильный ответ: ${question.answer}`)
      console.log('No!!')
    }
  }
  return (
    <div>
      <h1>Вопросики</h1>
      <div>
        <img src={question.img} alt="" />
        <p>{question.question}</p>
        <p>Введите Ваш ответ</p>
        <input type="text" value={answer} onChange={(e)=> SetAnswer(e.target.value )}/>
        <button type='button' onClick={checkAnswer}>OK</button>
        <div>{rightAnswer}</div>
        <Link to={`/questions/${+id + 1}`}>Next</Link>
      </div>
      
    </div>
  )
}
