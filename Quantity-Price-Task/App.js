import './App.css';
import Product from './product1/Product-name';
import Logo from './product1/Logo';
import Image from './product1/Image';
import Description from './product1/Description';
import Price from './product1/Product-price';
import Quantity from './product1/Quantity';
import Button from './product1/button';
function App() {
  return (
    <div className="App">
      <div className="one">
        <Logo />
        <Image />
        <Product />
      </div> 
      <div className="two">
        <Description /><br/><br/>
        <Quantity />
        <Price />
        <Button />
      </div>
    </div>
  );
}

export default App;
