import React from 'react';
import './index.css';
import './service.css';
import service from './img/service2.png';
import pharmacy from './img/pharm.png'

class Service extends React.Component {
    render() {
        return (
            <div className='service'>
                <div>
                    <div className='col-8'>
                        <h1>Ogólne</h1>
                    </div>
                    <div className='col-8'>
                        <ul>
                            <li>Obsługa prawna przedsiębiorstw w pełnym zakresie, w tym reprezentacja przed sądami i organami administracji państwowej.</li>
                            <li>Doradztwo w bieżącej działalności przedsiębiorstw</li>
                            <li>Prowadzenie spraw sądowych przed sądami powszechnymi i administracyjnymi</li>
                            <li>Dokonywanie przekształceń własnościowych</li>
                            <li>Pomoc w rozpoczęciu działalności gospodarczej</li>
                            <li>Sporządzanie opini prawnych, projektów umów, pism wewnętrznych spółek</li>
                        </ul>
                    </div>
                    <div className='col-4'>
                        <img src={service} />
                    </div>
                </div>
                <div>
                    <div className='col-12 specjalizacja'>
                        <h1 className='col-8'>Specjalizacja - <span style={{ fontSize: '22px' }}>Prawo Farmaceutyczne</span></h1>
                        <h4 className='col-8' style={{ textAlign: 'center', margin: '-10px 0 0 0', }}>i sprawy rynku aptekarskiego</h4>
                    </div>
                    <div>
                        <div className='col-8 spec'>
                            <p>Od 2004 roku kancelaria obsługuje Okręgową Izbę Aptekarską w Katowicach ( od 2008 Śląska Izbę Aptekarską ) 
                            i specjalizuje się w sprawach związanych z szeroko pojętym prawem farmaceutycznym oraz sprawami aptek i detalicznego obrotu lekami, 
                            środkami spożywczymi specjalnego przeznaczenia żywieniowego i wyrobami medycznymi.</p>
                            <p>W tym czasie Kancelaria reprezentowała izbę z sukcesem przed Urzędem Ochrony Konkurencji i Konsumentów, 
                            Ministrem Zdrowia w sprawach konsultacji społecznych przy pracach nad ustawą o refundacji leków, w wielu innych sprawach związanych 
                            z prawem prasowym oraz reklama aptek i reklamą produktów leczniczych.</p>
                        </div>
                        <div className='col-4 pharm'>
                            <img src={pharmacy} />
                        </div>
                    </div>
                    <div className='col-12 specPart2'>
                        <p>Kancelaria prowadzi sprawy z Narodowym Funduszem Zdrowia związane z kontrolami i potrącaniem bez sądu aptekom z bieżącej
                            refundacji tylko na podstawie protokołu kontroli oraz sprawy z Nadzorem Farmaceutycznym.</p>

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
