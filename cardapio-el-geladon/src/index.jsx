import React from "react"; // Importando a biblioteca
import ReactDOM from "react-dom"; // Biblioteca para renderizar os componentes dentro dela
import "./assets/styles/main.css"; // Importando o css
import Home from "./views/Home/Home"; // Importando o componente REACT
import App from "App";

ReactDOM.render(
  // Método render, vai renderizar o conteúdo dos de dentro dos parenteses
  <React.StrictMode>
    <App />
  </React.StrictMode>, // Tag para emitir alertas se tiver algum erro na aplicação
  document.getElementById("root") // Dentro da div root que todos os componentes são renderizados
);
