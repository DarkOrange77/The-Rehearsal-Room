import { Scene } from '../../../../core/Scenes';

export const ReflectionTable: Scene = {
    narration: `
The script is blank.

The mirror shows a different girl. Wearing Eleanor’s dress. Staring back. Blinking when Eleanor doesn’t.

The room is... too staged. The shadows are too symmetrical. The drawers too empty. She’s being shown something.

She finds another script, hidden behind the mirror — with her exact lines from Day 1. Even her hesitation. Even her thoughts.

Eleanor:  
"Someone is... recording me."

Clown (from inside the mirror):  
"Recording? No, no. You’re being remembered, Eleanor. That’s worse.  
Want to leave the stage? Fine. Just look behind the curtain."

She blinks.

When she opens her eyes again, her reflection is still looking at her — but her own face… is gone.
`,
    choices: [
        {
            text: "Continue",
            stat: "awareness",
            nextScene: "Day4_Stage_InitialStageScene"
        }
    ]
};