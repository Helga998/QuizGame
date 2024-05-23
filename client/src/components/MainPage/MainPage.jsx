import React, {useState, useEffect} from 'react';
import Layout from '../Layout/Layout';
import Topic from '../Topic/Topic';

function MainPage() {
    const [topic, setTopic] = useState([])
    async function loadTopics() {
        const response = await fetch("/api/topics");
        const data = await response.json();
        console.log(data)
        setTopic(data);
      }
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
            <h2>Choose your destiny</h2>
            <div  className="d-flex flex-row mb-3 justify-content-evenly">
      {topic.map((row) => {
        return (
            <Topic key={row.id} title={row.title} img={row.img} id={row.id}/>
        );
      })}
      </div>
        </Layout>
      </>
    );
}

export default MainPage;