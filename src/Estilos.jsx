import React from "react";
import "./CSS/Estilo.css";
import { useState } from "react";

export function Profession(){
    const [Profesion, /*setProfesion*/] = useState(
        { 
            espanol:"Desarrollador Web", 
            ingles:"Web Developer", 
            aleman:"Web-Entwickler" 
        }
    );

   /* const actualizaprofession = () => {
        setProfesion(previousState => {
          return { ...previousState, Profesion: "Maestro" }
        });
      }*/
    
    return (
        <section>
           
            <h1 className="bg-react">Hola me llamo Jose Luis Meza Herrera y soy un { Profesion.espanol  } </h1>
            <h1  className="bg-react">Hello my name is Jose Luis Meza Herrera And I am  a { Profesion.ingles  } </h1>
            <h1  className="bg-react">Hallo Mein name ist Jose Luis Meza Herrera und ich bin {   Profesion.aleman  } </h1>
        </section>
       
    );
    
}


export  function Estilos(){
    return(
        <section className="estilos">
           
            <h1  className="bg-react">hola es mi primer estilo</h1>
            <h2  className="bg-react">hola que tal</h2>
        </section>
    );
}