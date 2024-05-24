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
    if(answer.toLowerCase() === question.answer) {
      setRightAnswer('Wow!!!')
      console.log('Wow!!!')
    } else {
      setRightAnswer(`No!! Правильный ответ: ${question.answer}`)
      console.log('No!!')
    }
  }
  console.log(id);
  return (
    <div className="d-flex justify-content-center mt-5">
      {/* <h1>Вопросики</h1> */}
      <div className='border border-4 rounded'>
        <img src={question.img} alt="" width='1000px' height='600px' className='rounded m-2' />
        <p className="fs-1 fw-bold">{question.question}</p>
        {/* <p>Введите Ваш ответ</p> */}
        <div className='input-group mb-3'>
          <input placeholder='Введите Ваш ответ' className='form-control fw-semibold' type="text" value={answer} onChange={(e)=> SetAnswer(e.target.value)}/>
          <button width='30px' height='30px' className="btn btn-outline-warning link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover fw-bold" type='button' onClick={checkAnswer}>OK</button>
          
          { id == 7 || id == 14 ?
          <button className="btn btn-outline-success"> <Link to='/'>Главное меню</Link></button>
            
            : <button className="btn btn-outline-success"><Link className="link-underline-light link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover fw-bold" to={`/questions/${+id + 1}`}>Next</Link></button>

          }
        </div>
        <div className="fs-2 fw-bold">{rightAnswer}</div>


      </div>
      
    </div>
  )
}
