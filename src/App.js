import './App.css';
import Header from './components/header/header';
import Navbar from './components/nav/navbar';
import MainContent from './components/main-content/main-content';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <MainContent />
    </div>
  );
};

export default App;
