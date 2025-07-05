import { Scene } from '../../../../core/Scenes';

export const WardrobeScene: Scene = {
    narration: `
She opens the wardrobe. The door creaks like a stage hinge. Inside — costumes. Props. Child-sized ballet slippers, crusted at the toes with something dark.

A single satin glove. A yellowing paper tag:

"Eleanor – Lead Performer"

_Eleanor (thinking):_  
"I don’t... remember performing. Did I? Was I made to?"

[Control +1]
`,
    choices: [
        {
            text: "Continue",
            stat: "control",
            nextScene: "Day1_DollRoom_FirstEncounter"
        }
    ]
};

