import React from 'react';
import './index.css';
import './mainpg.css';
/*import pharmbg from './img/pharmbg-wb.png';
import kato from './img/kato-wb.png';
import lawbooks from './img/lawbooks.png';
import kato1 from './img/kato1wb.png';
import kato2 from './img/kato2wb.png';
import kato3 from './img/kato3wb.png';
import pharmbg1 from './img/pharmbg1.png';
import pharmbg2 from './img/pharm2.png';
import pharmbg3 from './img/pharm3.png';*/

class MainPg extends React.Component {

    componentDidMount() {
        // maxims
        let maxims = [
            "Ei incumbit probatio, qui dicit, non qui negat",
            "Pacta sunt servanda",
            "Hominum causa omne ius constitutum sit",
            "Ignorantia iuris nocet, ignorantia facti non nocet",
            "Impossibilium nulla obligatio est",
            "Iustitia est constans et perpetua voluntas ius suum cuique tribuendi",
            "Lex retro non agit",
            "Scire leges non hoc est verba earum tenere, sed vim ac potestatem",
            "Vim vi repellere licet"
        ]
        // sevices
      /*  let services = [
            "Specjalizacja w Prawie Farmaceutycznym",
            "Rynek aptek bez tajemnic",
            "Współpraca ze Śląską Izbą Aptekarską",
            "Sprawy dot. obrotu lekami i wyrobami medycznymi",
            "Prawo dot. reklamy aptek i produktów leczniczych.",
            "Obsługa prawna przedsiębiorstw",
            "Opinie, publikacje, szkolenia specjalistyczne",
            "Kontrole aptek, sprawy z Nadzorem Farmaceutycznym",
            "Rozwiązywanie sporów z NFZ dot. m.in potrącenia z refndacji"
        ]
        // general info about the office
        let generalInfo = [
            "Prawie 30 lat doświadczenia",
            "Rynek aptek bez tajemnic",
            "Współpraca ze Śląską Izbą Aptekarską",
            "Sprawy dot. obrotu lekami i wyrobami medycznymi",
            "Prawo dot. reklamy aptek i produktów leczniczych.",
            "Obsługa prawna przedsiębiorstw",
            "Opinie, publikacje, szkolenia specjalistyczne",
            "Kontrole aptek, sprawy z Nadzorem Farmaceutycznym",
            "Rozwiązywanie sporów z NFZ dot. m.in potrącenia z refndacji"
        ]*/



        setInterval(function () {
            let chosenMaxim = document.getElementById('chosenMaxim');
            //let pharmDiv = document.getElementById('pharmDiv');
            //let kancDiv = document.getElementById('kancDiv');
            //maxim
            let min = 0;
            let max = (maxims.length);
            let num = Math.floor(Math.random() * (max - min));
            chosenMaxim.innerHTML = maxims[num];
            //small screen
            let maximDiv = document.getElementById('maximDiv');
            let bgs = ["url('/kanc/static/media/pharmbg-wb.2d9555e1.png')", "url('/kanc/static/media/kato-wb.75dc07ff.png')", "url('/kanc/static/media/lawbooks.01e20a39.png')"]
            let maxBg = (bgs.length );
            let bgNum = Math.floor(Math.random() * (maxBg - min));
         //   pharmDiv.innerHTML = services[num];
         //   kancDiv.innerHTML = generalInfo[num];
            if (window.matchMedia("(max-width: 600px)").matches) {
                maximDiv.style.backgroundImage = bgs[bgNum]
            }
            //big screen changing pharmacy
            let pharmMainId = document.getElementById('pharmMainId');
            let pharmBgs = ["url('/kanc/static/media/pharmbg-wb.2d9555e1.png')", "url('/kanc/static/media/pharm2.82e11293.png')", "url('/kanc/static/media/pharmbg1.015ac215.png')", "url('/kanc/static/media/pharm3.f3656691.png')"]
            let maxPharm = (pharmBgs.length);
            let pharmNum = Math.floor(Math.random() * (maxPharm - min));
            pharmMainId.style.backgroundImage = pharmBgs[pharmNum];
            //big screen changing city
            let katoId = document.getElementById('katoId');
            let katoBgs = ["url('/kanc/static/media/kato1wb.c8f5cbd2.png')", "url('/kanc/static/media/kato2wb.1a34e4df.png')", "url('/kanc/static/media/kato-wb.75dc07ff.png')", "url('/kanc/static/media/kato3wb.33b7b51c.png')"]
            let maxKato = (pharmBgs.length);
            let katoNum = Math.floor(Math.random() * (maxKato - min));
            katoId.style.backgroundImage = katoBgs[katoNum];
        }, 7000)

    }

    render() {
        return (
            <div id='mainpgDiv'>
                {/*<div className='col-4 col-s12 sm-none pharmMain' id='pharmMainId'>
                    <h2 style={{ color: '' }}></h2>
                    <h2 id='pharmDiv'><strong></strong></h2>
                </div>*/}
                <div className='col-4 col-s12 maxim' id='maximDiv'>

                    <h2 id='chosenMaxim'>Ei incumbit probatio, qui dicit, non qui negat</h2>
                    
                </div>
                {/*}<div className='col-4 col-s12 sm-none kato' id='katoId'>
                    /*<h2 style={{ color: 'transparent' }}></h2>
                    <h2 id='kancDiv'></h2>

                </div>*/}
            </div>
            )
    }
}

export default MainPg
