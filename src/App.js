import './App.css';
import Product from './product1/Product-name';
import Logo from './product1/Logo';
import Image from './product1/Image';
import Description from './product1/Description';
import Price from './product1/Product-price';
import Button from './product1/button';
function App() {
  return (
    <div className="App">
     <Logo />
     <Image />
     <Product />
     <Description />
     <Price />
     <Button />
    </div>
  );
}

export default App;
