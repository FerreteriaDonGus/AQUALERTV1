import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import ForumsSection from "../components/ForumsSection";
import CardNav from "../components/CardNav";
import AnimatedList from "../components/AnimatedList";

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

function MapsPage() {
    return (
        <div className="maps-page">
            <h1>Mapas y Data Center</h1>
            <p>Contenido relacionado con mapas y data center.</p>
        </div>
    );
}

export default MapsPage;