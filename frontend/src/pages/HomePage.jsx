import React, { useEffect, useState } from "react";
import ItemContainer from "../components/ItemContainer";
import PageLayout from "../components/PageLayout";
import Banner from "../components/Banner";
import DescriptionBox from "../components/DescriptionBox";
import ForumsSection from "../components/ForumsSection";
import AnimatedList from "../components/AnimatedList";
import "./HomePage.css";

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
          {imagen: "#" , descripcion: "Registros abiertos!", link: "/registro"},
          {imagen: "#" , descripcion: "Simar web oficial", link: "https://simar.conabio.gob.mx/"}
        ]}
        />
      </div>
    </PageLayout>
  );
}

export default HomePage;