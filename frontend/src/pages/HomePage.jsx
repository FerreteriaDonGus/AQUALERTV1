import React, { useEffect, useState } from "react";
import ItemContainer from "../components/ItemContainer";
import PageLayout from "../components/PageLayout";
import Banner from "../components/Banner";
import DescriptionBox from "../components/DescriptionBox";
import ForumsSection from "../components/ForumsSection";
import AnimatedList from "../components/AnimatedList";
import "./HomePage.css";

//assets importaciones
import post1 from "../assets/estaticas/post1.jpg"
import simarlogo from "../assets/estaticas/externas/simarlogo.png"
import simarpreview from "../assets/estaticas/externas/simarpreview.png"
import pestatic from "../assets/estaticas/externas/estatico_1.png"
import pestatic_2 from "../assets/estaticas/externas/estatico_2.png"

function HomePage() {
  const [apiMessage, setApiMessage] = useState("");

  useEffect(() => {
    fetch("/api")
      .then((r) => r.json())
      .then((d) => setApiMessage(d.message))
      .catch(() => {});
  }, []);

  return (
    <PageLayout>
      <div className="page-inner">
        <Banner />
        <DescriptionBox 
          title="¿Qué es Aqualert?" 
          description="Una plataforma dedicada a proporcionar información sobre el estado del agua en México."
        />
        <ForumsSection/>
        <ItemContainer
        titulo="Publicaciones destacadas"
        items={[
          {imagen: post1 , descripcion: "Registros abiertos!", link: "/registro"},
          {imagen: simarpreview , descripcion: "Simar web oficial", link: "https://simar.conabio.gob.mx/"},
          {imagen: pestatic, descripcion: "Tendencias en los cuerpos de agua a nivel nacional 2024", link: "https://www.biodiversidad.gob.mx/monitoreo/simoh-mx/cuerpos-de-agua"},
          {imagen: pestatic_2, descripcion: "Situación del agua en México por IMCO.org.mx", link: "https://imco.org.mx/situacion-del-agua-en-mexico/"}
        ]}
        />
      </div>
    </PageLayout>
  );
}

export default HomePage;