import { Scene } from '../../../../core/Scenes';

export const ShatteredWardrobe: Scene = {
    narration: `
The mirror shows a version of Eleanor already in costume — but her mouth is stitched shut.

She tears open the script.

The lines are already highlighted. Her blocking already drawn. There are bloodstains where her name was signed at the bottom.

A thud. The wardrobe behind her cracks open on its own. Inside — dozens of mannequins in various failed costumes. Some missing arms. Some look like her.

Clown (from the wardrobe):  
"You wanted freedom? Make your own lines. Go ahead. We’ll wait."  
(pause)  
"But the audience gets... angry when you improvise."

Ink starts to drip from the ceiling. It stains her shoes, rises up her legs like rising water. The mannequins begin to move, their stitched mouths opening in silent screams.
`,
    choices: [
        {
            text: "Continue",
            stat: "control",
            nextScene: "Day4_Stage_InitialStageScene"
        }
    ]
};

