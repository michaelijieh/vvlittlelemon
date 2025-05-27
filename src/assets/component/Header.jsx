import { Link } from 'react-router-dom';
import headerImage from '../images/main_dish_final.png';
import Meals from '../component/Meals'

export default function Header () {
    return (
        <>
            <div className="header">
                <div className='header-text-left'>
                    <h1>Grab a date and Reserve a table and simply sit</h1>            
                    <p><em><strong>***Lorem ipsum dolor sit amet, consectetur adipiscing eli.</strong></em></p>
                    <Link to="/bookingpage"><button aria-label="On Click" className='reserve-button'>Reserve a table</button></Link>

                </div>
                <div><img className='header-image' src={headerImage} alt="header image"/></div>
                <div className='header-text-right'>
                    <p>Lorem ipsum dolor sit amet, 
                        consectetur <span className="right-text">*pizza*</span>adipiscing 
                        elit, sed do eiusmod tempor inci et dolore magna aliqua. ad minim
                        veniam, <span className="right-text">*bread rolls*</span>
                        quis nostrud  ea commodo consequat. Duis aute irure
                        dolor in reprehenderit <span className="right-text">*tuna*</span>
                        in voluptate velit esse cillum  sit amet, consectetur adipiscing 
                        elit, <span className="right-text">*bacon*</span>sed 
                        do eiusmod tempor incididunt ut labore et dolore 
                        magna aliqua. Ut <span className="right-text">*milk rice*</span>
                        enim ad minim veniam nisi ut aliquip ex ea commodo do eiusmod
                        <span className="right-text">*noodles*</span>tempor  Ut enim 
                        ad minim veniam, <span className="right-text">*cocktails*</span>
                        quis nostrud exercitation ullamco ut aliquip ex ea commodo consequat.
                            Duis <span className="right-text">*tortellini*</span>aute irure
                            dolor in reprehenderit velit esse cillum do Lorem ipsum 
                            <span className="right-text">*pasta*</span>dolor sit amet, 
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                            labore <span className="right-text">*pineapple*</span>et dolore 
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut <span className="right-text">*sauerkraut*</span>
                            aliquip ex ea commodo consequat. Duis aute irure dolor in 
                            reprehenderit in voluptate <span className="right-text">*dodo*</span>
                            velit esse cillum do Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor <span className="right-text">*fried 
                                rice*</span>incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                laboris <span className="right-text">*salami*</span>nisi ut 
                                aliquip ex ea commodo consequat. Duis <span className="right-text">
                                    *calamari*</span>aute irure voluptate velit esse cillum do</p>
                </div>
            </div>
            <Meals />
        </>
    )
}