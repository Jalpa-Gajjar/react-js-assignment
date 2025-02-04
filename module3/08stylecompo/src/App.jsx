// import './App.css'
import Header from "./Header";
import HomeSlider from "./HomeSlider";
import Carousel from "./CaroCont";
import HeaderNavi from "./HeadNav";
import "bootstrap/dist/css/bootstrap.min.css";
// import styled from 'styled-components';


function App() {
  return (
    <div className="m-2">
      
      <Header />
      <HeaderNavi/>
      <HomeSlider />
      <Carousel />
     
    </div>
  );
}

export default App;