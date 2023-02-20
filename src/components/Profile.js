import '../styles/Profile.css'
import fotoprofile from '../assets/images/perfil.JPG'

const Profile = ({title, dark, id}) => {
    return (  
        <div className='profile-container'>
        <div className="profile-card">
            <div className='img-box'>
                <img src=''/>
            </div>

            <div className="lines"></div>
            <div className='content'>
                <div className='details'>
                    <h2>Carlos Julian Lichowski <br></br>
                    <span>web developer/  UX/UI designer</span></h2>
                    <div className='data'>
                        <h3>Html Css Js React</h3>
                        <br></br>
                        <h3>Bootstrap tailwin MaterialUI</h3>
                    </div>
                    <div className='actionBtn'>
                            <button>Resume</button>
                            <button>Contact</button>
                    </div>
                </div>
            </div>
        </div>

        </div>
    );
}
 
export default Profile;