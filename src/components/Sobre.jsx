/* eslint-disable react/jsx-no-target-blank */
import { Container } from "react-bootstrap";

export default function Sobre() {
  return (
    <section id="sobre" className="py-5 text-white primaryColor">
      <Container>
        <h1 className="text-center">Sobre</h1>
        <p className="lead ">
          Olá! Sou Matheus. Estudo programação e desenvolvimento de sites há
          aproximadamente 4 anos. Atualmente trabalho como front-end developer
          na empresa{" "}
          <a
            style={{ color: "#fff" }}
            href="https://www.softcia.com.br/"
            target="_blank"
          >
            Softcia
          </a>
          . Neste site você vai encontrar alguns dos projetos em que trabalhei,
          tanto para fins de estudos como profissionalmente.
        </p>
      </Container>
    </section>
  );
}
