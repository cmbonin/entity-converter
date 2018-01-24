import React from 'react';
import Converter from '../Converter/component';

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <header className="header">
          <div className="container">
            <div className="row">
              <h1>Entity converter</h1>
            </div>
          </div>
        </header>
        <main className="main-content">
          <div className="container">
            <div className="row">
              <Converter />
            </div>
          </div>
        </main>
      </div>
    );
  }
}
