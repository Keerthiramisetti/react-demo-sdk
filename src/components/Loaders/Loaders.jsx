import React from 'react';
import PropTypes from 'prop-types';
import './Loaders.css'; // Make sure to import the correct CSS file

// Vertical Bars Loader
export const VerticalBars = ({ color, size, speed }) => {
  return (
    <div id="vertical-loading-bars" style={{ width: size || '2em' }}>
      {[...Array(4)].map((_, index) => (
        <span
          key={index}
          style={{
            backgroundColor: color || '#789',
            animationDuration: speed || '1s',
          }}
        />
      ))}
    </div>
  );
};

// Newton's Cradle Loader
export const NewtonsCradle = ({ color, size, speed }) => {
  return (
    <div className="newtons-cradle" style={{ width: size || '4em' }}>
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          style={{
            backgroundColor: color || '#fc2f70',
            animationDuration: speed || '0.5s',
          }}
        />
      ))}
    </div>
  );
};

// Steady Spinner Loader
export const SteadySpinner = ({ color, size, speed }) => {
  return (
    <div
      id="steady-spinner"
      style={{
        borderTopColor: color || '#09e',
        width: size || '3em',
        height: size || '3em',
        animationDuration: speed || '1s',
      }}
    />
  );
};

// Classic Dots Loader
export const ClassicDots = ({ color, size, speed }) => {
  return (
    <div className="classic-dots" style={{ width: size || '3.5em' }}>
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          style={{
            backgroundColor: color || '#666',
            animationDuration: speed || '0.8s',
            animationDelay: `${-0.2 * index}s`,
          }}
        />
      ))}
    </div>
  );
};

// Catch-Up Spinner Loader
export const CatchUpSpinner = ({ color, size, speed }) => {
  return (
    <svg
      id="catchup-spinner"
      viewBox="25 25 50 50"
      style={{ width: size || '3.75em' }}
    >
      <circle
        cx="50"
        cy="50"
        r="20"
        style={{
          stroke: color || '#7c7',
          strokeWidth: '2',
          animationDuration: speed || '1.5s',
        }}
      />
    </svg>
  );
};

// Dot Grid Loader
export const DotGridLoader = ({ color, size, speed }) => {
  return (
    <div
      className="dot-grid-loader"
      style={{ width: size || '3em', height: size || '3em' }}
    >
      {[...Array(9)].map((_, index) => (
        <div
          key={index}
          style={{
            backgroundColor: color || 'purple',
            animationDuration: speed || '1.5s',
            animationDelay: `${0.25 * index}s`,
          }}
        />
      ))}
    </div>
  );
};

// Sci-Fi Loader
export const SciFiLoader = ({ color, size, speed }) => {
  return (
    <div className="sci-fi-loader" style={{ maxWidth: size || '3em' }}>
      <div
        className="outer"
        style={{
          borderTopColor: color || '#17c',
          borderRightColor: color || '#17c',
          animationDuration: speed || '2s',
        }}
      />
      <div
        className="middle"
        style={{
          borderTopColor: color || '#17c',
          borderRightColor: color || '#17c',
          animationDuration: speed || '1.75s',
        }}
      />
      <div
        className="inner"
        style={{
          borderTopColor: color || '#17c',
          borderRightColor: color || '#17c',
          animationDuration: speed || '1.5s',
        }}
      />
    </div>
  );
};

// horizontal bar loader
  export const HorizontalBarLoader = ({ color }) => (
    <div className="horizontal-bar">
      <span style={{ backgroundColor: color || '#4caf50' }} />
    </div>
  );

export const FadeLoader = ({ color = '#4caf50', size = '50px' }) => {
    return (
      <div className="circle-loader" style={{ width: size, height: size }}>
        <div className="bars-container">
          <div
            className="bar"
            style={{ backgroundColor: color }}
          />
          <div
            className="bar"
            style={{ backgroundColor: color }}
          />
          <div
            className="bar"
            style={{ backgroundColor: color }}
          />
          <div
            className="bar"
            style={{ backgroundColor: color }}
          />
        </div>
      </div>
    );
  };

  export const Spinner = ({ text = 'Loading' }) => {
    return (
      <div className="spinner">
        <div className="spinner-text">{text}</div> {/* Dynamic text here */}
        <div className="spinner-sector spinner-sector-red"></div>
        <div className="spinner-sector spinner-sector-blue"></div>
        <div className="spinner-sector spinner-sector-green"></div>
      </div>
    );
  };

/* PropTypes validation for each loader component (optional but recommended) */
VerticalBars.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  speed: PropTypes.string,
};

NewtonsCradle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  speed: PropTypes.string,
};

SteadySpinner.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  speed: PropTypes.string,
};

ClassicDots.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  speed: PropTypes.string,
};

CatchUpSpinner.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  speed: PropTypes.string,
};

DotGridLoader.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  speed: PropTypes.string,
};

SciFiLoader.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  speed: PropTypes.string,
};

HorizontalBarLoader.propTypes = {
    color: PropTypes.string,
  size: PropTypes.string,
  speed: PropTypes.string,
}

FadeLoader.propTypes = {
    color: PropTypes.string,
  size: PropTypes.string,
  speed: PropTypes.string,
}

Spinner.PropTypes = {
    color: PropTypes.string,
  size: PropTypes.string,
  speed: PropTypes.string,
}

/* Exporting all loaders in one object for easy import */
const Loaders = {
  VerticalBars,
  NewtonsCradle,
  SteadySpinner,
  ClassicDots,
  CatchUpSpinner,
  DotGridLoader,
  SciFiLoader,
  HorizontalBarLoader,
  FadeLoader,
  Spinner
};

export default Loaders;
