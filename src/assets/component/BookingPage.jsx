import BookingForm from "./BookingForm";

export default function BookingPage (props) {

    return (
        <div>
            <div className="booking-page">
                <BookingForm availableTimes = {props.availableTimes} dispatch = {props.dispatch} submitForm = {props.submitForm}/>
            </div>

        </div>

    )
}