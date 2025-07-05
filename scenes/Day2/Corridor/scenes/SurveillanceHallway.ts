import { Scene } from '../../../../core/Scenes';

export const SurveillanceHallway: Scene = {
    narration: `
She walks. The corridor is too quiet. Then she sees them — eyes. Slivered into the cracks of the walls, the hinges of the doors, beneath the lights. They blink. Slowly. Not all in unison.

Eleanor (to herself):  
"How long have they been there?"

Clown (from behind her ear, voice like velvet):  
"Oh, darling. Always. You’ve just gotten better at seeing."

She doesn’t turn. She won’t.

A door creaks open to her right — revealing only mirrors. Her reflection steps half a beat late.

Eleanor:  
"That’s not me."

Clown (suddenly close, inverted above her):  
"Not yet. But it’s one of your better roles. Shall we rehearse the lines together?"

He smiles upside-down. His hat doesn’t fall.

Eleanor (quiet, wary):  
"This isn’t the world. It’s a… set."

Clown (proud):  
"Ah! Awareness. A dangerous virtue. It makes the audience disappear."

[+1 awarenessScore]
`,
    choices: [
        {
            text: "Continue",
            stat: "awareness",
            nextScene: "Day3_DressingRoom_InitialDressingRoomScene"
        }
    ]
};

