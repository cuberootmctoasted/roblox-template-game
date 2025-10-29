import Sift from "@rbxts/sift";

// where the definition for inputs are defined
// preferrably all client server communications are defined here
export interface Inputs {
    placeholder: true;
}

let inputs: Inputs = {
    placeholder: true,
};

// updating an input meaning that one input might override another, this is the function where the inputs should be overridden
function reconcileInputs() {}

export function updateInputs(callback: (inputs: Inputs) => void) {
    const newInputs = Sift.Dictionary.copy(inputs);
    callback(newInputs);
    inputs = newInputs;
    reconcileInputs();
}

export function getInputs() {
    return inputs as Readonly<Inputs>;
}
