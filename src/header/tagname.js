import './tagname.css'

function tagname(props){
    return(
        <li>
            <i class={props.class}></i>
            <p>{props.name}</p>
        </li>
    );
}

export default tagname;