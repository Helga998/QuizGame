import React from 'react';
import { Link } from "react-router-dom";

function Topic({title, img, id}) {

    return (
        <div className='border border-4 rounded'>
            <img src={img} alt="" width='320px' height='280px' className='rounded m-2' />
            
            <Link to={`/questions/${id}`}>
                <h1 className='p-4'>{title}</h1>
            </Link>

        </div>
    );
}

export default Topic;