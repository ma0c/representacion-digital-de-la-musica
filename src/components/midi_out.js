import React from 'react';
import Select from 'react-select'

const NOTE_ON = 0x90;
const NOTE_OFF = 0x80;

const MIDIOut = () => {
    const [midiInstance, setMIDIInstance] = React.useState(null);
    const [midiInputs, setMIDIInputs] = React.useState([]);
    const [midiOutputs, setMIDIOutputs] = React.useState([]);
    const [selectedMIDIOutput, setSelectedMIDIOutput] = React.useState(null);
    const [noteNumber, setNoteNumber] = React.useState(60);
    const [noteVelocity, setNoteVelocity] = React.useState(127);
    React.useEffect(() => {
        if (midiInstance) {
            const midiInputs = [];
            const midiOutputs = [];
            midiInstance.inputs.forEach((input) => {
                midiInputs.push(input);
            });
            midiInstance.outputs.forEach((output) => {
                midiOutputs.push(output);
            });
            setMIDIInputs(midiInputs);
            setMIDIOutputs(midiOutputs);
            }
    }, [midiInstance]);



    const requestMIDIAccess = () => {
        console.log("Requestiong midi");
        navigator.requestMIDIAccess()
        .then((midiInstance) => {
            setMIDIInstance(midiInstance);
        });
    };
    React.useEffect(() => requestMIDIAccess(), []);
    const playNote = () => {
        const selectedOutput = midiInstance.outputs.get(selectedMIDIOutput.value);
        selectedOutput.send([NOTE_ON, noteNumber, noteVelocity])
    };
    const stopNote = () => {
        const selectedOutput = midiInstance.outputs.get(selectedMIDIOutput.value);
        selectedOutput.send([NOTE_OFF, noteNumber, noteVelocity])
    };
    return (
        <div style={{display: "flex"}}>
            <input
                type="number"
                placeholder="Note number"
                value={noteNumber}
                onChange={event => setNoteNumber(event.target.value)}
                min={21}
                max={108}
            />
            <input
                type="number"
                placeholder="Note number"
                value={noteVelocity}
                onChange={event => setNoteVelocity(event.target.value)}
                min={0}
                max={127}
            />
            <div style={{width:200}}>
                <Select
                    options={midiOutputs.map(output => ({value: output.id, label: output.name}))} width={200}
                    value={selectedMIDIOutput}
                    onChange={value => setSelectedMIDIOutput(value)}
                />
            </div>
            <button onClick={playNote}>
            Play
          </button>
          <button onClick={stopNote}>
            Stop
          </button>
        </div>
    )
};

export default MIDIOut;
