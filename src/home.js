import React from 'react';
import kryst from './img/kryst.png';
import './index.css';
import './home.css';

class Home extends React.Component {
    render() {
       
        return (
            <div className='home'>
                <div className='col-7'>
                    <p>Kancelaria powstała w 1992 roku w Katowicach i od początku, tak jak i dzisiaj, obsługiwała głównie podmioty gospodarcze.</p>
                    <p>Kancelaria świadczy usługi w zakresie obsługi prawnej przedsiębiorstw w pełnym zakresie, w tym reprezentacji przed sądami i organami administracji państwowej, dokonujemy przekształceń własnościowych oraz pomagamy w rozpoczęciu i zakończeniu działalności gospodarczej.</p>
                    <p>W 2004 roku kancelaria rozpoczęła współpracę z Okręgową Izbę Aptekarską w Katowicach ( od 2008 Śląska Izbę Aptekarską ) i od tego czasu specjalizuje się w:</p>
                    <ul>
                        <li>sprawach związanych z szeroko pojętym prawem farmaceutycznym. oraz sprawami aptek i detalicznego obrotu lekami, środkami spożywczymi specjalnego przeznaczenia żywieniowego oraz wyrobami medycznymi.</li>
                        <li>sprawach reklamy aptek i leków</li>
                        <li>sprawach pracy szczególnie zatrudniania farmaceutów</li>
                        <li>Sporach z Narodowym funduszem Zdrowia w zakresie kontroli aptek i zwrotu refundacji leków.</li>
                    </ul>
                </div>
                <div className='col-5'>
                    <img src={kryst} className='profile'/>
                </div>
            </div>
        )
    }
}

export default Home
