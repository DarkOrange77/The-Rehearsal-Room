import { Scene } from '../../../../core/Scenes';

export const CurtainTornEnding: Scene = {
    narration: `
There is no stage. No spotlight. No Eleanor. Just code noise and paper fog.

The screen pulses dim gray and beige like a photocopied dream. The cursor blinks where a name used to be.

CLOWN (voice like static caught in velvet):  
I knew someone would look behind the curtain eventually.  
Most want applause. Some want blood. But you? You wanted the truth.

A final choice appears:
`,
    choices: [
        {
            text: "[TEAR THE SCRIPT]",
            stat: "awareness",
            nextScene: "Day5_Terminal_CurtainTornFinal"
        }
    ]
};