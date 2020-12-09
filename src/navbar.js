import React from 'react';
import profile from './img/profilecirc.png';

class Navbar extends React.Component {
    constructor() {
        super();
    }
    render() {
        const imgstyle = {
            width: '100px',
            height: 'auto',
            padding: '4px',
            float: 'right'
        }
        const navstyle = {
            backgroundColor: '#002549',
            borderBottom: '5px solid white',
            position: 'fixed',
            top: '0',
            width: '100%',
        }
        const toptext = {
            color: 'white',
            textWeight: "bold",
            fontSize: '3vw',
            textAlign: 'center',
            marginTop: '-1px',
            marginBottom: '-10px',
            marginLeft: '-100px',
            textShadow: '2px 2px black',
        }


        return (
            <div className='row' style={navstyle}>
                <div className='col-3 col-s12'>
                    <img src={profile} style={imgstyle} />
                </div>
                 <div className='col-7 col-s12'>
                    <h1 style={toptext}> Kancelaria  Radcy Prawnego</h1>
                    <h1 style={toptext}>Krystian Szulc</h1>
                 </div>
            </div>
            )
            }
            }

export default Navbar;