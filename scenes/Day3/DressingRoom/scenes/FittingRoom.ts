import { Scene } from '../../../../core/Scenes';

export const FittingRoom: Scene = {
    narration: `
The Clown appears in the mirror, brushing her hair with soft, deliberate strokes — though he stands nowhere near her.

Clown:  
"Our leading lady. Look at you. Almost ready.  
The costume fits, doesn’t it? It was made for you. Tailored from the very first breath."

She notices her reflection wearing a corset, stage powder caked around her eyes. Her real body feels… looser. As if the strings were finally tugging gently.

The lights don’t flicker here. The mirror hums with applause. Someone is clapping. It might be her heart.

On the vanity, a single note appears in lipstick:  
"Say your lines, and they’ll love you forever."

She doesn’t remember writing it. But she believes it.
`,
    choices: [
        {
            text: "Continue",
            stat: "trust", // or whichever stat fits your narrative
            nextScene: "Day4_Stage_InitialStageScene"
        }
    ]
};