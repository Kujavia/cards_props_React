import { useState } from 'react'

function Card(props){
    console.log(props);
    const [checked, setChecked] = useState(false);
    const handleCheckedState = () => {setChecked(!checked) }
    return(
   
        <div onClick={handleCheckedState} className={`containerCl ${props.containerClass}`}
        style={checked ? {border: "6px blue solid"} : 
        {border: "none"}}>
            <p className={`${props.nameClass}`}>{props.name}</p>
            <p className={`sale_cl ${props.saleClass}`}>{props.sale}</p>
            <p className="size">{props.size}</p>
            <p className="footer">{props.footer}</p>
        </div>

    )
}
export default Card;