import PropTypes from 'prop-types'; 
import './style.css';

const ParallaxSection = ({ backgroundImage, children }) => {
  return (
    <div className="parallax" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="parallax-content">
        {children}
      </div>
    </div>
  );
}

// Adicionando validação de props
ParallaxSection.propTypes = {
  backgroundImage: PropTypes.string.isRequired, 
  children: PropTypes.node.isRequired, 
};

export default ParallaxSection;
