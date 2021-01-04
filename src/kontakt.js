import React from 'react';
import './index.css';

class Kontakt extends React.Component {
    render() {
        const map = {
            maxWidth: '100%',
            width: '500px',
            height: '500px',
            display: 'block',
            margin: 'auto',
            padding: '20px',
        }

        const kontakt = {
            marginTop: '50px',
        }
        return (
            <address className='row page'>
                <div style={{ display: 'none' }}>
                    <h1 id='kontakth1'>Kontakt</h1>
                </div>
                <div className='col-1' style={{ color: 'transparent' }}>x
                </div>
                <div className='col-4 col-xs12' style={kontakt}>
                    <p><strong>Kancelaria Radcy prawnego</strong></p>
                    <p><strong>Krystian Szulc</strong></p>
                    <p>Oświęcimska 13</p>
                    <p>41-400 Mysłowice</p>
                    <p><a href="tel: 32 223 93 68"><i class="fa fa-phone" aria-hidden="true"></i> tel: 32 223 93 68</a></p>
                    <p><a href="mailto: kancelaria@krystianszulc.pl"><i class="fas fa-envelope"></i> email: kancelaria@krystianszulc.pl</a></p>
                    <br />
                    <p>Godziny pracy: poniedziałek - piątek 9.00-17.00</p>
                </div>
                <div className='col-6 col-xs12'>
                    <iframe id='map' style={map} title="map" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;q=o%C5%9Bwi%C4%99cimska%2013,%20mys%C5%82owice,%20poland+(Kancelaria%20Radcy%20Prawnego%20Krystian%20Szulc)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    </iframe><br />
                    <p style={{ textAlign: 'center', marginTop: '-45px', }}><a href="https://www.maps.ie/route-planner.htm">Google Route Planner</a></p>
                </div>
            </address>

            )
    }
}

export default Kontakt
