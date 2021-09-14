//import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';
import { Navigation } from './components/navigation';
import { Skills } from './components/skills';
import { Header } from './components/header';
import { Projects } from './components/projects';
import { About } from './components/about';
import { Contact } from './components/contact';
import JsonData from './data/data.json';

function App() {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])
  return (
    <div className="App">
     
      <Navigation />
     <Header data={landingPageData.Header}/>
     <Skills data={landingPageData.Skills} />
     <Projects data={landingPageData.Projects} />
     <About data={landingPageData.About}/>
     <Contact data={landingPageData.Contact} />
     
    </div>
  );
}

export default App;