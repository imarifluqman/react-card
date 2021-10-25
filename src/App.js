import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from './olxcard';
import Pdata from './pdata';

function App() {

  function Abc (val){
    return(
    <Card 
    
      pName = {val.name}
      des = {val.discpriton}
      img = {val.imge}
      pri = {val.price}
      />
    );
  }
  return (
    <>
    <p className="p">Product Card</p>
    <div className="main">

    {Pdata.map(Abc)}

    </div>
    </>
  );
}

export default App;
