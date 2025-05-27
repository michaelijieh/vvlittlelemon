import { Link } from "react-router-dom"
export default function ConfirmedBooking () {
    return (
        <div className="confirmed-booking">
            <h1>Your Booking has been Confirmed</h1>
            <Link to="/"><button aria-label="On Click" className="reserve-button">Return to homepage</button></Link> 
        </div>
    )
}