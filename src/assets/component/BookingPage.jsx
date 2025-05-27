import BookingForm from "./BookingForm";
import Nav from "./Nav";

export default function BookingPage (props) {

    return (
        <div>
            <div className="booking-page">
                <h1>Booking page</h1>
                <BookingForm availableTimes = {props.availableTimes} dispatch = {props.dispatch} submitForm = {props.submitForm}/>
            </div>

        </div>

    )
}