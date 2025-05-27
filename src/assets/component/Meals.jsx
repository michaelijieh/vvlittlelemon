import MealsLists from "../Mealslist.json";
import './Mealcard.css'

// import MealImages from '../mealsimages'
import MealOne from '../mealsimages/fried chicken.jpg'
// import MealTwo from '../mealsimages/pie.jpg'
// import MealThree from '../mealsimages/pizza.jpg'

import MealCard from "./MealCard"

export default function Meals () {
    const mealslist = MealsLists.map(mealcard => <MealCard id={mealcard.id} title={mealcard.title} price={mealcard.price} description={mealcard.description}  image={mealcard.image}/>)
    return (
        <div className="meals-container">
            <div><h1>Our special dishes that'll keep you coming for more</h1></div>
            {mealslist}
            {/* <img src={MealOne} alt=""/> */}
        </div>
    )
}