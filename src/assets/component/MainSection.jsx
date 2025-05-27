import React from "react";
import { useReducer } from "react";
import { Route, Routes, useNavigate } from 'react-router-dom';

import BookingPage from "./BookingPage";
import Header from "./Header";
import ConfirmedBooking from "./ConfirmedBooking"
import Meals from "./Meals";
import Footer from "./Footer";

export default function Main () {

    const seededRandom = function (seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }

    const fetchAPI = function(date) {
        let result = [];
        let random = seededRandom(date.getDate());

        for(let i = 17; i <= 23; i++) {
            if(random() < 0.5) {
                result.push(i + ':00');
            }
            if(random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };

    const submitAPI = function(formData){
        return formData;
    }
    
    const initialState = {availableTimes: fetchAPI(new Date())}
    const [state, dispatch] = useReducer(updateTimes, initialState);

    function updateTimes(state, date) {
        return {availableTimes: fetchAPI(new Date())}
    }


    const navigate = useNavigate();
    function submitForm (formData) {
        if (submitAPI(formData)){
            navigate("/confirmedbooking")
        }
    }

    return (
        <main>
            <Routes>
                <Route path="/" element={<Header />}/>
                <Route path="/bookingpage" element={<BookingPage availableTimes={state} dispatch={dispatch} submitForm={submitForm}/>}/>
                <Route path="/confirmedbooking" element={<ConfirmedBooking/>} />
                {/* <Route path="/meals" element={<Meals />}/>
                <Route path="/footer" element={<Footer />}/> */}
                {/* <div className="main">
                    <BookingPage availableTimes = {availableTimes}/>
                </div> */}
                {/* <Meals /> */}
                
            </Routes>
            {/* <Meals /> */}
            {/* <Footer /> */}
        </main>
        // <>
        //     {/* <BookingPage availableTimes={state} dispatch={dispatch} submitForm={submitForm}/> */}
        // </>

    )
}