import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import ForumsSection from "../components/ForumsSection";
import CardNav from "../components/CardNav";
import AnimatedList from "../components/AnimatedList";

const anListitems = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10']; 
  

const navItems = [
  {
    // NAVBAR TARJETA 1
    label: 'Nosotros',
    bgColor: '#333446',
    textColor: '#EAEFEF',
    links: [
      // Enlaces que aparecerán dentro de esta tarjeta
      { label: 'Nuestra Misión', href: '/nosotros', ariaLabel: 'Conoce nuestro proyecto' },
      { label: 'Contacto', href: '/contacto', ariaLabel: 'Ponte en contacto con nosotros' }
    ]
  },
  {
    // NAVBAR TARJETA 2
    label: 'Mapas',
    bgColor: '#333446',
    textColor: '#EAEFEF',
    links: [
      { label: 'Mapas Interactivos', href: '/mapas/interactivo', ariaLabel: 'Revisa mapas los mapas de organizaciones oficiales' },
      { label: 'Galería', href: '/mapas/galeria', ariaLabel: 'Ve la galería de mapas' }
    ]
  },
  {
    // NAVBAR TARJETA 3
    label: 'FAQ',
    bgColor: '#333446',
    textColor: '#EAEFEF',
    links: [
      { label: 'Preguntas Generales', href: '/faq#generales', ariaLabel: 'Lee las preguntas generales' },
      { label: 'Soporte', href: '/faq#soporte', ariaLabel: 'Encuentra ayuda en soporte' }
    ]
  }
];

function HomePage() {

    const [apiMessage, setApiMessage] = useState("");

    useEffect(() => {
        fetch("/api")
    .then((res) => res.json())
    .then((data) => setApiMessage(data.message))
    .catch((err) => console.error("Error fetching API message:", err));
    }, []);

    console.log("API Message:", apiMessage);


    return (
        <div className="homepage">
             <CardNav 
                logo={"Aqualert"} 
                items={navItems}
                baseColor="rgba(30, 30, 42, 0.6)" 
                menuColor="#EAEFEF"
                buttonBgColor="#7F8CAA"         
                buttonTextColor="#EAEFEF"
            />
            <Banner />
            <ForumsSection />
            <p style={{textAlign: "center", marginTop:"2rem", color:"#555"}}>
                {apiMessage && `Mensaje de la API: ${apiMessage}`}
            </p>
            <AnimatedList
              items={anListitems}
              onItemSelect={(item, index) => console.log(item, index)}
              showGradients={true}
              enableArrowNavigation={true}
              displayScrollbar={true}
/>
        </div>
    );
}

export default HomePage;