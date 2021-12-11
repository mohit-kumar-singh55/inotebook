import './App.css';
import { About } from './components/About';
import Home from './components/Home';
import { Navbar } from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar title="iNotebook" />
          <Alert message="This is MKS" />
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
            </Switch>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;