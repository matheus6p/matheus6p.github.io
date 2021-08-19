/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Col, Container, Row } from "react-bootstrap";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";

export default function Contato() {
  return (
    <section id="contato" className="py-5">
      <Container>
        <h1 className="text-center title mb-3">Contacte-me</h1>
        <Row>
          <Col lg={2} className="mx-auto ">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/matheus-henrique-paes-de-almeida-18565914a/"
              className="d-flex justify-content-between align-items-center"
            >
              LinkedIn{" "}
              <span>
                <FaLinkedin size={30} />
              </span>
            </a>
          </Col>
        </Row>
        <Row>
          <Col lg={2} className="mx-auto ">
            <a
              target="_blank"
              href="mailto:mhpaes97@gmail.com"
              className="d-flex justify-content-between align-items-center"
            >
              E-mail{" "}
              <span>
                <SiMinutemailer size={30} />
              </span>
            </a>
          </Col>
        </Row>
        <Row>
          <Col lg={2} className="mx-auto ">
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5515996028484"
              className="d-flex justify-content-between align-items-center"
            >
              WhatsApp{" "}
              <span>
                <FaWhatsapp size={30} />
              </span>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
