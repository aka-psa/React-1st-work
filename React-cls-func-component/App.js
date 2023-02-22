import {Circle,Triangle,Square,Rhombus} from './fn';
import {Circle1,Triangle1,Square1,Rhombus1} from './cls';

function App() {
  return (
    <div className="App">
      <div class="func">
        <div class="ans">
          <h1> AREA USING FUNCTION</h1>
          <h2>Area of Circle</h2> 
          <Circle />
          <h2>Area of Triangle</h2>
          <Triangle />
          <h2>Area of Square</h2>
          <Square />
          <h2>Area of Rhombus</h2>
          <Rhombus />
        </div> 
      </div>
      <div class="cls">
        <div class="ans1">
          <h1>PERIMETER USING CLASS</h1>
          <h2>Circumference of Circle</h2>
          <Circle1 />
          <h2>Perimeter of Triangle</h2>
          <Triangle1 />
          <h2>Perimeter of Square</h2>
          <Square1 />
          <h2>Perimeter of Rhombus</h2>
          <Rhombus1 />
        </div>
      </div>
    </div>
  );
}

export default App;
