
import './App.css';


import Layout from './Components/Layout/Layout';
import BurgerBuilder from './Container/BurgerBuilder/BurgerBuiler';

function App() {
  return (
    <div className="App">
      <Layout>
        <BurgerBuilder />
      </Layout>
      
      
    </div>
  );
}

export default App;
