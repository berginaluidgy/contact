import React, { useState,useEffect } from 'react';
import './contact.css'
import Head from './head';
import { useNavigate } from 'react-router-dom';

const  AddContactButton = () => {
    
  const navigate = useNavigate();
  const [isPageVisible, setIsPageVisible] = useState(true);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        console.log('La page est cachée');
        setIsPageVisible(false);
        // Action à réaliser lorsque la page devient invisible (ex: sauvegarder des données)
      } else {
        console.log('La page est visible');
        setIsPageVisible(true);
       
        navigate('/progress');

        // Action à réaliser lorsque la page devient visible (ex: recharger des données)
      }
    };

    // Ajouter l'écouteur d'événements
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Nettoyer l'écouteur d'événements lors du démontage du composant
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);
 function out(){

  window.location.href = "tel:+50940798714";
 }
  return (
    <>
    <Head/>
     <div id="contact">
        
  
 <div id="" onClick={out}>
    <p> <a href="tel:+50940798714"> AJouter au contact</a></p>
 </div>


     </div>
    </>
);
};
export default  AddContactButton
