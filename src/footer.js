import React from 'react';
import './index.css';

class Footer extends React.Component {
    render() {
        const footer = {
            textAlign: 'center',
        }
        return (
            <div style={footer} className='col-12'>
                <h1>Kancelaria Radcy Prawnego Krystian Szulc</h1>
                <div className='col-6'>
                    <p>Oœwiêcimska 13</p>
                    <p>41-400 Mys³owice</p>
                    <p>Godziny pracy: poniedzia³ek - pi¹tek 9.00-17.00</p>
                </div>
                <div className='col-6'>
                    <p>tel. 32 223 93 68</p>
                    <p>fax: 32 222 26 08</p>
                    <p>email: kancelaria@krystianszulc.pl</p>
                </div>

                
            </div>
            )
    }
}
export default Footer
