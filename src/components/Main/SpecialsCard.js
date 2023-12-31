const SpecialsCard = (props) =>{
    return(

        <div className="specialsCard">
            <img className="specialsCardImage" src={props.img} alt={props.data.dish}/>
            <div className="specialsCardHeading"
            >
                <span className="specialsCardDishName"> {props.data.dish}</span>
                <span className="specialsCardDishPrice">{props.data.price} </span>
            </div>

            <p className="specialsCardDishDetails">
                {props.data.details}
            </p>


        </div>

   );
}

export default SpecialsCard;