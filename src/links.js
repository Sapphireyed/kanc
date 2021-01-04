import React from 'react';
import fb from './img/fb.png';

class Links extends React.Component {
    constructor() {
        super();
        this.closefb = this.closefb.bind(this);
        this.openfb = this.openfb.bind(this);
    }
    closefb() {
        let fbframe = document.getElementById('fbframe');
        fbframe.style.display = 'none';
        document.getElementById('fbclose').style.display = 'none';

    }
    openfb() {
        let fbframe = document.getElementById('fbframe');
        fbframe.style.display = 'block';
        document.getElementById('fbclose').style.display = 'block';
    }
    render() {
        const fbstyle = {
            position: 'fixed',
            top: '15%',
            right: '0',
            zIndex: '2',
            display: 'none',
        }
        const fbicon = {
            position: 'fixed',
            width: '32px',
            top: '51%',
            right: '0',
            zIndex: '1',
            cursor: 'pointer',
        }
        const fbclose = {
            position: 'fixed',
            top: '15%',
            right: '0',
            zIndex: '3',
            width: '32px',
            height: '34px',
            fontSize: '22px',
            backgroundColor: 'rgb(109, 0, 22)',
            display: 'block',
            margin: 'auto',
            cursor: 'pointer',
        }
        return (
            <div>
                <div onClick={this.openfb}>
                    <img src={fb} alt ='' style={fbicon} />
                </div>
                <div id="fbclose" onClick={this.closefb} style={fbclose}>
                    <span style={{marginLeft: '9px'}}><strong>X</strong></span>
                </div>
                <div id='fbframe' class="fb-page"
                    style={fbstyle}
                    data-href="https://www.facebook.com/PrawoFarmaceutyczne"
                    data-tabs="timeline"
                    data-width="300" data-height="500"
                    data-small-header="true"
                    data-adapt-container-width="true"
                    data-hide-cover="true"
                    data-show-facepile="true">
                    <blockquote cite="https://www.facebook.com/PrawoFarmaceutyczne" class="fb-xfbml-parse-ignore">
                        <a href="https://www.facebook.com/PrawoFarmaceutyczne">Prawo farmaceutyczne</a>
                    </blockquote>
                </div>
            </div>



            )
    }
}

export default Links
