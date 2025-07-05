// Handles applying player choices and scene transitions

import { gameState } from './GameState';
import { incrementStat } from './StatSystem';

// Applies a player's choice: increments stat and moves to the next scene
export function applyChoice(stat: "trust" | "control" | "awareness", nextScene: string) {
    incrementStat(stat);
    gameState.currentScene = nextScene;
}