import { Scene } from '../../../../core/Scenes';

export const ScriptedPerformance: Scene = {
    narration: `
The lights rise gently. A string quartet plays softly from nowhere. The script is in her head — she doesn’t remember learning it, but every line is ready. Every gesture perfect.

The Clown appears beside her, arms folded behind his back like a proud director.

Clown (softly):  
"Go on, little star. They’re here for you."

She steps forward and speaks. Her voice is strong. Applause follows on cue — rhythmic, but empty.

The audience is still faceless, but their heads nod. She bows automatically. The Clown smiles, wider than he should be able to.

Eleanor (gently):  
"I thought I was choosing."

Clown (delighted):  
"You did! You chose to obey. Isn’t that freedom?"

She can’t answer. The spotlight dims. The curtain closes behind her — but she hears her own voice still speaking on stage, reciting the final monologue alone.

`,
    choices: [
        {
            text: "Continue",
            stat: "trust",
            nextScene: "Day5_Terminal_MetaScene"
        }
    ]
};

