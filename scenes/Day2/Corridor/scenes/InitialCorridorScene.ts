import { Scene } from '../../../../core/Scenes';

export const InitialCorridorScene: Scene = {
    narration: `
The world has lengthened, narrowed — twisted itself into a corridor lined with doors. The air is too still, as if waiting. Somewhere, a metronome ticks, but she cannot find its source.

Her hand brushes the nearest door. Cold. Locked.

Then, a voice.

Clown (softly amused, from nowhere and everywhere):  
"You’re awake. How lovely. You don’t get to choose the roles, but you do get to walk on stage. Isn’t that a kindness?"

She rises. Every step she takes now begins to count.

**Which feeling pulls Eleanor forward?**
`,
    choices: [
        {
            text: 'Follow the Clown’s glow.',
            stat: 'trust',
            nextScene: 'Day2_Corridor_GuidedHallway'
        },
        {
            text: 'Force open the nearest locked door.',
            stat: 'control',
            nextScene: 'Day2_Corridor_UnstablePassage'
        },
        {
            text: 'Stop. Watch the ceiling blink back.',
            stat: 'awareness',
            nextScene: 'Day2_Corridor_SurveillanceHallway'
        }
    ]
};

