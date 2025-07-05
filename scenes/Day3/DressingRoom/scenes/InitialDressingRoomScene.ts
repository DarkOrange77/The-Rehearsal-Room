import { Scene } from '../../../../core/Scenes';

export const InitialDressingRoomScene: Scene = {
    narration: `
The door slams shut behind her with the finality of a cue. Eleanor stumbles forward into a dimly lit dressing room — but the air feels warped, like she stepped into a painting still drying.

Vanity mirrors line the walls, but only one flickers with power. Dust veils the countertops. A cracked gramophone spins in the corner, repeating a broken lullaby:

"I know your name... I know your face... I wrote your part... in the empty space…"

She sees a single script on the lit vanity. Its cover reads:  
"Act III: Dress Rehearsal."  
Beneath it — a cracked hand mirror, still warm to the touch.

Eleanor reaches for an object. _But which one calls to her more?_
`,
    choices: [
        {
            text: 'Look deeply into the mirror',
            stat: 'awareness',
            nextScene: 'Day3_DressingRoom_ReflectionsTable'
        },
        {
            text: 'Open the script and read',
            stat: 'control',
            nextScene: 'Day3_DressingRoom_ShatteredWardrobe'
        },
        {
            text: 'Sit down and wait',
            stat: 'trust',
            nextScene: 'Day3_DressingRoom_FittingRoom'
        }
    ]
};

