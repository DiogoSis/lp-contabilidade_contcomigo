
import heroImage from "../../assets/predios.jpg";
import ParallaxSection from "../ParallaxSection.jsx";

const HeroSection = () => {
  return (
    <ParallaxSection backgroundImage={heroImage}>
      <h2>ContComigo: Sua Solução de Contabilidade Confiança e Eficiente</h2>
      <p>
        Na ContComigo, entendemos suas necessidades contábeis. Estamos aqui para simplificar seus processos e oferecer soluções confiáveis e eficientes. 
        Com mais de 5 anos de experiência e mais de 20 clientes satisfeitos em todo o Brasil, estamos prontos para ajudá-lo a alcançar o sucesso financeiro.
      </p>
      <a href="#contact" className="cta-button">Entre em contato</a>
    </ParallaxSection>
  );
}

export default HeroSection;
