import React, { useEffect, useContext, useState } from "react";
import context from "../context";

export default ({ frequency = 130, type = "sine" } = {}) => {
  const [oscillator, setOscillator] = useState(undefined);

  const { audioContext } = useContext(context);

  useEffect(() => {
    const oscillator = audioContext.createOscillator();

    oscillator.frequency.value = frequency;
    oscillator.type = type;

    oscillator.start();
    oscillator.connect(audioContext.destination);

    setOscillator(oscillator);

    return () => {
      oscillator.stop();
      oscillator.disconnect();
    };
  }, []);

  useEffect(
    () => {
        if (oscillator) {
          oscillator.frequency.value = frequency;
        }
    },
    [frequency],
  ); // only trigger this effect when frequency changes

  return null;
};
