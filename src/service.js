import React from 'react';
import './index.css';
import './service.css';
import service from './img/service2.png';
import pharmacy from './img/pharm.png'

class Service extends React.Component {
    render() {
        return (
            <div className='service page'>
                <div>
                    <span id='serviceSpec' style={{
                        position: 'absolute', top: '10%', color: 'transparent'}}>x</span>
                    <div className='col-8 col-xs12' style={{display: 'none'}}>
                        <h1 id='servh1'>
                            <span className='col-3 col-xs12'><a href='#serviceSpec'>Ogólne</a></span>
                            <span className='col-3 col-xs12 spech1'><a href="#specDesc">Specjalizacja</a></span>
                        </h1>
                    </div>
                    <div className='col-xs12 lg-none md-none'>
                        <img src={service} alt="" />
                    </div>
                    <div className='col-8 col-xs12'>
                        <ul>
                            <li>Obsługa prawna przedsiębiorstw w pełnym zakresie, w tym reprezentacja przed sądami i organami administracji państwowej.</li>
                            <li>Doradztwo w bieżącej działalności przedsiębiorstw</li>
                            <li>Prowadzenie spraw sądowych przed sądami powszechnymi i administracyjnymi</li>
                            <li>Dokonywanie przekształceń własnościowych</li>
                            <li>Pomoc w rozpoczęciu działalności gospodarczej</li>
                            <li>Sporządzanie opini prawnych, projektów umów, pism wewnętrznych spółek</li>
                        </ul>
                    </div>
                    <div className='col-4 sm-none'>
                        <img src={service} alt="" />
                    </div>
                </div>
                <div>
                    <div className='col-12 specjalizacja' id='secjh1'>
                        <h1 className='col-8 col-xs12'><span style={{ fontSize: '22px' }}>Prawo Farmaceutyczne</span></h1>
                        <h4 className='col-8 col-xs12' style={{ textAlign: 'center', margin: '-10px 0 0 0', }}>i sprawy rynku aptekarskiego</h4>
                    </div>
                    <div className='col-4 col-xs12 pharm lg-none'>
                        <img src={pharmacy} alt="" />
                    </div>
                    <div id='specDesc'>
                        <div className='col-8 col-xs12 spec'>
                            <p>Od 2004 roku kancelaria obsługuje Okręgową Izbę Aptekarską w Katowicach ( od 2008 Śląska Izbę Aptekarską ) 
                            i specjalizuje się w sprawach związanych z szeroko pojętym prawem farmaceutycznym oraz sprawami aptek i detalicznego obrotu lekami, 
                            środkami spożywczymi specjalnego przeznaczenia żywieniowego i wyrobami medycznymi.</p>
                            <p>W tym czasie Kancelaria reprezentowała izbę z sukcesem przed Urzędem Ochrony Konkurencji i Konsumentów, 
                            Ministrem Zdrowia w sprawach konsultacji społecznych przy pracach nad ustawą o refundacji leków, w wielu innych sprawach związanych 
                            z prawem prasowym oraz reklama aptek i reklamą produktów leczniczych.</p>
                        </div>
                        <div className='col-4 col-xs12 pharm sm-none'>
                            <img src={pharmacy} alt=""/>
                        </div>
                    </div>
                    <div className='col-12 specPart2'>
                        <p>Kancelaria prowadzi sprawy z Narodowym Funduszem Zdrowia związane z przeprowadzanymi przez NFZ kontrolami a także dokonywaniem potrącań  należnej aptekom bieżącej refundacji tylko na podstawie protokołu kontroli, bez wyroku sądu. Zajmujemy się także obsługą spraw z Nadzorem Farmaceutycznym.</p>

                        <p>W kancelarii opracowuje się wiele opinii prawnych z zakresu prawa farmaceutycznego oraz ustawy o izbach aptekarskich.
                        Szulc Krystian prowadzi szkolenia z zakresu prawa farmaceutycznego na zlecenie firm szkoleniowych oraz w ramach współpracy
                        z Śląskim Uniwersytetem Medycznym w ramach kursów specjalizacyjnych.</p>

                        <p>Ukazuje się też wiele publikacji w specjalistycznych czasopismach autorstwa prawnego Krystian Szulc.</p>
                    </div>
                </div>
            </div>
            )
    }
}
export default Service
