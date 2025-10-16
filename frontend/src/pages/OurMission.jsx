import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import DescriptionBox from "../components/DescriptionBox";

function OurMission() {

    const [apiMessage, setApiMessage] = useState("");
    
        useEffect(() => {
                fetch("/api")
            .then((res) => res.json())
            .then((data) => setApiMessage(data.message))
            .catch((err) => console.error("Error fetching API message:", err));
            }, []);
        
            console.log("API Message:", apiMessage);

            return (

            <div className="Mision">
            <Navbar />
            <DescriptionBox
            title=" La Misión de AquaAlert"
            description="Somos un equipo de estudiantes de Ingeniería en Ciencias Computacionales con una misión clara: utilizar la tecnología para proteger a la comunidad y al medio ambiente.

                        AquaAlert nació de una necesidad fundamental: hacer que la información crítica sobre la calidad del agua y los riesgos de contaminación sea fácilmente accesible para todos.

                        Nuestro Compromiso con la Inclusividad:

                        Es un pilar de este proyecto que AquaAlert sea cien por ciento apto para todas las personas, independientemente de su condición o discapacidad. Desde la elección de colores y contrastes en nuestro logo (pensando en el daltonismo), hasta el diseño de la interfaz (buscando ser amigable para personas con baja visión o diferentes habilidades cognitivas), nuestra meta es garantizar que:

                        Cualquier usuario pueda ver información clara sobre el agua en su zona o en general.

                        Cualquier persona pueda registrarse fácilmente y recibir alertas personalizadas que impactan su seguridad.

                        Creemos firmemente que la información es un derecho y que la protección de la salud y el medio ambiente debe ser accesible para todos.

                        Estamos aquí para brindarte la información que necesitas, de la manera más clara y segura posible." 
            />
        </div>
        );
}

export default OurMission;