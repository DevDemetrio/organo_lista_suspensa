import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";
const Formulario = () => {
  const times = [
    "Programação",
    "Front-end",
    "Data Science",
    "Devops",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
  ];
  return (
    <section className="formulario-container">
      <form className="formulario">
        <ListaSuspensa time={times} />
      </form>
    </section>
  );
};

export default Formulario;
