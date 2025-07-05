import { Scene } from '../../../../core/Scenes';

export const FadeOut: Scene = {
    narration: `
The overhead light flickers violently once. Then — the world stretches around her like melting set walls. As she takes a single step… the silence swallows everything.

*[Scene fades out. Only the music remains — slower now, off-key, like a lullaby played too late.]*

**[End of Day 1: The Doll Room]**  
(Your choices have shaped Eleanor’s state of mind. They will affect the next scene.)

[[Proceed to Day 2]]
`,
    choices: [
        {
            text: "Continue",
            stat: "trust", // or "awareness" or "control" or any stat you want, or "trust" as a default
            nextScene: "Day2_Corridor_InitialCorridorScene"
        }
    ]
};