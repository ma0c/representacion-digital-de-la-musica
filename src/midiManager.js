const PREFERRED_MIDI_DEVICE_KEY = "preferred_midi_device";

export class MIDIManager {
    constructor(){
        this.midiInstance = null;
        this.midiInputs = [];
        this.midiOutputs = [];
    }

    populateMIDIDevices = () => {
        this.midiInputs = [];
        this.midiOutputs = [];
        this.midiInstance.inputs.forEach((input) => {
            this.midiInputs.push(input);
        });
        this.midiInstance.outputs.forEach((output) => {
            this.midiOutputs.push(output);
        });
    };


    requestMIDIAccess = () => {
        navigator.requestMIDIAccess()
        .then((midiInstance) => {
            this.midiInstance = midiInstance;
            this.populateMIDIDevices();
            this.midiInstance.onstatechange = () => {
                this.populateMIDIDevices();
            }
        });
    };

}


