import { useEffect, useState } from "react";
import { Code, Palette, Zap, Heart } from "lucide-react";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  const skills = [
    {
      icon: Code,
      title: "Desarrollo Frontend",
      description: "React, JavaScript, TypeScript, HTML5, CSS3",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Palette,
      title: "Diseño UI/UX",
      description: "Figma, Diseño responsivo, Tailwind CSS, Pack Adobe",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Zap,
      title: "Optimización",
      description: "Performance, SEO, Accesibilidad web",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Heart,
      title: "Pasión",
      description: "Aprendizaje continuo, código limpio, innovación",
      color: "from-red-500 to-rose-500",
    },
  ];

  return (
    <div className="py-5 px-6 h-[100vh] bg-black text-white overflow-auto">
      <h1 className="anton-regular text-center text-4xl font-bold mb-5" style={{ padding: "20px" }}>
        MARTIN FUKS - PROGRAMADOR WEB
      </h1>

      <div className="flex justify-center gap-10">
        <h2
          className={`anton-regular text-center mb-10 transition-all duration-300 ${
            location.pathname === "/" ? "text-3xl" : "text-2xl"
          }`}
        >
          <Link to="/">PORTFOLIO</Link>
        </h2>
        <h2
          className={`anton-regular text-center mb-10 transition-all duration-300 ${
            location.pathname === "/about" ? "text-3xl" : "text-2xl"
          }`}
        >
          <Link to="/about">ACERCA DE MI</Link>
        </h2>
      </div>

      {/* Contenido animado */}
      <div
        className={`max-w-6xl mx-auto transition-all duration-700 ease-in-out ${
          showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 montserrat-bold">Mi historia</h3>
            <div className="space-y-4 text-white montserrat-regular">
              <p>
                Soy desarrollador frontend con más de 3 años de experiencia creando aplicaciones web modernas,
                funcionales y atractivas. Mi formación en diseño gráfico y experiencia como diseñador UI/UX me
                permiten abordar los proyectos no solo desde lo técnico, sino también desde la estética y la
                experiencia del usuario.
              </p>
              <p>
                A lo largo de mi carrera, he trabajado en diversos proyectos, desde startups hasta empresas
                consolidadas, siempre enfocándome en la calidad del código y la experiencia del usuario.
              </p>
              <p>
                Cuando no estoy programando, me gusta explorar nuevas tecnologías, contribuir a proyectos open
                source y compartir conocimiento con la comunidad de desarrolladores.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-stone-700 p-6 rounded-xl">
              <h4 className="font-semibold text-white mb-2 montserrat-bold">Experiencia</h4>
              <p className="text-white montserrat-regular">+3 años desarrollando aplicaciones web</p>
            </div>
            <div className="bg-stone-700 p-6 rounded-xl">
              <h4 className="font-semibold text-white mb-2 montserrat-bold">Proyectos</h4>
              <p className="text-white montserrat-regular">+10 proyectos completados exitosamente</p>
            </div>
            <div className="bg-stone-700 p-6 rounded-xl">
              <h4 className="font-semibold text-white mb-2 montserrat-bold">Clientes</h4>
              <p className="text-white montserrat-regular">Satisfacción del 100% en entregas</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border border-slate-200 rounded-xl bg-stone-700 p-6 text-center"
            >
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-r ${skill.color} mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
              >
                <skill.icon className="text-white" size={28} />
              </div>
              <h4 className="font-semibold text-white mb-2 montserrat-bold">{skill.title}</h4>
              <p className="text-sm text-white montserrat-regular">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Íconos sociales fijos */}
      <div className="fixed bottom-5 right-5 flex flex-col gap-3">
        <a
          href="https://www.linkedin.com/in/martin-fuks-251b91141/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition flex items-center justify-center"
        >
          <FaLinkedin className="text-2xl" />
        </a>
        <a
          href="https://github.com/frujiloja"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 text-white p-4 rounded-full shadow-lg hover:bg-gray-900 transition flex items-center justify-center"
        >
          <FaGithub className="text-2xl" />
        </a>
        <a
          href="https://wa.me/1157719725"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition flex items-center justify-center"
        >
          <FaWhatsapp className="text-2xl" />
        </a>
      </div>
    </div>
  );
};

export default About;
