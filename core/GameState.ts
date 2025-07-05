// Defines the structure of the game state and initializes it

export interface GameState {
    trustScore: number;
    controlScore: number;
    awarenessScore: number;
    currentScene: string;
}

export const gameState: GameState = {
    trustScore: 0,
    controlScore: 0,
    awarenessScore: 0,
    currentScene: "Day1_DollRoom_Intro"
};