import React, { Component } from "react";
import { MediaQuerySSR } from "react-responsive-ssr";
import VisibilitySensor from "react-visibility-sensor";
import Fade from 'react-reveal'

class Pasospedido extends Component {
  render() {
    const l = {
      main: { width: "100%", padding: "3%" },
      title: {
        fontSize: "90px",
        fontFamily: "Cookie-regular",
        textAlign: "center",
        margin:'0px',
        padding:'2.5%',
        fontWeight:'normal'
      },
      grid: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 25%)",
        padding: "0% 5%",
      },
      item: {
        columns: "span 1",
        fontFamily: "Poppins-Medium",
        textAlign: "center",
        fontSize: "24px",
      },
      texto: { margin: "0%", color: "#4e5757", padding: "0% 20%" },
      image: {
        width: "100%",
        padding: "0% 8%",
      },
      c4: { gridColumns: "span 4" },
    };
    const m = {
      main: { width: "100%", padding: "3%" },
      title: {
        fontSize: "78.75px",
        fontFamily: "Cookie-regular",
        textAlign: "center",
        fontWeight: 'normal',
        margin:'0px',
        padding:'2.5%'
      },
      grid: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 25%)",
        padding: "0% 4%",
      },
      item: {
        columns: "span 1",
        fontFamily: "Poppins-Medium",
        textAlign: "center",
        fontSize: "21px",
      },
      texto: { margin: "0%", color: "#4e5757", padding: "0% 10%" },
      image: {
        width: "100%",
        padding: "0% 8%",
      },
      c4: { gridColumns: "span 4" },
    };
    const s = {
      main: { width: "100%", padding: "1%", marginBottom:'4%'},
      title: {
        fontFamily: "Cookie-Regular",
        fontSize: "67.5px",
        textAlign: "center",
        fontWeight: 'normal',
        margin:'0px',
        padding:'2.5%'
      },
      grid: {gridTemplateRows:'repeat(4,25%)', display:'grid', height:'100%'},
      item: {rows:'span 1', margin:'auto'},
      supergrid:{display:'grid', gridTemplateColumns:'50% 50%'},
      column: {columns:'span 1'},
      image:{width:'100%'},
      texto:{fontSize:'18px', color: '#4e5757', textAlign:'center', padding:'3%'}
    };
    return (
      <div>
        <MediaQuerySSR maxWidth={599}>
          <div style={s.main}>
            <h1 style={s.title}>{this.props.titulo}</h1>
            <div style={s.supergrid}>
              <div style={s.column}>
                <Fade left>
                <img
                  style={s.image}
                  src="/assets/PasosPedidoVertical.png"
                  alt="Pasos Pedidos"
                />
                </Fade>
              </div>
              <div style={s.column}>
                <div style={s.grid}>
                  <div style={s.item}>
                    <p style={s.texto}>{this.props.paso1}</p>
                  </div>
                  <div style={s.item}>
                    <p style={s.texto}>{this.props.paso2}</p>
                  </div>
                  <div style={s.item}>
                    <p style={s.texto}>{this.props.paso3}</p>
                  </div>
                  <div style={s.item}>
                    <p style={s.texto}>{this.props.paso4}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MediaQuerySSR>
        <MediaQuerySSR minWidth={600} maxWidth={1199}>
          <div style={m.main}>
            <h1 style={m.title}>{this.props.titulo}</h1>
            <Fade left>
            <img
              style={m.image}
              src="/assets/PasosPedido.png"
              alt="Pasos Pedidos"
            />
            </Fade>
            <div style={m.grid}>
              <div style={m.item}>
                <p style={m.texto}>{this.props.paso1}</p>
              </div>
              <div style={m.item}>
                <p style={m.texto}>{this.props.paso2}</p>
              </div>
              <div style={m.item}>
                <p style={m.texto}>{this.props.paso3}</p>
              </div>
              <div style={m.item}>
                <p style={m.texto}>{this.props.paso4}</p>
              </div>
            </div>
          </div>
        </MediaQuerySSR>
        <MediaQuerySSR minWidth={1200}>
          <VisibilitySensor partialVisibility={true}>
            {({isVisible})=>
                <div style={l.main}>
                  <h1 style={l.title}>{this.props.titulo}</h1>
                  <Fade left delay={200} in={isVisible}>
                    <img
                        style={l.image}
                        src="/assets/PasosPedido.png"
                        alt="Pasos Pedidos"
                    />
                  </Fade>
                  <div style={l.grid}>
                    <div style={l.item}>
                      <p style={l.texto}>{this.props.paso1}</p>
                    </div>
                    <div style={l.item}>
                      <p style={l.texto}>{this.props.paso2}</p>
                    </div>
                    <div style={l.item}>
                      <p style={l.texto}>{this.props.paso3}</p>
                    </div>
                    <div style={l.item}>
                      <p style={l.texto}>{this.props.paso4}</p>
                    </div>
                  </div>
                </div>
            }
          </VisibilitySensor>
        </MediaQuerySSR>
      </div>
    );
  }
}

export default Pasospedido;
