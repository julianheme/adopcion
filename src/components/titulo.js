import React, { PureComponent } from "react";
import Fade from "react-reveal/Fade";
class Titulo extends PureComponent {
  render() {
    const l = {
      main: {
        fontSize: "2em",
        textAlign: "center",
      },
    };
    return (
      <div>
        <Fade delay={1000} duration={800} bottom>
          <h1 style={l.main}>{this.props.titulo}</h1>
        </Fade>
      </div>
    );
  }
}

export default Titulo;
