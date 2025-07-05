# Create main directory structure
$directories = @(
    "src/core",
    "src/scenes/SceneBase",
    "src/scenes/Day1/DollRoom/scenes",
    "src/scenes/Day1/DollRoom/variants",
    "src/scenes/Day1/FirstEncounter/scenes",
    "src/scenes/Day2/Corridor/scenes",
    "src/scenes/Day3/DressingRoom/scenes",
    "src/scenes/Day4/Stage/scenes",
    "src/scenes/Day5/Terminal/scenes",
    "src/characters",
    "src/dialogue/scripts",
    "src/frontend/styles",
    "src/frontend/scripts",
    "src/errors",
    "src/optimization",
    "src/endings/Forgiveness",
    "src/endings/Collapse",
    "src/endings/CurtainTorn",
    "assets/audio/ambient",
    "assets/audio/effects",
    "assets/images/backgrounds",
    "assets/images/characters/eleanor/variants",
    "assets/images/characters/clown/variants",
    "assets/fonts",
    "assets/effects",
    "assets/descriptions",
    "tests/core",
    "tests/scenes",
    "tests/errors",
    "tests/performance",
    "docs"
)

# Create directories
foreach ($dir in $directories) {
    New-Item -ItemType Directory -Path $dir -Force
}

# Create essential files
$files = @(
    "src/frontend/index.html",
    "src/frontend/styles/main.css",
    "src/frontend/styles/scenes.css",
    "src/frontend/styles/animations.css",
    "src/core/Engine.ts",
    "src/core/GameState.ts",
    "src/core/StatSystem.ts",
    "src/scenes/SceneBase/index.ts",
    "src/characters/Eleanor.ts",
    "src/characters/Clown.ts",
    "docs/API.md",
    "docs/SceneStructure.md",
    ".gitignore",
    "README.md"
)

foreach ($file in $files) {
    New-Item -ItemType File -Path $file -Force
}

# Create .gitignore content
$gitignoreContent = @"
node_modules/
dist/
.env
*.log
"@

Set-Content -Path ".gitignore" -Value $gitignoreContent

# Update package.json if it doesn't exist
if (!(Test-Path "package.json")) {
    $packageJsonContent = @"
{
  "name": "the-rehearsal-room",
  "version": "1.0.0",
  "description": "A psychological horror visual novel",
  "scripts": {
    "start": "tsc && node dist/main.js",
    "build": "tsc",
    "test": "jest",
    "dev": "ts-node-dev --respawn --transpile-only src/main.ts"
  },
  "author": "",
  "license": "ISC"
}
"@
    Set-Content -Path "package.json" -Value $packageJsonContent
}

Write-Host "Project structure created successfully!" -ForegroundColor Green
}