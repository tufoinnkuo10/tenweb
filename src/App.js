import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from './pages/construction/Home';
// import Live from './pages/construction/Live';
import Nav from './components/About/Nav'
import Overview from './components/About/Overview';
import WhyIz from './components/About/Whyiz';
import OngoingProjects from './components/About/Ongoingprojects';
import WhoWeServe from './components/About/Whoweserve';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/whyiz" element={<WhyIz />} />
        <Route path="/ongoingprojects" element={<OngoingProjects />} />
        <Route path="/whoweserve" element={<WhoWeServe />} />
      </Routes>
      
    </div>
  );
}

export default App;
