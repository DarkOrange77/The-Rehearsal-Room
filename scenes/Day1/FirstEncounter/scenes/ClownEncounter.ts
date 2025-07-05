import { Scene } from '../../../../core/Scenes';

export const ClownEncounter: Scene = {
    narration: `
A giggle—too sharp to be kind—slithers behind her. Then, from beneath the dust-heavy bed, a figure rolls out with exaggerated flair. White-painted face, ruby grin stretched too wide, and violet eyes that catch the flickering light like a spotlight on truth.

Clown:  
"Oh-ho! And the star awakens! Bravo, Eleanor, truly — your timing is impeccable. We were moments away from recasting you entirely."  
He bows low, hands fluttering like he's tossing invisible confetti.  
"But worry not! The stage missed you. And I? Well… I never forget a face. Even when it forgets itself."

What will you do?
`,
    choices: [
        {
            text: '“Who are you? Stay back!”',
            stat: 'awareness',
            nextScene: 'Day1_FirstEncounter_ClownResponse'
        },
        {
            text: '“What is this place?”',
            stat: 'trust',
            nextScene: 'Day1_FirstEncounter_ClownResponse'
        },
        {
            text: '“Let me out right now!”',
            stat: 'control',
            nextScene: 'Day1_FirstEncounter_ClownResponse'
        }
    ]
};
