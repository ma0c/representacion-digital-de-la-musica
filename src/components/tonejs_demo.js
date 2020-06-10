import React from 'react';

import Tone from 'tone';

const ToneDemo = () => {
    const synth = new Tone.Synth().toMaster();
    const startPlayer = () => {
        synth.triggerAttackRelease('C4', '4n', '8n');
        synth.triggerAttackRelease('E4', '8n', Tone.Time('4n') + Tone.Time('8n'));
        synth.triggerAttackRelease('G4', '16n', '2n');
        synth.triggerAttackRelease('B4', '16n', Tone.Time('2n') + Tone.Time('8t'));
        synth.triggerAttackRelease('G4', '16', Tone.Time('2n') + Tone.Time('8t')*2);
        synth.triggerAttackRelease('E4', '2n', '0:3');
    };
    return (
        <div>
            <button onClick={startPlayer}>
                Start
          </button>
        </div>
    )
};

export default ToneDemo;
