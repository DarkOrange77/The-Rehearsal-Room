import { Scene } from '../../../../core/Scenes';

export const GuidedHallway: Scene = {
    narration: `
The corridor begins to respond. Lights ahead bloom to life, warm and golden. The ones behind her dim.

The Clown walks beside her, matching her stride. He's humming a song she doesn’t know — but she wants to hum along.

Clown (encouraging, delighted):  
"You're doing so well. Just follow me. Let the others watch."

As they walk, doors open softly. Each reveals a vacant, lit stage, waiting in silence. One door creaks open longer — brass plaque glinting:

"ELEANOR: Lead Performer."

She stops.

Eleanor (hesitant):  
"I thought this was... a rehearsal."

Clown (smiling with a tilt of the head):  
"Of course it is! But don’t you know? Every great rehearsal pretends it isn’t. That’s what makes it honest."

He bows slightly and gestures toward the next door.

Clown (gently):  
"Come along, dear Eleanor. The audience is watching. They love your stillness."

[+1 trustScore]
`,
    choices: [
        {
            text: "Continue",
            stat: "trust",
            nextScene: "Day3_DressingRoom_InitialDressingRoomScene"
        }
    ]
};