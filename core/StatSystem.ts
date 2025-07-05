// Handles stat updates for the game

import { gameState } from './GameState';

// Increments the specified stat by 1
export function incrementStat(stat: "trust" | "control" | "awareness") {
    if (stat === "trust") gameState.trustScore += 1;
    if (stat === "control") gameState.controlScore += 1;
    if (stat === "awareness") gameState.awarenessScore += 1;
}