import React from 'react';
import kryst from './img/kryst.png';
import './index.css';
import './home.css';

class Home extends React.Component {
    render() {
        return (
            <div className='page home'>
                <div style={{ display: 'none' }}>
                    <h1 className='col-7' id='kanch1'>O Kancelarii</h1>
                </div>
                <div className='col-7 col-xs12 kanctext'>
                    <h2>Prawie 30 lat doświadczenia zawodowego</h2>
                    <p>Kancelaria powstała w 1992 roku w Katowicach i zajmuje się głównie obsługą podmiotów gospodarczych.</p>
                    <p>Świadczy usługi w zakresie obsługi prawnej przedsiębiorstw w pełnym zakresie, w tym reprezentacji przed sądami i organami administracji państwowej.</p>
                    <p>Dokonujemy przekształceń własnościowych oraz asystujemy w rozpoczęciu i zakończeniu działalności gospodarczej.</p>
                    <p>Kancelaria posiada polisę generalną PZU zgodnie z ustawą o radcach prawnych.</p>
                    <h2>Ponad 15 lat ekspertyzy w prawie farmaceutycznym</h2>
                    <p>W 2004 roku kancelaria rozpoczęła współpracę z Okręgową Izbę Aptekarską w Katowicach (od 2008 Śląska Izbę Aptekarską) i od tego czasu specjalizuje się w:</p>
                    <ul className='sm-none'>
                        <li>sprawach związanych z szeroko pojętym prawem farmaceutycznym</li>
                        <li>sprawach aptek i detalicznego obrotu lekami, środkami spożywczymi specjalnego przeznaczenia żywieniowego oraz wyrobami medycznymi.</li>
                        <li>sprawach reklamy aptek i leków</li>
                        <li>prawie pracy, szczególnie zatrudniania farmaceutów</li>
                        <li>sporach z Narodowym Funduszem Zdrowia w zakresie kontroli aptek i zwrotu refundacji leków.</li>
                    </ul>
                </div>
                <div className='col-5 col-xs12'>
                    <img src={kryst} alt="" className='profile'/>
                </div>
                <ul className='col-s12 lg-none'>
                    <li>sprawach związanych z szeroko pojętym prawem farmaceutycznym</li>
                    <li>sprawach aptek i detalicznego obrotu lekami, środkami spożywczymi specjalnego przeznaczenia żywieniowego oraz wyrobami medycznymi.</li>
                    <li>sprawach reklamy aptek i leków</li>
                    <li>prawie pracy, szczególnie zatrudniania farmaceutów</li>
                    <li>sporach z Narodowym Funduszem Zdrowia w zakresie kontroli aptek i zwrotu refundacji leków.</li>
                </ul>
            </div>
        )
    }
}

export default Home
