import React from 'react';

const TEXT_INDEX = 0;
const CSS_INDEX = 1;

export default class Index extends React.Component {

  constructor() {
    super()
    this.state = {
      cssChar: '',
      textChar: '',
      convertThis: '',
      type: TEXT_INDEX
    }
    this.convertCharacter = this.convertCharacter.bind(this);
    this.switchOrder = this.switchOrder.bind(this);
  }

  convertCharacter() {
    const isTextType = this.state.type === TEXT_INDEX;
    const convertThis = (isTextType) ? this.state.textChar : this.state.cssChar;

    if (isTextType) {
      this.setCssVal(convertThis);
    } else {
      this.setTextVal(convertThis);
    }
  }

  setTextVal(convertThis) {
    const charCode = convertThis.substring(1 , convertThis.length );
    let convertedVal = parseInt(charCode, 16);
    convertedVal = parseInt(convertedVal, 10);
    this.setState({
      textChar: String.fromCharCode(convertedVal)
    });
  }

  setCssVal(convertThis) {
    let convertedVal = convertThis.charCodeAt(0).toString(16);
    while(convertedVal.length < 4){
      convertedVal = '0' + convertedVal;
    }
    this.setState({
      cssChar: `\\${convertedVal}`
    });
  }


  updateInputValue(evt, type) {
    const prop = (this.state.type === TEXT_INDEX) ? 'textChar' : 'cssChar';
    const newVal = evt.target.value;
    this.setState({
      [prop]: newVal,
      type: type
    });
  }

  switchOrder() {
    const currentType = this.state.type;
    const newType = (currentType === TEXT_INDEX) ? CSS_INDEX : TEXT_INDEX;
    this.setState({
      type: newType
    })
  }

  render () {
    const textConverion = this.state.type === TEXT_INDEX;
    const textChar = this.state.textChar;
    const cssChar = this.state.cssChar;
    const order = textConverion ? 'text-2-css' : 'css-2-text';
    const converterClass = `converter ${order}`;
    return (
      <div className={converterClass}>
        <div className="field-group">
          <div className="input-fields">
            <div className="text-input-group in-group form-group">
              <label htmlFor="text-input">Character</label>
              <input
                type="text"
                className="form-control"
                id="text-input"
                disabled={!textConverion}
                value={this.state.textChar}
                onChange={evt => this.updateInputValue(evt, TEXT_INDEX)}
                ></input>
            </div>
            <div className="css-input-group in-group form-group -disabled">
              <label htmlFor="css-input">CSS character</label>
              <input
                type="text"
                className="form-control"
                id="css-input"
                disabled={textConverion}
                value={this.state.cssChar}
                onChange={evt => this.updateInputValue(evt, CSS_INDEX)}
                ></input>
            </div>
          </div>
          <div className="switch" onClick={this.switchOrder}></div>
        </div>
        <button onClick={this.convertCharacter}>Convert</button>
      </div>
    );
  }
}
