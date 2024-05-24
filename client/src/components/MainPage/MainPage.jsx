import React, {useState, useEffect} from 'react';
import Layout from '../Layout/Layout';
import Topic from '../Topic/Topic';
import { Link } from 'react-router-dom';

function MainPage() {
    const [topic, setTopic] = useState([])
    async function loadTopics() {
        const response = await fetch("/api/topics");
        // console.log(response)
        const data = await response.json();
        // console.log(data)
        setTopic(data);
      }
      console.log(Boolean(topic));
      useEffect(() => {
        console.log("4. USE EFFECT");
        loadTopics();
        return () => {
          console.log("5. UNMOUNT");
        };
      }, []);
    return (
        <>
       
        <Layout>
            <h2 className="d-flex justify-content-center">Quiz</h2>
            <div  className="d-flex flex-row mb-3 justify-content-evenly  p-3 mb-2">
              { topic.length>1 && 
<>
            <div className='border border-4 rounded'>
            <img src={topic[0].img} alt="" width='420px' height='380px' className='rounded m-2' />
            
            <Link to={`/questions/1`} className='link-underline-light link-body-emphasis link-offset-2'>
                <h1 className='p-4 mb-2 text-bg-secondary p-3'>{topic[0].title}</h1>
            </Link>
        </div>
        <div className='border border-4 rounded'>
        <img src={topic[1].img} alt="" width='420px' height='380px' className='rounded m-2' />
        
        <Link to={`/questions/8`} className='link-underline-light link-body-emphasis link-offset-2'>
            <h1 className='p-4 mb-2 text-bg-secondary p-3'>{topic[1].title}</h1>
        </Link>
    </div>
    </>
        
              }
      
      </div>
        </Layout>
      </>
    );
  }
  
  {/* {topic.map((row) => {
    return (
        <Topic key={row.id} title={row.title} img={row.img} id={row.id}/>
    );
  })} */}
export default MainPage;