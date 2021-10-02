import '../styles/styles.css';
import Image from './images/logo.png';
import SVG from './images/logo.svg';

const App = () => {
  return (
    <>
      <h1>React TypeScript Webpack with Docker</h1>
      <img src={Image} alt="React Logo" width="300" height="300" />
      <img src={SVG} alt="React Logo" width="300" />
    </>
  );
};

export default App;
