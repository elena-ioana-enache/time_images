import React, { useEffect, useState } from 'react';
import './App.css';
import BasicModal from './components/modal/Modal';


function App() {
  const date = new Date().toDateString();
  const [hour, setHour] = useState(new Date().toTimeString());
  const [img, setImg] = useState('');
  const [contor, setContor] = useState(0);
  const [stopFetch, setStopFetch] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState('0');

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
  const onButtonClick = () => {
    setIsModalOpen(true);
  }
  const onChange = (event: any) => {
    setValue(event.target.value);
  }
  return (
    <div className="App">
      <div>{`${date} ${hour}`}</div>
      <img src={img} style={{ width: '200px', height: '200px' }} onClick={onImageClick} />

      <button type="button" onClick={onButtonClick}>Open Modal</button>
      <div>Counter:{value}</div>
      {isModalOpen &&
        <BasicModal
          handleClose={() => { setIsModalOpen(false) }}
          value={value}
          onInputChanged={onChange}
        />}
    </div>
  );
}

export default App;
