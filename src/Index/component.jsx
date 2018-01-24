import React from 'react';
import Converter from '../Converter/component';

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <header className="header">
          <div className="container">
            <h1>Entity converter</h1>
          </div>
        </header>
        <main className="main-content">
          <div className="container">
            <Converter />
          </div>
        </main>
      </div>
    );
  }
}
