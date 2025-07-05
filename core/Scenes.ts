export interface SceneChoice {
    text: string;
    stat: "trust" | "control" | "awareness";
    nextScene: string;
}

export interface Scene {
    narration: string;
    choices: SceneChoice[];
}