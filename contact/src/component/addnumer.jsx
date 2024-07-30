import React, { useEffect, useState } from 'react'
import './addnumer.css'
import axios, { Axios } from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Addnumer() {
  const navigate = useNavigate();

  const lok=localStorage.getItem('iii')
  const[view,setview]=useState('')
  useEffect(()=>{
     if (lok!=null){
    navigate('/progress');
  }else{
    setview(<Home/>)
  }
  })
 
  return(
    <>{view}</>
  )}
 function Home(){

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
      name: '',
     num:'',
     
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
   const push= (e) => {
      e.preventDefault();
      // Vous pouvez maintenant utiliser formData pour envoyer les données au backend ou effectuer d'autres actions
      axios.post('http://localhost:8000/welcome',formData)
      .then(res=>{
       console.log('Form submitted:', formData);
       localStorage.setItem('iii',formData.num)
        navigate('/Addcontact'); //
      })
      .catch(error=>console.log(error))

    };
  
return (
  <div>
  <form onSubmit={push}>
    <div>
      <label htmlFor="name">NON W:</label>
      
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
    </div>

    <div>

    <label htmlFor="num">Nimero TELEFON OU:</label>
      <input
        type="number"
        id="num"
        name="num"
        value={formData.num}
        onChange={handleChange}
      />
    </div>
    </form>
    <div>
      <input  onClick={push} type="submit" value=" S'Inscrire" />
    </div>
  </div>
  
)
}
