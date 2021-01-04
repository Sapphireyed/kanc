import React from 'react';
import { Helmet } from 'react-helmet';
import logoWh from './img/logo.png';
import scale from './img/scale3.png';
import './nav.css';

class Card extends React.Component {
    constructor() {
        super();

        this.state = {
            showMenu: false,
            language: 'pl-PL',
        };

        this.showMenu = this.showMenu.bind(this);
        this.showHome = this.showHome.bind(this);
        this.showService = this.showService.bind(this);
        this.showKontakt = this.showKontakt.bind(this);
        this.showHist = this.showHist.bind(this);
        this.showMain = this.showMain.bind(this);
    }

    showMenu(event) {


        const newState = this.state.showMenu === false ? true : false;
        this.setState({ showMenu: newState });
        this.state.showMenu === false ? document.getElementsByClassName('page')[0].style.margin = '0 5% 0 6%' : document.getElementsByClassName('page')[0].style.margin = '0 5% 0 18%'
        this.state.showMenu === false ? document.getElementById('mainpgDiv').style.margin = '0 0 0 0' : document.getElementById('mainpgDiv').style.margin = '0 0 0 16%'
        this.state.showMenu === false ? document.getElementById('main1').style.margin = '0 0 0 0' : document.getElementById('main1').style.margin = '0 0 0 16%'
    }

    showHome() {
        let mainCont = document.getElementById('maincontent')
        let main = document.getElementById('main')
        let home = document.getElementById('home')
        main.innerHTML = home.innerHTML
        mainCont.innerHTML = document.getElementById('kanch1').innerHTML
        this.showMenu();
    }
    showHist() {
        let mainCont = document.getElementById('maincontent')
        let main = document.getElementById('main')
        let hist = document.getElementById('hist')
        main.innerHTML = hist.innerHTML
        mainCont.innerHTML = document.getElementById('histh1').innerHTML
        this.showMenu();
    }
    showService() {
        let mainCont = document.getElementById('maincontent')
        document.getElementById('home').style.display = 'none'
        let main = document.getElementById('main')
        let service = document.getElementById('service')
        main.innerHTML = service.innerHTML;
        mainCont.innerHTML = document.getElementById('servh1').innerHTML
        this.showMenu();
    }
    showKontakt() {
        let mainCont = document.getElementById('maincontent')
        document.getElementById('home').style.display = 'none'
        let main = document.getElementById('main')
        let kontakt = document.getElementById('kontakt')
        main.innerHTML = kontakt.innerHTML
        mainCont.innerHTML = document.getElementById('kontakth1').innerHTML
        this.showMenu();
    }
    showMain() {
        let mainCont = document.getElementById('maincontent')
        document.getElementById('home').style.display = 'none'
        let main = document.getElementById('main')
        let mainPg = document.getElementById('mainPg')
        main.innerHTML = mainPg.innerHTML
        mainCont.innerHTML = "";
        this.showMenu();
    }

    render() {
        const logo = {
            width: '188px',
            height: 'auto',
        }
        const scaleimg = {
            padding: '12px',
            bottom: '15px',
            width: '178px',
            height: 'auto',
        }
        const sideBtn = {
            color: 'transparent',
            fontSize: '3.5em',
            fontWeight: 'bold',
            top: '34%',
            right: '-32px',
            position: 'absolute',
            cursor: 'pointer',
            display: 'block',
            zIndex: '1',
        }
       
        return (
            <div id='whatever'>
                <Helmet htmlAttributes={{ lang: 'en' }}>
                    <meta charSet="UTF-8" />
                    <title>Kancelaria Krystian Szulc</title>
                </Helmet>
                {
                    this.state.showMenu
                        ? (
                            <div className='menu side'>
                                <img src={logoWh} alt="" style={logo} />
                                <a href="#home" onClick={this.showMenu} style={sideBtn}>
                                    &gt;
                                </a>
                                <ul>
                                    <li><a href='#home'> Strona główna </a></li>
                                    <li><a href='#home'> Kancelaria </a></li>
                                    <li><a href='#service'> Zakres usług </a></li>
                                    <li><a href='#kontakt'> Kontakt </a></li>

                                </ul>
                            </div>
                        ) :
                        (
                            <div className='menu sideShown'>
                                <div id='logo'>
                                    <img src={logoWh} alt="" style={logo} />
                                </div>
                                <a href="#home" onClick={this.showMenu} style={sideBtn}>
                                    &gt;
                                </a>
                                <ul>
                                    <li><a onClick={this.showMain} href='#top'>Strona główna </a></li>
                                    <li><a onClick={this.showHome} href='#top' id='homeBtn'> O Kancelarii </a></li>
                                    <li><a href='#top' onClick={this.showHist}> Historia </a></li>
                                    <li><a href='#top' onClick={this.showService}> Zakres usług </a></li>
                                    <li><a href='#top' onClick={this.showKontakt}> Kontakt</a></li>
                                </ul>
                                <br />
                                <img src={scale} alt=""style={scaleimg} />
                            </div>
                        )
                }
            </div>
        );
    }

}

export default Card;
