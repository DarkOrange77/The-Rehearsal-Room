import { Scene } from '../../../../core/Scenes';

export const ReflectedMonologue: Scene = {
    narration: `
Her first line echoes before she speaks it. Her lips move out of sync. The spotlight follows her, but it casts no shadow.

Mirrors appear on stage edges. Each one shows her at different times — laughing, crying, dead-eyed. The audience gasps, though no one moves.

From the rafters:  
Clown (disembodied):  
"You’re peeking behind the curtain now. Risky, isn’t it?"

She finds the broken mask again — it’s waiting on the floor. When she lifts it, the mirrors crack.

One reflection steps out. Another Eleanor. But this one’s made of porcelain and script paper.

Porcelain Eleanor:  
"You should’ve stayed in character."

They grapple — mirror against mirror. In the scuffle, Eleanor sees a script page flutter out of her doppelgänger’s sleeve. It reads:  
CHARACTER REFUSES TO OBEY. SYSTEM MUST RESET.

She blinks — and the audience is gone.

Clown (close now):  
"What a mess you’ve made."
`,
    choices: [
        {
            text: "Continue",
            stat: "awareness",
            nextScene: "Day5_Terminal_MetaScene"
        }
    ]
};

