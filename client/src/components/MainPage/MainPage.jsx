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
          {/* <div></div> */}
            <h2 className="d-flex justify-content-center fs-1">Quiz</h2>
            <div  className="d-flex flex-row mb-3 justify-content-evenly">
              { topic.length>1 && 
<>
            <div className='border border-4 rounded'>
            <img src={topic[0].img} alt="" width='320px' height='280px' className='rounded m-2' />
            
            <Link to={`/questions/1`}>
                <h1 className='p-4'>{topic[0].title}</h1>
            </Link>
        </div>
        <div className='border border-4 rounded'>
        <img src={topic[1].img} alt="" width='320px' height='280px' className='rounded m-2' />
        
        <Link to={`/questions/8`}>
            <h1 className='p-4'>{topic[1].title}</h1>
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