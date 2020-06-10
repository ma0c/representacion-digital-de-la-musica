import React from 'react';

import { MIDIManager } from '../midiManager';

const NOTE_ON = 0x90;
const NOTE_OFF = 0x80;

const MIDIOut = () => {
    const midiManager = new MIDIManager();
    React.useEffect(() => midiManager.requestMIDIAccess(), []);
    return (
        <div>

        </div>
    )
};

export default MIDIOut;
