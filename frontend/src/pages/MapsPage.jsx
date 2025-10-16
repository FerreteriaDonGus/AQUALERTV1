import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import DescriptionBox from "../components/DescriptionBox";
import ItemContainer from "../components/ItemContainer";



function MapsPage() {
    
    const [apiMessage, setApiMessage] = useState("");

    useEffect(() => {
            fetch("/api")
        .then((res) => res.json())
        .then((data) => setApiMessage(data.message))
        .catch((err) => console.error("Error fetching API message:", err));
        }, []);
    
        console.log("API Message:", apiMessage);

        return(
            <div className="Mapas">
            <Navbar />
            <DescriptionBox
            title="Mapas y data center"
            description="Explora nuestros mapas interactivos y accede a datos detallados sobre cuerpos de agua, clima y gestión del agua en México. Nuestra plataforma ofrece visualizaciones claras y herramientas analíticas para comprender mejor el estado del agua en diversas regiones."
            />
            <ItemContainer
            title="Mapas y enlaces"
            items={[
              "placeholder1",
              "placeholder2",
              "placeholder3",
              "placeholder4",
              "placeholder5",
              "placeholder6",
              "placeholder7",
            ]}
            />
        </div>
        );
}

export default MapsPage;