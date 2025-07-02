import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // Importa el ícono de WhatsApp desde react-icons


const Projects = () => {
  const projects = [
    {
      name: "MARTIN PELACH",
      image: "/imagee.png",
      link: "https://mpelachprop.com.ar/",
    },
    {
      name: "MOLA JEWELRY",
      image: "/Screenshot 2025-05-29 130159.jpg",
      link: "https://molajewelry.com/",
    },
    {
      name: "PAWWER",
      image: "/Screenshot 2025-04-11 123518.jpg",
      link: "https://entierrosmascotas.com.ar",
    },
    {
      name: "PROPIEDADES PELACH",
      image: "/Screenshot 2025-04-11 123034.jpg",
      link: "https://propiedadespelach.com.ar",
    },
    {
      name: "SEXTASIS",
      image: "/Screenshot 2025-04-11 123716.jpg",
      link: "https://sextasis.es",
    },
    {
      name: "CLASES DE FINANZAS",
      image: "/Screenshot 2025-04-11 123248.jpg",
      link: "https://clasesdefinanzas.com.ar",
    },
    {
      name: "INOX STYLE",
      image: "/image.png",
      link: "https://inoxstyle.com.ar",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-5 sm:px-10">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group overflow-hidden rounded-lg shadow-lg block"
            style={{
              textAlign: "center",
            }}
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-[20vh] sm:h-[50vh] object-cover transition-transform duration-300 group-hover:scale-110"
              style={{
                borderRadius: "5px",
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center opacity-0 group-hover:opacity-80 transition-opacity duration-300">
              <p className="anton-regular text-2xl sm:text-4xl font-bold mb-3">
                {project.name}
              </p>
              <span className="anton-regular text-sm sm:text-md bg-opacity-20 px-3 sm:px-4 py-2 rounded-lg hover:bg-opacity-40 transition">
                Visitar Página
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;