import { Scene } from '../../../../core/Scenes';

export const UnstablePassage: Scene = {
    narration: `
She walks. A door looms. She reaches for the handle—SLAM. It shuts before she touches it. She runs. Another door. It, too, slams.

She turns. She’s back at the start.

Narration:  
The hallway resets, but her heartbeat does not. The air smells like hot copper. Every bulb above her blinks at a different rhythm. The floor trembles beneath her steps.

Eleanor (clenching fists):  
"No. I’m not some puppet. I make the rules now."

The moment she speaks, the world shivers.

A disembodied voice — hers, distorted — mutters:  
"You missed your cue. Again."

The Clown appears without motion. Just—there. Smiling, sad.

Clown (softly mocking):  
"Still so eager to direct your own tragedy? Mmm... admirable. But dangerous. You’ve seen what happens to improvisers."

He taps the ground with his cane. The floor ripples like oil.

Eleanor:  
"I’m not afraid."

Clown (leaning closer, tone darker):  
"No. But you’re not ready either."

The lights explode in a rain of sparks. The hallway shortens, coils tighter around her.

[+1 controlScore]
`,
    choices: [
        {
            text: "Continue",
            stat: "control",
            nextScene: "Day3_DressingRoom_InitialDressingRoomScene"
        }
    ]
};