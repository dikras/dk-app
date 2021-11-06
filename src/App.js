import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import MainContent from './components/main-content/main-content';
import Dialogs from './components/dialogs/dialogs';

const App = (props) => {
  const { store } = props;

  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <Route exact path="/main-content">
          <MainContent />
        </Route>
        <Route exact path="/dialogs">
          <Dialogs store={store} />
        </Route>
      </div>
    </Router>
  );
};

export default App;
