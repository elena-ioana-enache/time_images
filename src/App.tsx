import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const date = new Date().toDateString();
  const [hour, setHour] = useState(new Date().toTimeString());
  const [img, setImg] = useState('');
  const [contor, setContor] = useState(0);
  const [stopFetch, setStopFetch] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setHour(new Date().toTimeString())
    }, 1000);
  })
  useEffect(() => {
    if (!stopFetch) {
      fetch('https://picsum.photos/200')
        .then(response =>
          setImg(response.url));
    }
  }, [contor, stopFetch]);
  useEffect(() => {
    setTimeout(() => {
      setContor(contor + 1);
    }, 4000);
  })
  const onImageClick = () => {
    setStopFetch(!stopFetch)
  }
  return (
    <div className="App">
      <div>{`${date} ${hour}`}</div>
      <img src={img} style={{ width: '200px', height: '200px' }} onClick={onImageClick} />
    </div>
  );
}

export default App;
