import React, { useEffect, useContext, useState } from "react";
import ReactSlider from 'react-slider'
import context from "../context";
import './oscillator.css'

const horizontalSliderStyles = {
  width: '100%',
  maxWidth: '500px',
  height: '50px',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'grey',
  borderImage: 'initial',
};

const Oscillator = (
    {
        initialFrequency = 100,
        type = "sine",
        minFrequency = 20,
        maxFrequency = 2000
    } = {}) => {
  const [oscillator, setOscillator] = useState(undefined);
  const [frequency, setFrequency] = useState(initialFrequency);

  const { audioContext } = useContext(context);

  const startOscillator = () => {
    const oscillator = audioContext.createOscillator();

    oscillator.frequency.value = frequency;
    oscillator.type = type;

    oscillator.start();
    oscillator.connect(audioContext.destination);

    setOscillator(oscillator);

  };

  const stopOscillator = () => {
    oscillator.stop();
      oscillator.disconnect();
  };

  useEffect(
    () => {
        if (oscillator) {
          oscillator.frequency.value = frequency;
        }
    },
    [frequency],
  ); // only trigger this effect when frequency changes

  return (
      <div style={
        {
          display: 'flex',
          flexDirection: 'row'
        }
      }>
        <div style={
          {
            width: '500px'
          }
        }
         >
          <ReactSlider
            className="horizontal-slider"
             thumbClassName="example-thumb"
              trackClassName="example-track"
            onChange={(value) => setFrequency(value)}
            value={frequency}
            renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
            min={minFrequency}
            max={maxFrequency}
          />
        </div>
        <button onClick={startOscillator}>
          Start
        </button>
        <button onClick={stopOscillator}>
          Stop
        </button>
      </div>
  );
};

export default Oscillator;
