import { Scene } from '../../../../core/Scenes';
import { gameState } from '../../../../core/GameState';

export function getClownResponseScene(): Scene {
    let narration: string;

    if (
        gameState.trustScore >= gameState.awarenessScore &&
        gameState.trustScore >= gameState.controlScore
    ) {
        narration = `
Clown (delighted):  
"Questions already? Delightful! You’ve always been the curious one, Eleanor. Welcome — once again — to The Rehearsal Room. We’ve got makeup to smear and masks to wear."
`;
    } else if (
        gameState.awarenessScore >= gameState.trustScore &&
        gameState.awarenessScore >= gameState.controlScore
    ) {
        narration = `
Clown (knowing):  
"That look in your eyes… déjà vu, isn’t it? But careful now — backstage thoughts like those tend to get edited out."
`;
    } else {
        narration = `
Clown (gentle):  
He halts mid-spin. Voice lowers, gentle.  
"Control. How charming. But don’t confuse the stage with the world, dear Eleanor… one always obeys the script."
`;
    }

    return {
        narration,
        choices: [
            {
                text: "Continue",
                stat: "trust", // or any stat, or "none" if you want no stat change
                nextScene: "Day1_FirstEncounter_FadeOut"
            }
        ]
    };
}
