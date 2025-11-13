import { useState } from "react";
import axios from "axios";
import "./index.css";
import carregandoGif from "./assets/carregando.gif"; 

function App() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    sex: "",
    academy: "",
    sleep: "",
    water: "",
    smoke: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      // await axios.post("http://backend.com/api/form", formData);

      alert("Formulário enviado com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar:", error);
      alert("Ocorreu um erro ao enviar o formulário.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <h1>aq no baile do egito, o mano vai te devorar</h1>
      </nav>

      {isLoading ? (
        <div className="loading-container">
          <img src={carregandoGif} alt="Carregando..." />
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="formulario">
          <section className="infoPessoal">
            <div>
              <label htmlFor="name">Seu apelido: </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          </section>

          <section>
            <div>
              <label htmlFor="age">Qual a sua idade? </label>
              <input
                type="text"
                name="age"
                value={formData.age}
                onChange={handleChange}
              />
            </div>
          </section>

          <section>
            <div>
              <label htmlFor="sex">Qual sua sexualidade? </label>
              <select
                name="sex"
                value={formData.sex}
                onChange={handleChange}
              >
                <option value=""></option>
                <option value="Hetero">Hetero</option>
                <option value="Gay">Gay</option>
                <option value="Bi">Bissexual</option>
                <option value="Outro">Outro</option>
                <option value="Prefiro não dizer">Prefiro não dizer</option>
              </select>
            </div>
          </section>

          <section>
            <div>
              <label htmlFor="academy">
                Você costuma fazer exercícios físicos?{" "}
              </label>
              <input
                type="text"
                name="academy"
                value={formData.academy}
                onChange={handleChange}
              />
            </div>
          </section>

          <section>
            <div>
              <label htmlFor="sleep">Quantas horas você dorme por noite? </label>
              <input
                type="text"
                name="sleep"
                value={formData.sleep}
                onChange={handleChange}
              />
            </div>
          </section>

          <section>
            <div>
              <label htmlFor="water">
                Você bebe água o suficiente diariamente?
              </label>
              <input
                type="text"
                name="water"
                value={formData.water}
                onChange={handleChange}
              />
            </div>
          </section>

          <section>
            <div>
              <label htmlFor="smoke">
                Você costuma fumar ou ingerir álcool?
              </label>
              <input
                type="text"
                name="smoke"
                value={formData.smoke}
                onChange={handleChange}
              />
            </div>
          </section>

          <button type="submit">ENVIAR</button>
        </form>
      )}
    </>
  );
}

export default App;
