import React from 'react';
import profile from './img/profilecirc.png';

class Navbar extends React.Component {
    render() {
        const imgstyle = {
            width: '60px',
            height: 'auto',
            padding: '4px',
        }
        const navstyle = {
            backgroundColor: '#6d0016',
            borderBottom: '5px solid white',
            position: 'fixed',
            top: '0',
            width: '100%',
            zIndex: '2',
        }
        const toptext = {
            color: '#a29c9a',
            textWeight: "bold",
            textAlign: 'center',
            margin: 'auto auto',
            padding: '5px 0 0 0',
            textShadow: '2px 2px black',
        }

        const icons = {
            padding: '4px',
            marginTop: '5px',
            marginRight: '5px'
        }
        return (
            <div style={navstyle}>

                <div className='col-10 col-s8'>
                    <div className='col-2 col-s5 col-xs3' style={{podition: 'relative'}}>
                        <img className='lg-float-right' src={profile} alt="" style={imgstyle} />
                    </div>
                     <div className='col-8 col-s7 col-xs9'>
                        <h1 className='sm-font-h1 xsm-font-h1 lg-text sm-none' style={toptext}> Kancelaria Radcy Prawnego Krystian Szulc</h1>
                        <h1 className='sm-font-h1 xsm-font-h1 lg-text  md-none lg-none' style={toptext}>Kancelaria Krystian Szulc</h1>
                    </div>
                </div>

                <div style={{ float: 'right', }}>
                    <a className='sm-none' href="mailto: kancelaria@krystianszulc.pl"><i class="far fa-envelope fa-2x" style={icons}></i>.</a>
                    <a className='sm-none' href="tel: 32 223 93 68"><i class="fa fa-phone fa-2x" aria-hidden="true" style={icons}></i>.</a>
                    <a className='lg-none'href="mailto: kancelaria@krystianszulc.pl"><i class="far fa-envelope" style={icons}></i>.</a><br className='lg-none'/>
                    <a className='lg-none'href="tel: 32 223 93 68"><i class="fa fa-phone" aria-hidden="true" style={icons}></i>.</a>
                </div>
            </div>
            )
            }
            }

export default Navbar;
