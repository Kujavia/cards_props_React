
function Card(props){
    console.log(props);
    return(
   
        <div className={`containerCl ${props.containerClass}`}>
            <p className={`${props.nameClass}`}>{props.name}</p>
            <p className={`sale_cl ${props.saleClass}`}>{props.sale}</p>
            <p className="size">{props.size}</p>
            <p className="footer">{props.footer}</p>
        </div>

    )
}
export default Card;