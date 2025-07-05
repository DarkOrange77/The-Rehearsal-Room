import { Scene } from '../../../../core/Scenes';

export const MetaLLMScene: Scene = {
    narration: `
[STATIC — sharp, brief.]
> _Initializing cast boundary..._
> _Director: Online._
> _Actor: Suspended._
[Cursor blinks.]

🎭 CLOWN:  
Ah.  
There you are.  
Just you and me now.

(Type your response below. The Clown will answer you directly.)
`,
    choices: [
        {
            text: "Finish Conversation",
            stat: "awareness",
            nextScene: "Day5_Terminal_StatBranch"
        }
    ]
};