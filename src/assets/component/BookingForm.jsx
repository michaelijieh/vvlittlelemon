import { useState } from "react";


export default function BookingForm (props) {

    const [date, setDate] = useState('');
    const [guests, setGuests] = useState(2);
    const [occasion, setOccasion] = useState('Birthday');
    const [time, setTime] = useState('')

    // Form Validations Error
    const [errorDate, setErrorDate] = useState('')
    const [errorTime, setErrorTime] = useState('')
    // Form Validations Error

    function handleChange (e) {
        setDate(e);
        props.dispatch(e)
    }

     function handleReserve (e) {
        e.preventDefault();
        alert([occasion, guests, date, time])
        props.submitForm(e)
    }

    // Form validation functions
    const handleBlurDate = () => {
        if (date === "") {
            setErrorDate('* Date is empty');
        } else {
            setErrorDate('')
        }
    }

    const handleBlurTime = () => {
        if (time === "Select" || time === "") {
            setErrorTime('* Please select a time');
        } else {
            setErrorTime('')
        }
    }


    const isFormValid = () => {
        return (
            date &&
            time
        )
    }
    // Form validation functions


    return (
        <>
            <form onSubmit={handleReserve}>
                
                <div className="booking-form">
                    <h1>Booking page</h1>
                    <label className="date-label" htmlFor="res-date">Choose date</label>
                    <input type="date" 
                        id="res-date"
                        min="2025-06-01"
                        max="2025-06-30"
                        value={date}
                        onChange={(e)=>{handleChange(e.target.value)}}
                        onBlur={handleBlurDate}
                        aria-label="On Click"
                        />
                    {errorDate && <p className="error-message">{errorDate}</p>}

                    {date && <label className="time-label" htmlFor="res-time">Choose time</label>}
                    {date && <select className="time" aria-label="On Click" id="time" value={time} onChange={(e)=>setTime(e.target.value)} onBlur={handleBlurTime}>
                        <option className="time" value="">Select time</option>
                        {
                            props.availableTimes.availableTimes.map(availableTimes => {
                                return <option className="time" key={availableTimes}>{availableTimes} </option>
                            })
                        }
                    </select>}
                    {errorTime && <p className="error-message">{errorTime}</p>}

                    <label className="guest-label" htmlFor="guests">Number of guests <p>{guests}</p></label>
                    <input 
                        className="guest"
                        type="range"
                        placeholder="1" 
                        min="1" 
                        max="10" 
                        id="guests"
                        aria-valuemin="1" 
                        aria-valuemax="10" 
                        aria-valuenow="2"
                        aria-valuetext="Current number of guests is 2 guests" 
                        value={guests} 
                        onChange={(e) => setGuests(e.target.value)}
                        aria-label="On Click" />
                    <label className="occasion" htmlFor="occasion">Choose Occasion</label>
                    <select className="occasion-label" aria-label="On Click" id="occasion" key={occasion} value={occasion} onChange={(e)=> setOccasion(e.target.value)}>
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                    </select>
                    <input aria-label="On Click" className="submit-button" type="submit" value="Book Now" disabled={!isFormValid()}/>
                    
                </div>
            </form>
        </>
    )
}