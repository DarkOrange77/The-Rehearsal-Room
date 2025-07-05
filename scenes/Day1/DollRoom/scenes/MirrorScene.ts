import { Scene } from '../../../../core/Scenes';

export const MirrorScene: Scene = {
    narration: `
She stumbles to the mirror. For a moment, her reflection is slow to follow — then it smiles before she does.

Makeup, smeared and caked on her face. Painted lashes. A glossy doll’s mouth.  
But those are her eyes... aren’t they?

_Eleanor (whispers):_  
"That’s not me... That can’t be me."

A whisper behind her ear: "But it's who you were cast to be..."

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