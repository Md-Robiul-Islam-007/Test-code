import React from 'react';
import './App.css';
import Post from './Component/Post'

function App() {
  return (
    <>
    <div className="App">
      <h1 style={{
        textAlign : 'center',
        padding : '10px',
        color : 'white',
        fontWeight : 'bold',
        background : 'red',
        marginTop : '0',
        textTransform : 'uppercase'
      }}> This is a test codeing </h1>
    </div>
    <Post />
    </>
  );
}

export default App;
