import React, { useEffect, useState } from "react";
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
        <ForumsSection />
        <AnimatedList items={[]} />
      </div>
    </PageLayout>
  );
}

export default HomePage;