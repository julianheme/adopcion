import React, {Component} from 'react';
import {MediaQuerySSR} from "../pasosAdopcion/node_modules/react-responsive-ssr";
import VerMas from "./verMas";

class Testimonio extends Component {
    render() {
        const l = {
            main:{display:'grid', gridTemplateColumns:'30% 70%', width:'90%', margin:'auto'},
            item1:{padding:'3%', columns:'span 1', width:'100%'},
            item2:{margin:'auto',padding:'7%', columns: 'span 1', borderRadius:'50px', boxShadow:'10px 10px 33px -9px rgba(0,0,0,0.35)'},
            imagen:{width:'90%', transform: 'translateX(5%)'},
            nombre:{fontSize:'24px', textAlign:'center', marginBottom:'0%', color:'#4e5757'},
            pais:{fontSize:'16px', textAlign:'center', marginTop:'0%', color:'#b7c0c0'},
            texto:{color:'#4e5757', fontSize:'16px'}

        }
        const m = {
            main:{display:'grid', gridTemplateColumns:'30% 70%', width:'90%', margin:'auto'},
            item1:{padding:'2.4%', columns:'span 1', width:'100%'},
            item2:{margin:'auto',padding:'5.6%', columns: 'span 1', borderRadius:'50px', boxShadow:'10px 10px 33px -9px rgba(0,0,0,0.35)'},
            imagen:{width:'90%', transform: 'translateX(5%)'},
            nombre:{fontSize:'21px', textAlign:'center', marginBottom:'0%', color:'#4e5757'},
            pais:{fontSize:'14px', textAlign:'center', marginTop:'0%', color:'#b7c0c0'},
            texto:{color:'#4e5757', fontSize:'14px'}
        }
        const s = {
            main:{display:'grid', gridTemplateColumns:'100%', width:'90%', margin:'auto', marginBottom:'3%'},
            item1:{padding:'1.5%', columns:'span 1', width:'100%'},
            item2:{margin:'auto',padding:'4%', columns: 'span 1', borderRadius:'50px', boxShadow:'10px 10px 19px -10px rgba(0,0,0,0.35)'},
            imagen:{width:'50%', transform:'translateX(50%)'},
            nombre:{fontSize:'18px', textAlign:'center', marginBottom:'0%', color:'#4e5757'},
            pais:{fontSize:'12px', textAlign:'center', marginTop:'0%', color:'#b7c0c0'},
            texto:{color:'#4e5757', fontSize:'12px'}
        }
        return (
            <div>
                <MediaQuerySSR maxWidth={599}>
                    <div style={s.main}>
                        <div style={s.item1}>
                            <img style={s.imagen} src={this.props.imagen} alt="Testimonio"/>
                            <h1 style={s.nombre}>{this.props.nombre}</h1>
                            <h2 style={s.pais}>{this.props.pais}</h2>
                        </div>
                        <div style={s.item2}>
                            <p style={s.texto}>{this.props.texto}</p>
                        </div>
                    </div>
                </MediaQuerySSR>
                <MediaQuerySSR minWidth={600} maxWidth={1199}>
                    <div style={m.main}>
                        <div style={m.item1}>
                            <img style={m.imagen} src={this.props.imagen} alt="Testimonio"/>
                            <h1 style={m.nombre}>{this.props.nombre}</h1>
                            <h2 style={m.pais}>{this.props.pais}</h2>
                        </div>
                        <div style={m.item2}>
                            <p style={m.texto}>{this.props.texto}</p>
                        </div>
                    </div>
                </MediaQuerySSR>
                <MediaQuerySSR minWidth={1200}>
                    <div style={l.main}>
                        <div style={l.item1}>
                            <img style={l.imagen} src={this.props.imagen} alt="Testimonio"/>
                            <h1 style={l.nombre}>{this.props.nombre}</h1>
                            <h2 style={l.pais}>{this.props.pais}</h2>
                        </div>
                        <div style={l.item2}>
                            <p style={l.texto}>{this.props.texto}</p>
                        </div>
                    </div>
                </MediaQuerySSR>
            </div>
        );
    }
}

export default Testimonio;