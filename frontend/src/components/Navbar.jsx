import React from "react";
import CardNav from "../components/CardNav";
import logo from "../assets/Logo.png";

const navItems = [
  {
    label: "Nosotros",
    bgColor: "#333446",
    textColor: "#EAEFEF",
    links: [
      { label: "Nuestra Misión", href: "/mision", ariaLabel: "Conoce nuestro proyecto" },
      { label: "Contacto", href: "/contacto", ariaLabel: "Ponte en contacto con nosotros" },
    ],
  },
  {
    label: "Mapas",
    bgColor: "#333446",
    textColor: "#EAEFEF",
    links: [
      { label: "Mapas Interactivos", href: "/mapas/interactivo", ariaLabel: "Revisa mapas los mapas de organizaciones oficiales" },
      { label: "Galería", href: "/mapas/galeria", ariaLabel: "Ve la galería de mapas" },
    ],
  },
  {
    label: "FAQ",
    bgColor: "#333446",
    textColor: "#EAEFEF",
    links: [
      { label: "Preguntas Generales", href: "/faq#generales", ariaLabel: "Lee las preguntas generales" },
      { label: "Soporte", href: "/faq#soporte", ariaLabel: "Encuentra ayuda en soporte" },
    ],
  },
];

function Navbar() {
  return (
    <CardNav
      logo={logo}
      items={navItems}
      baseColor="rgba(30, 30, 42, 0.6)"
      menuColor="#EAEFEF"
      buttonBgColor="#7F8CAA"
      buttonTextColor="#EAEFEF"
    />
  );
}

export default Navbar;