import './Mealcard.css'

export default function MealCard (props) {
    return (
        <div className="meal-card">
            {/* <img src={props.img} alt={props.title}/> */}
            <div>
                <h3>{props.title}</h3>
                <h3>{props.price}</h3>
            </div>
            <p>{props.description}</p>
            <button>Order</button>

        </div>
    )
}