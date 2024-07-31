import React, { useEffect, useState } from 'react';
import Head from './head';
import axios from 'axios';
import { ClipboardCopy } from 'lucide-react';

const styles = {
    progressBarContainer: {
      width: '100%',
      backgroundColor: '#f3f3f3',
      borderRadius: '25px',
      overflow: 'hidden',
      border: '1px solid #ddd',
      margin: '20px 0',
    },
    progressBar: {
      height: '20px',
      width: '0',
      background: 'linear-gradient(90deg, #2196F3, #E3F2FD)',
      textAlign: 'center',
      lineHeight: '20px',
      color: 'white',
      borderRadius: '25px',
      transition: 'width 0.4s ease-in-out',
    },
    progressLabel: {
      fontWeight: 'bold',
      margin: '10px 0',
      textAlign: 'center',
    },
  };
  
const ProgressBar = ({ currentPeople, totalPeople }) => {
  const percentage = (currentPeople / totalPeople) * 100;

  return (
    <div style={styles.progressBarContainer}>
      <div style={{ ...styles.progressBar, width: `${percentage}%` }}>
        {currentPeople} / {totalPeople}
      </div>
    </div>
  );
};

const ProgressComponent = () => {
  const numid=localStorage.getItem('iii')
  const [currentPeople, setCurrentPeople] = useState(0);
  const [totalPeople,settotalPeople] =useState(25);
  const [data,setdata] =useState('');
useEffect(()=>{
  axios.post('https://gocontact.onrender.com/share/'+numid,'')
.then(res=>{
  console.log(res.data)
  setdata(res.data)
  setCurrentPeople(res.data.nbr)
})
.catch(error=>console.log(error))
},[])

  const addPerson = () => {
    if (currentPeople < totalPeople) {
      setCurrentPeople(currentPeople + 1);
    }
  };

 
    const [text, setText] = useState('https://gocontact.onrender.com/share/'+numid);
  
    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(text);
        alert('Ou kopye lyen pataj ou avek sikse ,kounya patajel pou ka debloke sit la !');
      } catch (err) {
        alert('Échec de la copie!');
        console.error('Erreur lors de la copie : ', err);
      }
    };
  
  return (
    <>
       <Head/>
    <div>
      <h1 style={styles.progressLabel}>Progression des personnes :: {currentPeople}</h1>
      <ProgressBar currentPeople={currentPeople} totalPeople={totalPeople} />
      <p id='flextext' onClick={'addPerson'}>Envite 25 moun pou ka <strong><div className='spanunlock'>debloke sit la</div></strong></p>
      <div  id="pataj"><p>Lyen pataj :  <strong style={{fontSize:'25px'}}>{data.lk}</strong>  <span id='spancopy' onClick={handleCopy}><ClipboardCopy/></span>  </p></div>
    </div></>
  );
};

export default ProgressComponent;
