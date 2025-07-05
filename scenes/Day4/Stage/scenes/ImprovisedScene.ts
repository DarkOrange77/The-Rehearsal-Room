import { Scene } from '../../../../core/Scenes';

export const ImprovisedScene: Scene = {
    narration: `
She tears up the invisible script. The spotlight flickers in disapproval. Eleanor takes a step forward — then sideways. Off the mark. Off cue.

Audience (low murmur):  
"Wrong. Wrong. Wrong."

A shape stirs in the back rows — too tall, too thin. The Clown is onstage now, but… he’s holding a director’s chair upside down.

Clown (strained):  
"Say the line, Eleanor. Say any line."

She refuses. Instead, she screams — not in fear, but to prove she can.

The audience twitches in unison. The shadows ripple. The stage floor tilts slightly, like the world is correcting itself.

She sees herself again — in the wings, watching with burning eyes. That version of her is mouthing the words she never said.

Clown (smiling grimly):  
"You broke the prompter. I hope you’re proud."
`,
    choices: [
        {
            text: "Continue",
            stat: "control", // or whichever stat fits your narrative
            nextScene: "Day5_Terminal_MetaScene"
        }
    ]
};