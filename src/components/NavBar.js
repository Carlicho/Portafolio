

import '../styles/NavBar.css'
import {Link, animateScroll as Scroll} from 'react-scroll'
import InfoTwoToneIcon from '@aterial-ui/icons/InfoTwoToneIcon'
import EmojiObjetsTwoToneIcon from '@aterial-ui/icons/EmojiObjetsTwoToneIcon'
import ContactMailTwoToneIcon from '@mui/icons-material/ContactMailTwoTone';
import BuildTworToneIcon from '@aterial-ui/icons/BuildTworToneIcon'

const link = [
  {
    id:"about",
    text:"about me",
    icon: <InfoTwoToneIcon/>
  },
  {
    id:"Skills",
    text:"Skills",
    icon: <EmojiObjetsTwoToneIcon/>
  },
  {
    id:"MyWork",
    text:"MyWork",
    icon: <BuildTworToneIcon/>
  },
  {
    id:"Contact",
    text:"Get in Touch",
    icon: <ContactMailTwoToneIcon/>
  }
 ]

const NavBar = () => {
    return ( 
         <div className='NavBar-container'>
            <nav className='NavBar'>
              <h2>asda</h2>
              </nav>
              
         </div>         
      );
}
 
export default NavBar;