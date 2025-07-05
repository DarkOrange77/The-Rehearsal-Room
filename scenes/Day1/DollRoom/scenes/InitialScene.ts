import { Scene } from '../../../../core/Scenes';

export const InitialScene: Scene = {
    narration: `
**[The screen fades in from black.]**  
**Ambient sound:** A warped music box playing something eerily cheerful.  
A dusty Victorian room with peeling floral wallpaper. Dolls lined on shelves. A cracked mirror. A locked door. Eleanor lies on a low mattress, surrounded by dim, flickering light.

There is no warning before the pain. It coils behind Eleanor’s eyes like a hot wire, sharp and electric — then vanishes, leaving only silence.  
No... not silence. Music. Childish. Sweet. Mocking.

She gasps, her breath catching on something thick in her throat. She sits up. Her arms ache. Her face feels stiff.

This is not her room.

_Eleanor (thinking):_  
"Where... where am I? It smells like... lacquer. Dust. Paint."

She looks around. Porcelain dolls watch her from every corner. The air is heavy with something old. Something wrong.

**What will you do?**
`,
    choices: [
        {
            text: 'Inspect the mirror',
            stat: 'awareness',
            nextScene: 'Day1_DollRoom_Mirror'
        },
        {
            text: 'Open the wardrobe',
            stat: 'control',
            nextScene: 'Day1_DollRoom_Wardrobe'
        },
        {
            text: 'Try the door',
            stat: 'awareness',
            nextScene: 'Day1_DollRoom_Door'
        }
    ]
};