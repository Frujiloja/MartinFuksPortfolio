import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Landing = () => {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const [language, setLanguage] = useState("es"); // 🌍 idioma actual

  useEffect(() => {
    setShow(true);
  }, []);

  // 🗣️ Textos traducibles
  const texts = {
    es: {
      title: "MARTIN FUKS - PROGRAMADOR WEB",
      portfolio: "PORTFOLIO",
      about: "ACERCA DE MI",
      visit: "Visitar Página",
    },
    en: {
      title: "MARTIN FUKS - WEB DEVELOPER",
      portfolio: "PORTFOLIO",
      about: "ABOUT ME",
      visit: "Visit Website",
    },
  };

  const projects = [
    //{ name: "BIZUPPLY", image: "/bizupply.jpg", link: "https://bizupply.com.ar/" },
    //{ name: "VITACRED", image: "/vitacred.jpg", link: "https://vitacred.com.ar/" },
    { name: "INSTITUTO DALET", image: "/dalet.jpg", link: "https://institutodalet.com.ar/" },
    { name: "IO SONO", image: "/imageee.png", link: "https://iosonoeu.com/" },
    //{ name: "MUTUAL CERRI", image: "/Screenshot 2025-10-29 130905.jpg", link: "https://mutualcerri.com.ar/" },
    { name: "MARTIN PELACH", image: "/imagee.png", link: "https://mpelachprop.com.ar/" },
    { name: "MOLA JEWELRY", image: "/Screenshot 2025-05-29 130159.jpg", link: "https://molajewelry.com/" },
    { name: "PAWWER", image: "/Screenshot 2025-04-11 123518.jpg", link: "https://entierrosmascotas.com.ar" },
    //{ name: "PROPIEDADES PELACH", image: "/Screenshot 2025-04-11 123034.jpg", link: "https://propiedadespelach.com.ar" },
    //{ name: "SEXTASIS", image: "/Screenshot 2025-04-11 123716.jpg", link: "https://sextasis.es" },
    { name: "CLASES DE FINANZAS", image: "/Screenshot 2025-04-11 123248.jpg", link: "https://clasesdefinanzas.com.ar" },
    { name: "INOX STYLE", image: "/image.png", link: "https://inoxstyle.com.ar" },
  ];

  return (
    <div className="bg-black text-white min-h-screen p-5 relative">
      {/* 🌐 Botón para cambiar idioma */}
      <button
        onClick={() => setLanguage(language === "es" ? "en" : "es")}
        className="absolute top-5 right-5 bg-gray-600 px-3 py-1 rounded text-sm hover:bg-gray-700 transition"
      >
        {language === "es" ? "EN" : "ES"}
      </button>

      <h1
        className="anton-regular text-center text-4xl font-bold mb-5"
        style={{ padding: "20px" }}
      >
        {texts[language].title}
      </h1>

      <div className="flex justify-center gap-10">
        <h2
          className={`anton-regular text-center mb-10 ${
            location.pathname === "/" ? "text-3xl" : "text-2xl"
          }`}
        >
          <Link to="/">{texts[language].portfolio}</Link>
        </h2>
        <h2
          className={`anton-regular text-center mb-10 ${
            location.pathname === "/about" ? "text-3xl" : "text-2xl"
          }`}
        >
          <Link to="/about">{texts[language].about}</Link>
        </h2>
      </div>

      <div
        className={`transition-all duration-700 ease-out ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-5 sm:px-10">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden rounded-lg shadow-lg block text-center"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-[20vh] sm:h-[50vh] object-cover transition-transform duration-300 group-hover:scale-110 rounded"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center opacity-0 group-hover:opacity-80 transition-opacity duration-300">
                <p className="anton-regular text-2xl sm:text-4xl font-bold mb-3">
                  {project.name}
                </p>
                <span className="anton-regular text-sm sm:text-md bg-opacity-20 px-3 sm:px-4 py-2 rounded-lg hover:bg-opacity-40 transition">
                  {texts[language].visit}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Botón de WhatsApp */}
      <div className="fixed bottom-5 right-5">
        <a
          href="https://wa.me/1157719725"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-4 py-4 rounded-full shadow-lg hover:bg-green-600 transition flex items-center justify-center"
        >
          <FaWhatsapp className="text-2xl" />
        </a>
      </div>
    </div>
  );
};

export default Landing;
