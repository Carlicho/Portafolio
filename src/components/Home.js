import '../styles/Home.css'
import Profile from './Profile';
import MyName from "./MyName";
import git from '../assets/images/github.png'
import react from '../assets/images/react.png'
import html from '../assets/images/html.png'
import css from '../assets/images/css.png'
import js from '../assets/images/js.png'

const Home = ({title, dark, id}) => {
    return ( 
        <div className='home-container'>
        <Profile />
        
        

        <div className="tech-png">
        <img src={html} alt="html icon"/>
        <input ></input>
        <img src={css} />
        <img src={js} />
        <img src={react} />
        <img src={git} />
        </div>
        </div>
     );
}
 
export default Home;