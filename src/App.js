import logo from './logo.svg';
import './App.css';
import ProductList from './ProductList';

function App() {

  // 3 componentts : 
  // ProductList  
  // ProductItem 


  //site web de promotion pour la tunisie
  // array of destinaton = [{name:"sidbousid",img:"", location:"", description:""}]

  // home  :=> navbar ( home , places , about )
  // carousel bootstrap => images te3 places
  // placesLiST   => place Item 

  const products=[
   {   name : "parfum", price: 30, img:"https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyZnVtZXxlbnwwfHwwfHx8MA%3D%3D" },
  {   name : "parfum 2", price: 25, img:"https://img.freepik.com/photos-gratuite/parfum-frais-fleur-pourpre-dans-bouteille-verre-ai-generative_188544-9642.jpg" },
    
   {   name : "parfum", price: 30, img:"https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyZnVtZXxlbnwwfHwwfHx8MA%3D%3D" },
  {   name : "parfum 2", price: 25, img:"https://img.freepik.com/photos-gratuite/parfum-frais-fleur-pourpre-dans-bouteille-verre-ai-generative_188544-9642.jpg" },
    
   {   name : "parfum", price: 30, img:"https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyZnVtZXxlbnwwfHwwfHx8MA%3D%3D" },
  {   name : "parfum 2", price: 25, img:"https://img.freepik.com/photos-gratuite/parfum-frais-fleur-pourpre-dans-bouteille-verre-ai-generative_188544-9642.jpg" },
    
   {   name : "parfum", price: 30, img:"https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyZnVtZXxlbnwwfHwwfHx8MA%3D%3D" },
  {   name : "parfum 2", price: 25, img:"https://img.freepik.com/photos-gratuite/parfum-frais-fleur-pourpre-dans-bouteille-verre-ai-generative_188544-9642.jpg" },
    
  ]

  const showMessage=(x)=>{

    alert(x)
  }
  return (
    <div className="App">
   
      <ProductList list={products} showMessage={showMessage}></ProductList>    
    </div>

  );
}

export default App;
