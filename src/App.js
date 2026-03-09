import styled from "styled-components";
import "./App.css";
import { useState, useEffect } from "react";

import ballet from "./ballet.jpeg";
import ballet2 from "./ballet2.jpeg";
import ballet3 from "./ballet3.jpeg";
import video1 from "./video1.mp4";
import video2 from "./video2.mp4";
import video3 from "./video3.mp4";
import video4 from "./video4.mp4";
import video5 from "./video5.mp4";
import video6 from "./video6.mp4";

function App() {

  const midia = [
    { tipo: "imagem", src: ballet },
    { tipo: "imagem", src: ballet2 },
    { tipo: "video", src: video1 },
    { tipo: "video", src: video2 },
    { tipo: "video", src: video3 },
    { tipo: "video", src: video4 },
    { tipo: "video", src: video5 },
    { tipo: "video", src: video6 },
    { tipo: "imagem", src: ballet3 }
  ];


  // contador de dias
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  
  const [meses, setMeses] = useState(0);
  const [semanas, setSemanas] = useState(0);
  const [dias, setDias] = useState(0);
  const [horas, setHoras] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [segundos, setSegundos] = useState(0);

  // contador de tempo
  useEffect(() => {

    const dataInicial = new Date("2026-03-05");

    const calcularTempo = () => {

      const agora = new Date();
      const diferenca = agora.getTime() - dataInicial.getTime();

      const totalSegundos = Math.floor(diferenca / 1000);

      const segundosCalc = totalSegundos % 60;
      const minutosCalc = Math.floor(totalSegundos / 60) % 60;
      const horasCalc = Math.floor(totalSegundos / 3600) % 24;

      const totalDias = Math.floor(totalSegundos / 86400);

      const mesesCalc = Math.floor(totalDias / 30);
      const semanasCalc = Math.floor((totalDias % 30) / 7);

      setMeses(mesesCalc);
      setSemanas(semanasCalc);
      setDias(totalDias);
      setHoras(horasCalc);
      setMinutos(minutosCalc);
      setSegundos(segundosCalc);

    };

    calcularTempo();

    const intervalo = setInterval(calcularTempo, 1000);

    return () => clearInterval(intervalo);

  }, []);
  // troca de fotos e vídeos
  useEffect(() => {

    const intervalo = setInterval(() => {

      setFade(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % midia.length);
        setFade(true);
      }, 300);

    }, 3000);

    return () => clearInterval(intervalo);

  }, []);

  return (
    <Body>

      <Musica>
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/track/31VOknKjFrEX47bZXzqcoF?utm_source=generator"
          width="100%"
          height="90"
          title="video"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </Musica>

      <Imagem>

        {midia[index].tipo === "imagem" ? (

          <img
            className={fade ? "fade-in" : "fade-out"}
            src={midia[index].src}
            alt="foto"
          />

        ) : (

          <video
            className={fade ? "fade-in" : "fade-out"}
            src={midia[index].src}
            autoPlay
            muted
            loop
          />

        )}

      </Imagem>

      <Top>
        <h1> O tempo não passa já estou há {dias} dias, {horas} horas, {minutos} minutos e {segundos} segundos sem te ver ❤️</h1>
      </Top>

      <Titulo>
        <h1>Para a minha dançarina preferida a mulher da minha vida</h1>
      </Titulo>

      <Textinho>
        <h3>
          Feliz dia das mulheres! ❤️
          Amor, te amo muito e admiro você do fundo do meu coração.
          Você é incrível, inteligente e perfeita como dançarina e como pessoa.
          Amo tudo em você, desde as suas unhas até o seu sorriso.
          Eu poderia ficar horas falando o quão perfeita você é.
        </h3>
      </Textinho>

    </Body>
  );
}

const Body = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: #0f0f1a;
min-height: 100vh;
`

const Musica = styled.div`
height: 80px;
width: 90%;
padding-top: 20px;
`

const Imagem = styled.div`
display: flex;
align-items: center;
justify-content: center;
border-radius: 20px;
margin-top: 50px;
height: 500px;
width: 80%;
background-color: #11111F;
padding: 5px;
overflow: hidden;

img, video {
  border-radius: 20px;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
`

const Top = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
font-size: 10px;
color: #F6F6FA;
margin-top: 20px;
`

const Titulo = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
padding-top: 40px;
font-size: 15px;
color: #F6F6FA;
`

const Textinho = styled.div`
display: flex;
justify-content: center;
text-align: center;
width: 80%;
max-width: 600px;
padding: 20px;
color: #5C626D;

h3{
  line-height: 1.6;
  font-weight: 400;
}
`

export default App;