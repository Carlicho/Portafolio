import '../styles/MyName.css'


const MyName = (props) => {
    return ( <div className='MyName'>
        <h1>{props.titulo}</h1>
        <button>Resume</button>
        <button>Contact</button>
    </div> 
    
    );
}
 
export default MyName;