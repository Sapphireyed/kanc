import React from 'react';
import './index.css';

class Kontakt extends React.Component {
    render() {
        const map = {
            width: '500px',
            height: '500px',
            display: 'block',
            margin: 'auto',
            padding: '50px',
        }

        const kontakt = {
            marginLeft: '60px',
            marginTop: '60px',
        }
        return (
            <div className='row service'>
                <div className='col-4' style={kontakt}>
                    <p><strong>Kancelaria Radcy prawnego</strong></p>
                    <p><strong>Krystian Szulc</strong></p>
                    <p>Oświęcimska 13</p>
                    <p>41-400 Mysłowice</p>
                    <p>tel. 32 223 93 68</p>
                    <p>fax: 32 222 26 08</p>
                    <p>email: kancelaria@krystianszulc.pl</p>
                    <br />
                    <p>Godziny pracy: poniedziałek - piątek 9.00-17.00</p>
                </div>
                <div className='col-6'>
                    <iframe style={map} frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;q=o%C5%9Bwi%C4%99cimska%2013,%20mys%C5%82owice,%20poland+(Kancelaria%20Radcy%20Prawnego%20Krystian%20Szulc)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    </iframe><br />
                    <p style={{ textAlign: 'center', marginTop: '-60px', }}><a href="https://www.maps.ie/route-planner.htm">Google Route Planner</a></p>
                </div>
            </div>

            )
    }
}

export default Kontakt
