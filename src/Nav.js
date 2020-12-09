import React from 'react';
import { Helmet } from 'react-helmet';
import logoWh from './img/logo2.png';
import scale from './img/scale2.png'
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
    }

    showMenu(event) {
        event.preventDefault();

        const newState = this.state.showMenu == false ? true : false;
        this.setState({ showMenu: newState });
    }
    showHome() {
        let main = document.getElementById('main')
        let home = document.getElementById('home')
        home.style.display = 'none'
        main.innerHTML = home.innerHTML
    }
    showService() {
        document.getElementById('home').style.display = 'none'
        let main = document.getElementById('main')
        let service = document.getElementById('service')
        main.innerHTML = service.innerHTML
    }
    showKontakt() {
        document.getElementById('home').style.display = 'none'
        let main = document.getElementById('main')
        let kontakt = document.getElementById('kontakt')
        main.innerHTML = kontakt.innerHTML
    }
    render() {
        const logo = {
            width: '188px',
            height: 'auto',
        }
        const scaleimg = {
            padding: '12px',
            bottom: '15px',
        }
        const sideBtn = {
            color: 'transparent',
            fontSize: '2.5em',
            fontWeight: 'bold',
            top: '36%',
            right: '-2vw',
            position: 'absolute',
            cursor: 'pointer',
            display: 'block',
            zIndex: '1',
        }
        const side = {
            transition: 'transform 0.5s',
            transitionTimingFunction: 'cubicBezier(0, .52, 0, 1)',
            transform: 'translate3d(-14.5vw, 0, 0)',
        }
        const sideShown = {
            transition: 'transform .5s',
            transitionTimingFunction: 'cubicBezier(0, .52, 0, 1)',
            transform: 'translate3d(0vw, 0, 0)',
        }
        return (
            <div id='whatever'>
                <Helmet htmlAttributes={{ lang: 'en' }}>
                    <meta charSet="UTF-8" />
                    <title>Home</title>
                </Helmet>
                {
                    this.state.showMenu
                        ? (
                            <div className='menu' style={side}>
                                <img src={logoWh} style={logo} />
                                <a onClick={this.showMenu} style={sideBtn}>
                                    &gt;
                                </a>
                                <ul>
                                    <li><a href='#home'> Strona g&#322;&#243;wna </a></li>
                                    <li><a href='#'> Kancelaria </a></li>
                                    <li><a href='#service'> Zakres us&#322;ug </a></li>
                                    <li><a href='#'> Kontakt </a></li>

                                </ul>
                            </div>
                        ) :
                        (
                            <div className='menu' style={sideShown}>
                                <img src={logoWh} style={logo} />
                                <a onClick={this.showMenu} style={sideBtn}>
                                    &gt;
                                </a>
                                <ul>
                                    <li><a href='#' onClick={this.showHome}> Strona główna </a></li>
                                    <li><a href='#'> Kancelaria </a></li>
                                    <li><a href='#' onClick={this.showService}> Zakres usług </a></li>
                                    <li><a href='#' onClick={this.showKontakt}> Kontakt</a></li>
                                </ul>
                                <br />
                                <img src={scale} style={scaleimg} />
                            </div>
                        )
                }
            </div>
        );
    }

}

export default Card;
