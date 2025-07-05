import { Scene } from '../../../../core/Scenes';

export const InitialStageScene: Scene = {
    narration: `
The velvet darkness lifts. Eleanor is standing on the center of a stage. The audience is a sea of faceless silhouettes. Curtains are closed behind her. A spotlight burns down from above. She doesn’t remember walking here.

A small, rolling table sits before Eleanor. Three props rest upon it — and instinctively, she knows she may choose only one.

Which one will it be?
-  Pick the Lantern — It flickers faintly. Feels warm to the touch. (+1 trust)
-  Pick the Quill — Its tip is still wet. Her name is written in ink on the handle. (+1 control)
-  Pick the Broken Mask — It’s cracked down the middle. One eyehole is blacked out. (+1 awareness)

She lifts the chosen object. The curtain creaks open behind her.
`,
    choices: [
        {
            text: 'Pick the Lantern',
            stat: 'trust',
            nextScene: 'Day4_Stage_ScriptedPerformance'
        },
        {
            text: 'Pick the Quill',
            stat: 'control',
            nextScene: 'Day4_Stage_ImprovisedScene'
        },
        {
            text: 'Pick the Broken Mask',
            stat: 'awareness',
            nextScene: 'Day4_Stage_ReflectedMonologue'
        }
    ]
};

