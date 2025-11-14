import { useState } from "react";
import axios from "axios";
import "./index.css";
import carregandoGif from "./assets/carregando.gif"; 

function App() {
  const [respostas, setRespostas] = useState({
    nome: "",
    idade: "",
    genero: "",
    atividade_fisica: {
            faz: "",
            vezMes: 0,
            tipo: ""
        },
    horasSono: 0,
    fuma: "",
    bebeAlcool: "",
    medicoAnual: ""
  })

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if(name.startsWith("fisica_")){
      setRespostas((prev) => ({
        ...prev,
        atividade_fisica:{
          ...prev.atividade_fisica,
          [name.split("_")[1]]: value,
        }
      }))
      return;
    }
    setRespostas((prev) => ({
      ...prev,
      [name]: value
    }))
    
  }

  const submitInfo = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:5000", respostas);
      console.log("resposta do servidor", response.data)
    } catch (error) {
      console.log(error)
    }
    console.log(respostas)
  }

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
        <form onSubmit={submitInfo} className="formulario">
          <section className="infoPessoal">
            <div>
              <label htmlFor="name">Qual seu Nome: </label>
              <input
                type="text"
                name="nome"
                value={respostas.nome}
                onChange={handleChange}
              />
            </div>
          </section>

          <section>
            <div>
              <label htmlFor="age">Qual a sua idade? </label>
              <input
                type="text"
                name="idade"
                value={respostas.idade}
                onChange={handleChange}
              />
            </div>
          </section>

          <section>
            <div>
              <label htmlFor="sex">Qual seu Genero? </label>
              <select
                name="genero"
                value={respostas.genero}
                onChange={handleChange}
              >
                <option value=""></option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
                <option value="Prefiro não dizer">Prefiro não dizer</option>
              </select>
            </div>
          </section>

          <section>
            <div>
              <label htmlFor="fisica_faz">
                Você costuma fazer exercícios físicos?{" "}
              </label>
              <input
                type="text"
                name="fisica_faz"
                value={respostas.atividade_fisica.faz}
                onChange={handleChange}
              />
            </div>
          </section>
          <section>
            <div>
              <label htmlFor="fisica_vezMes">
                Quantas vezes por mês?{" "}
              </label>
              <input
                type="number"
                name="fisica_vezMes"
                value={respostas.atividade_fisica.vezMes}
                onChange={handleChange}
              />
            </div>
          </section>
          <section>
            <div>
              <label htmlFor="fisica_tipo">
                Que tipo de atividade fisica?{" "}
              </label>
              <input
                type="text"
                name="fisica_tipo"
                value={respostas.atividade_fisica.tipo}
                onChange={handleChange}
              />
            </div>
          </section>

          <section>
            <div>
              <label htmlFor="horasSono">Quantas horas você dorme por noite? </label>
              <input
                type="number"
                name="horasSono"
                value={respostas.horasSono}
                onChange={handleChange}
              />
            </div>
          </section>


          <section>
            <div>
              <label htmlFor="fuma">
                Você costuma fumar?
              </label>
              <input
                type="text"
                name="fuma"
                value={respostas.fuma}
                onChange={handleChange}
              />
            </div>
          </section>

          <section>
            <div>
              <label htmlFor="bebeAlcool">
                Você costuma ingerir álcool?
              </label>
              <input
                type="text"
                name="bebeAlcool"
                value={respostas.bebeAlcool}
                onChange={handleChange}
              />
            </div>
          </section>

          <section>
            <div>
              <label htmlFor="medicoAnual">
                Você vai ao medico frequentemente?
              </label>
              <input
                type="text"
                name="medicoAnual"
                value={respostas.medicoAnual}
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
