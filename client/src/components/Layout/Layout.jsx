import React from 'react';


function Layout({children}) {
    return (
        <>
        <div className='container p-3 mb-2'>{children} </div>
        </>
    );
}

export default Layout;