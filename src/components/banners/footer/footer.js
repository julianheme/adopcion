import React, {Component} from 'react';
import style from './footer.module.css'
import logo from '../../../imagenes/ZeriDog.png'

class Footer extends Component {
    render() {
        return (
            <div className={style.footer}>
                <div className={style.wrapper}>
                    <img className={style.logo} src={logo} alt={logo}/>
                </div>
            </div>
        );
    }
}

export default Footer;