import React from 'react';
import court from './img/court1.png'

class Hist extends React.Component {
    render() {
        const courtstyle = {
            
            margin: '10px -10px 10px 10px',
            float: 'right',
            boxShadow: '6px 6px 8px #242425',
        }
        return (
            <div className='page'>
                <div className='col-8 col-xs12' style={{ display: 'none' }}>
                    <h1 id='histh1'> Historia</h1>
                </div>
                <div className='col-8 col-xs12 hist' style={{padding: '0 10px', }}>
                    <p>Jestem absolwentem Uniwersytetu Śląskiego (1982). W latach 1985-1988 odbyłem aplikację radcowską, w latach 1988-92 pracowałem przy obsłudze prawnej przedsiębiorstw.</p>
                    <p>Własną kancelarię radcy prawnego założyłem w 1992 roku w Katowicach. Od początku działalności kancelaria specjalizowała się w obsłudze podmiotów gospodarczych, w tym reprezentowaniu przed sądami i organami administracji państwowej.</p>
                    <p>W 1995 roku przebywałem na stażu w Berlinie w Kancelarii Hengeller Muller, podczas którego zapoznałem się z niemieckim system prawa cywilnego i gospodarczego.</p>
                    <p>W roku 2004 Kancelaria rozpoczęła współpracę ze Śląską Izbą Aptekarską w Katowicach w zakresie obsługi prawnej. Od tego czasu kancelaria specjalizuje się w sprawach związanych z prawem farmaceutycznym oraz rynkiem aptek.</p>
                    <p>Na przełomie 2016 i 2017 roku brałem aktywny udział w opracowaniu projektu zmian prawa farmaceutycznego i wprowadzenia tzw. „apteki dla aptekarza”.</p>
                    <p>Prowadzę szkolenia dla farmaceutów oraz tworzę regularne publikacje w sprawach z zakresu prawa farmaceutycznego i spraw związanych z aptekami.</p>
                </div>
                <div className='col-4 col-xs12'>
                    <img src={court} alt='' classNAme='court' style={courtstyle}/>
                </div>
            </div>
            )
    }
}

export default Hist