import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import ForumsSection from "../components/ForumsSection";
import AnimatedList from "../components/AnimatedList";
import DescriptionBox from "../components/DescriptionBox";
import Navbar from "../components/Navbar";

const anListitems = [
  {
    title: 'Item 1',
    description: 'Descripción del Item 1',
    image: 'https://via.placeholder.com/150'
  },
  {
    title: 'Item 2',
    description: 'Descripción del Item 2',
    image: 'https://via.placeholder.com/150'
  },
  {
    title: 'Item 3',
    description: 'Descripción del Item 3',
    image: 'https://via.placeholder.com/150'
  },
  {
    title: 'Item 4',
    description: 'Descripción del Item 4',
    image: 'https://via.placeholder.com/150'
  },
  {
    title: 'Item 5',
    description: 'Descripción del Item 5',
    image: 'https://via.placeholder.com/150'
  },
  {
    title: 'Item 6',
    description: 'Descripción del Item 6',
    image: 'https://via.placeholder.com/150'
  },
  {
    title: 'Item 7',
    description: 'Descripción del Item 7',
    image: 'https://via.placeholder.com/150'
  },
  {
    title: 'Item 8',
    description: 'Descripción del Item 8',
    image: 'https://via.placeholder.com/150'
  },
  {
    title: 'Item 9',
    description: 'Descripción del Item 9',
    image: 'https://via.placeholder.com/150'
  },
  {
    title: 'Item 10',
    description: 'Descripción del Item 10',
    image: 'https://via.placeholder.com/150'
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
            <Navbar />
            <Banner />
            <DescriptionBox
            title=""
            description="Aqualert es una plataforma tecnológica desarrollada para monitorear, analizar y alertar sobre la calidad del agua en ecosistemas marino-costeros y cuerpos de agua locales, impulsando la participación comunitaria, la toma de decisiones informadas y la conservación ambiental."
            />
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