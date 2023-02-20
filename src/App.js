import '../src/styles/App.css'
import NavBar from './components/NavBar';
import MyName from './components/MyName';
import Aboutme from './components/About';
import { Skills } from './components/Skills';
import MyWork from './components/MyWork';
import Contact from './components/Contact';



function App() {
  return (
   <div className='app-container'>
    <NavBar/>
    <MyName h1=" Hi, I'm Carlos Julian Lichowski" id="MyName"/>
    <Aboutme title="About Me" id="Aboutme" dark={true}/>
    <Skills title="My Coding Jouney" id="Skills" dark={false}/>
    <MyWork title="My Work" id="MyWork" dark={true}/>
    <Contact title="Get in Touch" id="Contact" dark={false}/>
   </div>
    
  );
}

export default App;
