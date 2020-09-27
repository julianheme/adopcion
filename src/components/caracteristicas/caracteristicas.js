import React, { Fragment } from "react";
import { MediaQuerySSR } from "../pasosAdopcion/node_modules/react-responsive-ssr";

class Caracteristicas extends React.Component {
  render() {
    const l = {
      main: {
        width: "100%",
        position: "block",
        margin: "auto",
        textAlign: "center",
        padding: "3%",
      },
      title: {
        fontFamily: "Cookie-Regular",
        fontSize: "90px",
        fontWeight: "normal",
        margin: "auto",
        textAlign: "center",
        padding: "2.5%",
      },
      grid: {
        width: "80%",
        display: "grid",
        gridTemplateColumns: "repeat(2,50%)",
        margin: "auto",
        padding:'2.5% none'
      },
      item1: {
        padding: "5%",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "60% 40%",
        columns: "span 1",
        background: "#fbfbfb",
        boxShadow: "1px 0px 5px -1px rgba(0,0,0,0.31)",
      },
      item1r: {
        padding: "5%",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "60% 40%",
        columns: "span 1",
        background: "#fa93c1",
        boxShadow: "1px 0px 5px -1px rgba(0,0,0,0.31)",
        zIndex: "1",
      },
      item1v: {
        padding: "5%",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "60% 40%",
        columns: "span 1",
        background: "#d5f78b",
        boxShadow: "1px 0px 5px -1px rgba(0,0,0,0.31)",
        zIndex: "1",
      },
      item2: {
        padding: "5%",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "40% 60%",
        columns: "span 1",
        boxShadow: "1px 0px 5px -1px rgba(0,0,0,0.31)",
      },
      item2a: {
        padding: "5%",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "40% 60%",
        columns: "span 1",
        background: "#9fe9f8",
        boxShadow: "1px 0px 5px -1px rgba(0,0,0,0.31)",
        zIndex: "1",
      },
      info: { width: "100%", columns: "span 1", margin: "auto", padding: "5%" },
      imagen: {
        width: "60%",
        columns: "span 1",
        margin: "auto",
        padding: "5%",
      },
      txt: {
        textAlign: "left",
        lineHeight: "1",
        fontFamily: "Poppins-Regular",
        fontSize: "16px",
      },
      tit: {
        textAlign: "left",
        lineHeight: "1",
        fontFamily: "Poppins-Bold",
        fontSize: "24px",
      },
      txtd: {
        textAlign: "right",
        lineHeight: "1",
        fontFamily: "Poppins-Regular",
        fontSize: "16px",
      },
      titd: {
        textAlign: "right",
        lineHeight: "1",
        fontFamily: "Poppins-Bold",
        fontSize: "24px",
      },
    };
    const m = {
      main: {
        width: "100%",
        position: "block",
        margin: "auto",
        textAlign: "center",
        padding: "2%",
      },
      title: {
        fontFamily: "Cookie-Regular",
        fontSize: "78.75px",
        fontWeight: "normal",
        margin: "auto",
        textAlign: "center",
        padding: "2%",
      },
      grid: {
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(2,50%)",
        margin: "auto",
        padding:'2% none'
      },
      item1: {
        padding: "4%",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "60% 40%",
        columns: "span 1",
        background: "#fbfbfb",
        boxShadow: "1px 0px 5px -1px rgba(0,0,0,0.31)",
      },
      item1r: {
        padding: "4%",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "60% 40%",
        columns: "span 1",
        background: "#fa93c1",
        boxShadow: "1px 0px 5px -1px rgba(0,0,0,0.31)",
        zIndex: "1",
      },
      item1v: {
        padding: "4%",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "60% 40%",
        columns: "span 1",
        background: "#d5f78b",
        boxShadow: "1px 0px 5px -1px rgba(0,0,0,0.31)",
        zIndex: "1",
      },
      item2: {
        padding: "4%",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "40% 60%",
        columns: "span 1",
        boxShadow: "1px 0px 5px -1px rgba(0,0,0,0.31)",
      },
      item2a: {
        padding: "4%",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "40% 60%",
        columns: "span 1",
        background: "#9fe9f8",
        boxShadow: "1px 0px 5px -1px rgba(0,0,0,0.31)",
        zIndex: "1",
      },
      info: { width: "100%", columns: "span 1", margin: "auto", padding: "3%" },
      imagen: {
        width: "60%",
        columns: "span 1",
        margin: "auto",
        padding: "3%",
      },
      txt: {
        textAlign: "left",
        lineHeight: "1",
        fontFamily: "Poppins-Regular",
        fontSize: "14px",
      },
      tit: {
        textAlign: "left",
        lineHeight: "1",
        fontFamily: "Poppins-Bold",
        fontSize: "21px",
      },
      txtd: {
        textAlign: "right",
        lineHeight: "1",
        fontFamily: "Poppins-Regular",
        fontSize: "14px",
      },
      titd: {
        textAlign: "right",
        lineHeight: "1",
        fontFamily: "Poppins-Bold",
        fontSize: "21px",
      },
    };
    const s = {
      main: {
        width: "100%",
        position: "block",
        margin: "auto",
        textAlign: "center",
        padding: "1%",
        marginBottom:'4%'
      },
      title: {
        fontFamily: "Cookie-Regular",
        fontSize: "67.5px",
        fontWeight: "normal",
        margin: "auto",
        textAlign: "center",
        padding: "1.5%",
      },
      grid: {
        width: "100%",
        display: "grid",
        gridTemplateColumns: "100%",
        margin: "auto",
        padding:'1.5% none'
      },
      item1: {
        padding: "3%",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "60% 40%",
        columns: "span 1",
        background: "#fbfbfb",
        boxShadow: "1px 0px 5px -1px rgba(0,0,0,0.31)",
      },
      item1r: {
        padding: "3%",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "60% 40%",
        columns: "span 1",
        background: "#fa93c1",
        boxShadow: "1px 0px 5px -1px rgba(0,0,0,0.31)",
        zIndex: "1",
      },
      item1v: {
        padding: "3%",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "60% 40%",
        columns: "span 1",
        background: "#d5f78b",
        boxShadow: "1px 0px 5px -1px rgba(0,0,0,0.31)",
        zIndex: "1",
      },
      item2: {
        padding: "3%",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "40% 60%",
        columns: "span 1",
        boxShadow: "1px 0px 5px -1px rgba(0,0,0,0.31)",
      },
      item2a: {
        padding: "3%",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "40% 60%",
        columns: "span 1",
        background: "#9fe9f8",
        boxShadow: "1px 0px 5px -1px rgba(0,0,0,0.31)",
        zIndex: "1",
      },
      item1a: {
        padding: "3%",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "60% 40%",
        columns: "span 1",
        background: "#9fe9f8",
        boxShadow: "1px 0px 5px -1px rgba(0,0,0,0.31)",
        zIndex: "1",
      },
      info: { width: "100%", columns: "span 1", margin: "auto", padding: "3%" },
      imagen: {
        width: "60%",
        columns: "span 1",
        margin: "auto",
        padding: "3%",
      },
      txt: {
        textAlign: "left",
        lineHeight: "1",
        fontFamily: "Poppins-Regular",
        fontSize: "14px",
      },
      tit: {
        textAlign: "left",
        lineHeight: "1",
        fontFamily: "Poppins-Bold",
        fontSize: "21px",
      },
      txtd: {
        textAlign: "right",
        lineHeight: "1",
        fontFamily: "Poppins-Regular",
        fontSize: "14px",
      },
      titd: {
        textAlign: "right",
        lineHeight: "1",
        fontFamily: "Poppins-Bold",
        fontSize: "21px",
      },
    };
    return (
      <div>
        <MediaQuerySSR maxWidth={599}>
          <div style={s.main}>
            <h1 style={s.title}>Características</h1>
            <div style={s.grid}>
              <div style={s.item1r}>
                <div style={s.info}>
                  <h2 style={s.tit}>{this.props.titulo1}</h2>
                  <p style={s.txt}>{this.props.texto1}</p>
                </div>
                <img
                  src="/assets/autoportantes.png"
                  alt="imagen"
                  style={s.imagen}
                />
              </div>
              <div style={s.item2}>
                <img
                  src="/assets/CupColor.png"
                  alt="imagen"
                  style={s.imagen}
                />
                <div style={s.info}>
                  <h2 style={s.titd}>{this.props.titulo2}</h2>
                  <p style={s.txtd}>{this.props.texto2}</p>
                </div>
              </div>
              <div style={s.item1a}>
                <div style={s.info}>
                  <h2 style={s.tit}>{this.props.titulo3}</h2>
                  <p style={s.txt}>{this.props.texto3}</p>
                </div>
                <img
                  src="/assets/noRequierenMantequilla.png"
                  alt="imagen"
                  style={s.imagen}
                />
              </div>
              <div style={s.item2}>
                <img
                  src="/assets/horneaEnSerie.png"
                  alt="imagen"
                  style={s.imagen}
                />
                <div style={s.info}>
                  <h2 style={s.titd}>{this.props.titulo4}</h2>
                  <p style={s.txtd}>{this.props.texto4}</p>
                </div>
              </div>
              <div style={s.item1v}>
                <div style={s.info}>
                  <h2 style={s.tit}>{this.props.titulo5}</h2>
                  <p style={s.txt}>{this.props.texto5}</p>
                </div>
                <img
                  src="/assets/Reloj.png"
                  alt="imagen"
                  style={s.imagen}
                />
              </div>
              <div style={s.item2}>
                <img src="/assets/CupLogo.png" alt="imagen" style={s.imagen} />
                <div style={s.info}>
                  <h2 style={s.titd}>{this.props.titulo6}</h2>
                  <p style={s.txtd}>{this.props.texto6}</p>
                </div>
              </div>
            </div>
          </div>
        </MediaQuerySSR>
        <MediaQuerySSR minWidth={600} maxWidth={1199}>
          <div style={m.main}>
            <h1 style={m.title}>Características</h1>
            <div style={m.grid}>
              <div style={m.item1r}>
                <div style={m.info}>
                  <h2 style={m.tit}>{this.props.titulo1}</h2>
                  <p style={m.txt}>{this.props.texto1}</p>
                </div>
                <img
                  src="/assets/autoportantes.png"
                  alt="imagen"
                  style={m.imagen}
                />
              </div>
              <div style={m.item2}>
                <img
                  src="/assets/CupColor.png"
                  alt="imagen"
                  style={m.imagen}
                />
                <div style={m.info}>
                  <h2 style={m.titd}>{this.props.titulo2}</h2>
                  <p style={m.txtd}>{this.props.texto2}</p>
                </div>
              </div>
              <div style={m.item1}>
                <div style={m.info}>
                  <h2 style={m.tit}>{this.props.titulo3}</h2>
                  <p style={m.txt}>{this.props.texto3}</p>
                </div>
                <img
                  src="/assets/noRequierenMantequilla.png"
                  alt="imagen"
                  style={m.imagen}
                />
              </div>
              <div style={m.item2a}>
                <img
                  src="/assets/horneaEnSerie.png"
                  alt="imagen"
                  style={m.imagen}
                />
                <div style={m.info}>
                  <h2 style={m.titd}>{this.props.titulo4}</h2>
                  <p style={m.txtd}>{this.props.texto4}</p>
                </div>
              </div>
              <div style={m.item1v}>
                <div style={m.info}>
                  <h2 style={m.tit}>{this.props.titulo5}</h2>
                  <p style={m.txt}>{this.props.texto5}</p>
                </div>
                <img
                  src="/assets/Reloj.png"
                  alt="imagen"
                  style={m.imagen}
                />
              </div>
              <div style={m.item2}>
                <img src="/assets/CupLogo.png" alt="imagen" style={m.imagen} />
                <div style={m.info}>
                  <h2 style={m.titd}>{this.props.titulo6}</h2>
                  <p style={m.txtd}>{this.props.texto6}</p>
                </div>
              </div>
            </div>
          </div>
        </MediaQuerySSR>
        <MediaQuerySSR minWidth={1200}>
          <div style={l.main}>
            <h1 style={l.title}>Características</h1>
            <div style={l.grid}>
              <div style={l.item1r}>
                <div style={l.info}>
                  <h2 style={l.tit}>{this.props.titulo1}</h2>
                  <p style={l.txt}>{this.props.texto1}</p>
                </div>
                <img
                  src="/assets/autoportantes.png"
                  alt="imagen"
                  style={l.imagen}
                />
              </div>
              <div style={l.item2}>
                <img
                  src="/assets/CupColor.png"
                  alt="imagen"
                  style={l.imagen}
                />
                <div style={l.info}>
                  <h2 style={l.titd}>{this.props.titulo2}</h2>
                  <p style={l.txtd}>{this.props.texto2}</p>
                </div>
              </div>
              <div style={l.item1}>
                <div style={l.info}>
                  <h2 style={l.tit}>{this.props.titulo3}</h2>
                  <p style={l.txt}>{this.props.texto3}</p>
                </div>
                <img
                  src="/assets/noRequierenMantequilla.png"
                  alt="imagen"
                  style={l.imagen}
                />
              </div>
              <div style={l.item2a}>
                <img
                  src="/assets/horneaEnSerie.png"
                  alt="imagen"
                  style={l.imagen}
                />
                <div style={l.info}>
                  <h2 style={l.titd}>{this.props.titulo4}</h2>
                  <p style={l.txtd}>{this.props.texto4}</p>
                </div>
              </div>
              <div style={l.item1v}>
                <div style={l.info}>
                  <h2 style={l.tit}>{this.props.titulo5}</h2>
                  <p style={l.txt}>{this.props.texto5}</p>
                </div>
                <img
                  src="/assets/Reloj.png"
                  alt="imagen"
                  style={l.imagen}
                />
              </div>
              <div style={l.item2}>
                <img src="/assets/CupLogo.png" alt="imagen" style={l.imagen} />
                <div style={l.info}>
                  <h2 style={l.titd}>{this.props.titulo6}</h2>
                  <p style={l.txtd}>{this.props.texto6}</p>
                </div>
              </div>
            </div>
          </div>
        </MediaQuerySSR>
      </div>
    );
  }
}

export default Caracteristicas;
