// Icon Component
import {FaRegCircle,FaTimes,FaPen} from 'react-icons/fa';
import './Icon.css'

function Icon({name}){

   
    if (name == "circle") {
        return  <FaRegCircle id='circle' />
    }else if (name == "cross"){
        return  <FaTimes id='cross' />
    }else{
        return  <FaPen  id='pen'/>
    }

   
}

export default Icon;

