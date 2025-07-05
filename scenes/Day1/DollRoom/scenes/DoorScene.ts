import { Scene } from '../../../../core/Scenes';

export const DoorScene: Scene = {
    narration: `
The door handle is colder than anything else in the room. She touches it—

FLASH.  
A floodlight bursts behind her eyes. Screeching static fills her ears. Her knees buckle.

_Eleanor (gasping):_  
"I... can’t leave. Not yet."

[Awareness +1]
`,
    choices: [
        {
            text: "Continue",
            stat: "awareness",
            nextScene: "Day1_DollRoom_FirstEncounter"
        }
    ]
};