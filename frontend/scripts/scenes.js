window.scenes = {
  Day1_DollRoom_Initial: {
    background: 'Images/Day1Ini.jpg',
    character: '',
    name: 'Narrator',
    dialogue: `  
The strings of an eerie music, played by a rusty music box, sift through the air.

Dust hangs thick in a Victorian room where the wallpaper peels in faded, floral curls. Dolls line crooked shelves, their eyes glassy and patient. A cracked mirror leans slightly forward, catching slivers of dim light. The door is shut — locked. Eleanor lies on a low mattress, half in shadow, half in flickering gold.

There is no warning before the pain. It coils behind Eleanor’s eyes like a hot wire — sharp, electric — then vanishes, leaving only silence.

No... not silence.
Music.
Childish. Sweet. Mocking.

She gasps, breath catching on something thick in her throat. Her body aches. Her arms feel bruised. Her face... tight, as if it doesn’t quite fit.

This isn’t her room.

Eleanor (thinking):
“Where... where am I? It smells like... lacquer. Dust. Paint.”

She glances around. Porcelain dolls stare from every corner. The air is heavy with something old. Something wrong.

What should she do now?

`,
    choices: [
      { text: 'Inspect the mirror', nextScene: 'Day1_DollRoom_Mirror' },
      { text: 'Open the wardrobe', nextScene: 'Day1_DollRoom_Wardrobe' },
      { text: 'Try the door', nextScene: 'Day1_DollRoom_Door' }
    ]
  },

  Day1_DollRoom_Mirror: {
    background: 'Images/Day1Mir.jpg',
    character: '../../assets/images/characters/eleanor_mirror.png',
    name: 'Narrator',
    dialogue: `
    Eleanor stumbles toward the mirror.

For a moment, her reflection lags — just slightly — like a faulty film reel. And then… it smiles.
Before she does.

The face staring back is hers, but wrong.
Makeup, smeared and caked. Painted lashes. A glossy, perfect doll’s mouth stretched too wide.
But those are her eyes.

Aren’t they?

Eleanor (whispers):
“That’s not me... That can’t be me.”

A breath brushes the shell of her ear.

Voice (whispering):
“But it’s who you were cast to be…”

`,
     choices: [
  { text: 'Touch the mirror', nextScene: 'Day1_FirstEncounter_ClownEncounter' }
]
    
  },

  Day1_DollRoom_Door: {
    background: 'Images/Day1Door.jpg',
    character: '../../assets/images/characters/eleanor_neutral.png',
    name: 'Narrator',
    dialogue: `
The door handle is colder than anything else in the room.

She reaches for it—

FLASH.
Light detonates behind her eyes. A floodlight. White-hot. Blinding.
Screeching static drills through her skull.

Her knees buckle.

Eleanor (gasping):
“I... can’t leave. Not yet.”

`,
    choices: [
      {
        text: "Continue",
        stat: "awareness",
        nextScene: "Day1_FirstEncounter_ClownEncounter"
      }
    ]
  },

  Day1_DollRoom_Wardrobe: {
    background: 'Images/Day1Wardrobe.jpg',
    character: '../../assets/images/characters/eleanor_neutral.png',
    name: 'Narrator',
    dialogue: `
She opened the wardrobe. The door creaked — slow and theatrical, like a stage hinge resisting its cue.

Inside, a strange stillness. Costumes hung like slumped bodies. Child-sized ballet slippers, the satin at their toes stiffened with something dark. A single glove rested on the shelf, ivory satin, slightly yellowed.

Dangling from a fraying string, a paper tag swayed as if recently disturbed.

Eleanor – Lead Performer

She stared at it. The words felt distant, like a role written for someone else.

She didn’t remember performing.
Had she?

Somewhere beneath her ribs, a knot tightened — sharp, deliberate. She stood a little straighter.


`,
    choices: [
      {
        text: "Continue",
        stat: "control",
        nextScene: "Day1_FirstEncounter_ClownEncounter"
      }
    ]
  },

  Day1_FirstEncounter_ClownEncounter: {
    background: 'Images/Day1Clownenc.png',
    character: '../../assets/images/characters/clown.png',
    name: 'Narrator',
    dialogue: `
A giggle — too sharp to be kind — slithers behind her.
Then, from beneath the dust-heavy bed, something moves.

A figure rolls out with exaggerated flair, limbs unfolding in slow, theatrical precision. His face is painted bone-white, a ruby grin stretched too wide. Violet eyes catch the flickering light like a spotlight, too focused, too knowing.

He rises, sweeping into a low bow. Hands flutter, miming the toss of invisible confetti.

Clown:
“Oh-ho! And the star awakens! Bravo, Eleanor — truly, impeccable timing. We were moments away from recasting you entirely.”
He straightens, the grin never wavering.

“But worry not. The stage missed you. And I? Well…” He leans in, voice dipping to a velvet murmur. “I never forget a face. Even when it forgets itself.”

`,
    choices: [
      {
        text: '“Who are you? Stay back!”',
        stat: 'awareness',
        nextScene: 'ClownResponseBranch'
      },
      {
        text: '“What is this place?”',
        stat: 'trust',
        nextScene: 'ClownResponseBranch'
      },
      {
        text: '“Let me out right now!”',
        stat: 'control',
        nextScene: 'ClownResponseBranch'
      }
    ]
  },

  // Trust branch
  Day1_FirstEncounter_ClownResponse_Trust: {
    background: 'Images/ClownOp.jpg',
    character: '../../assets/images/characters/clown.png',
    name: 'Clown',
    dialogue: `
Clown (delighted):  
"Questions already? Delightful! You’ve always been the curious one, Eleanor. Welcome — once again — to The Rehearsal Room. We’ve got makeup to smear and masks to wear."

`,
    choices: [
      {
        text: "Continue",
        stat: "trust",
        nextScene: "Day1_FirstEncounter_FadeOut"
      }
    ]
  },

  // Awareness branch
  Day1_FirstEncounter_ClownResponse_Awareness: {
    background: 'Images/ClownOp.jpg',
    character: '../../assets/images/characters/clown.png',
    name: 'Clown',
    dialogue: `
Clown (knowing):  
"That look in your eyes… déjà vu, isn’t it? But careful now — backstage thoughts like those tend to get edited out."

`,
    choices: [
      {
        text: "Continue",
        stat: "awareness",
        nextScene: "Day1_FirstEncounter_FadeOut"
      }
    ]
  },

  // Control branch
  Day1_FirstEncounter_ClownResponse_Control: {
    background: 'Images/ClownOp1.jpg',
    character: '../../assets/images/characters/clown.png',
    name: 'Clown',
    dialogue: `
Clown (gentle):  
He halts mid-spin. Voice lowers, gentle.  
" How charming!! But don’t confuse the stage with the world, dear Eleanor… one always obeys the script."

`,
    choices: [
      {
        text: "Continue",
        stat: "control",
        nextScene: "Day1_FirstEncounter_FadeOut"
      }
    ]
  }
  // Add more scenes here as needed!
};

// Add this to your scenes.js

window.scenes.Day1_FirstEncounter_FadeOut = {
  background: 'Images/FadeOut.jpg', // Use a black or fade-out background if you have one
  character: '', // No character image for fade out
  name: '',
  dialogue: `
The overhead light flickers violently once. Then — the world stretches around her like melting set walls. As she takes a single step… the silence swallows everything.

[Only the music remains — slower now, off-key, like a lullaby played too late.] 

(Your choices have shaped Eleanor’s state of mind. They will affect the next chapter.)
`,
  choices: [
    {
      text: "Continue",
      stat: "trust", // or "awareness" or "control" as needed
      nextScene: "Day2_Corridor_InitialCorridorScene"
    }
  ]
};


// Add this to your scenes.js

window.scenes.Day2_Corridor_InitialCorridorScene = {
  background: 'Images/Day2initialC.jpg', // adjust path if needed
  character: '', // No character image, or set as needed
  name: 'Narrator',
  dialogue: `
The world had lengthened, narrowed — twisted itself into a corridor lined with doors. Each one the same: tall, too smooth, too silent. The air hung still, as if holding its breath. Somewhere, distant yet deliberate, a metronome ticked. Tick. Tick. But there was no telling where it came from. It might have been in her head.

Eleanor reached out, fingers brushing the nearest door. It was cold. Unmoving. Locked.

Then came a voice. Soft. Almost fond. But not kind.

“You’re awake. How lovely,” it said. “You don’t get to choose the roles, but you do get to walk on stage. Isn’t that... a kindness?”

The voice came from nowhere. From everywhere. It curled through the air like fog.

She rose slowly. The corridor did not move with her, but it felt alive — watching, listening. Each step she took pressed her further into its script. And somewhere beneath it all, something had begun counting. Not out loud. Just... keeping track.

Something was waiting to see which feeling would reach her first.

`,
  choices: [
    {
      text: 'Follow the Clown’s glow.',
      stat: 'trust',
      nextScene: 'Day2_Corridor_GuidedHallways'
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

// Add this to your scenes.js

window.scenes.Day2_Corridor_SurveillanceHallway = {
  background: 'Images/Day2Eyecor.jpg', // adjust path if needed
  character: '../../assets/images/characters/clown.png', // adjust path if needed
  name: 'Narrator',
  dialogue: `
She walks.

The corridor is too quiet. Too deliberate in its hush. Then she sees them — eyes. Slivered into the cracks of the walls, the seams of the doors, the flickering fixtures above. They blink slowly, each on their own rhythm. None in unison. None kind.

“How long have they been there?” she whispers.

A voice answers, velvet and close, too close — right behind her ear.

“Oh, darling. Always. You’ve just gotten better at seeing.”

She doesn’t turn. She won’t.

A door creaks open to her right. Inside: mirrors. Wall to wall. Endless and gleaming.

Her reflection steps a moment too late.

“That’s not me,” she breathes.

The Clown dangles down from the ceiling, inverted, smiling with too many teeth. His hat does not fall.

“Not yet. But it’s one of your better roles. Shall we rehearse the lines together?”

She takes a step back. The mirrors don’t.

“This isn’t the world,” she murmurs. “It’s a… set.”

“Ah!” The Clown beams, delighted. “Awareness. A dangerous virtue. It makes the audience disappear.”

`,
  choices: [
    {
      text: "Continue",
      stat: "awareness",
      nextScene: "Day3_DressingRoom_InitialDressingRoomScene"
    }
  ]
};

// Add this to your scenes.js

// Add this to your scenes.js

window.scenes.Day2_Corridor_GuidedHallways = {
  background: 'Images/Day2GH.jpg', // update path as needed
  character: 'assets/images/characters/clown.png',         // update path as needed
  name: 'Narrator',
  dialogue: `
The corridor begins to respond. Lights ahead bloom to life — warm, golden, too theatrical to be comforting. Behind her, the bulbs dim, one by one, like curtains falling in reverse.

The Clown walks beside her now. He does not announce his arrival. One moment she is alone; the next, he is keeping perfect pace, his polished shoes making no sound. He hums a tune. It is unfamiliar, sweet, off-key — and still, she finds herself wanting to hum along.

“You’re doing so well,” he says, his voice alight with joy. “Just follow me. Let the others watch.”

Doors open as they pass, slow and soft, like breath held too long. Each reveals a stage, empty but lit — quiet spaces dressed in expectation. Then, one creaks wider than the rest.

A brass plaque catches the light:

ELEANOR – Lead Performer

She stops.

“I thought this was… a rehearsal,” she says, the words dry in her mouth.

The Clown tilts his head, amused. “Of course it is. But don’t you know? Every great rehearsal pretends it isn’t. That’s what makes it honest.”

He bows with a flourish, hand sweeping low, then gestures toward the next door.

“Come along, dear Eleanor,” he murmurs, all velvet and teeth. “The audience is watching. They love your stillness.”
`,
  choices: [
    {
      text: "Continue",
      stat: "trust",
      nextScene: "Day3_DressingRoom_InitialDressingRoomScene"
    }
  ]
};

// Add this to your scenes.js

window.scenes.Day2_Corridor_UnstablePassage = {
  background: 'Images/Day2Unstp.jpg', // adjust path if needed
  character: '../../assets/images/characters/clown.png', // adjust path if needed
  name: 'Narrator',
  dialogue: `
She walks. A door looms. She reaches for the handle—SLAM. It shuts before she touches it. She runs. Another door. It, too, slams.

She turns. She’s back at the start.

The hallway resets, but her heartbeat does not. The air smells like hot copper. Every bulb above her blinks at a different rhythm. The floor trembles beneath her steps.

Eleanor (clenching fists):  
"No. I’m not some puppet. I make the rules now."

The moment she speaks, the world shivers.

A disembodied voice — hers, distorted — mutters:  
"You missed your cue. Again."

The Clown appears without motion. Just—there. Smiling, sad.

Clown (softly mocking):  
"Still so eager to direct your own tragedy? Mmm... admirable. But dangerous. You’ve seen what happens to improvisers."

He taps the ground with his cane. The floor ripples like oil.

Eleanor:  
"I’m not afraid."

Clown (leaning closer, tone darker):  
"No. But you’re not ready either."

The lights explode in a rain of sparks. The hallway shortens, coils tighter around her.

`,
  choices: [
    {
      text: "Continue",
      stat: "control",
      nextScene: "Day3_DressingRoom_InitialDressingRoomScene"
    }
  ]
};

// Add this to your scenes.js

window.scenes.Day3_DressingRoom_FittingRoom = {
  background: 'Images/Day3Drestable.jpg', // adjust path if needed
  character: '../../assets/images/characters/clown.png', // adjust path if needed
  name: 'Narrator',
  dialogue: `
The Clown appears in the mirror, his gloved hand brushing her hair in slow, deliberate strokes — though he stands nowhere near her. She does not feel it, yet her hair shifts, obedient.

“Our leading lady,” he murmurs, his smile widening just behind the glass. “Look at you. Almost ready. The costume fits, doesn’t it? It was made for you. Tailored from the very first breath.”

The mirror offers her another self. This one wears a corset laced too tightly, its stays biting inward. Stage powder cakes the skin beneath her eyes, chalky and pale. She looks taller. Stiffer. Composed. Her real body feels softer, looser — as though something had finally begun pulling the strings gently upward.

The lights in this room do not flicker. The mirror hums, deep and golden, like applause filtered through velvet curtains. Somewhere, someone is clapping. It might be her heart.

She turns to the vanity. A smear of red draws her gaze — lipstick, scrawled across the tarnished surface of a note she does not remember leaving.

Say your lines, and they’ll love you forever.

She doesn’t recall writing it. But she believes it.

`,
  choices: [
    {
      text: "Continue",
      stat: "trust", // or whichever stat fits your narrative
      nextScene: "Day4_Stage_InitialStageScene"
    }
  ]
};

// Add this to your scenes.js

window.scenes.Day3_DressingRoom_InitialDressingRoomScene = {
  background: 'Images/Day3ini.jpg', // adjust path if needed
  character: '', // No character image, or set as needed
  name: 'Narrator',
  dialogue: `
The door slams shut behind her with the finality of a cue. Eleanor staggers into a dimly lit dressing room — though the air feels warped, as if she’s stepped into a painting that hasn’t finished drying.

Vanity mirrors line the walls. Only one buzzes faintly with power, its light sputtering like a dying star. Dust clings to the countertops in soft, webbed layers. In the corner, a cracked gramophone turns — endlessly, tonelessly — whispering a warped lullaby:

"I know your name... I know your face... I wrote your part... in the empty space…"

On the single lit vanity sits a lone script, pristine against the grime. The cover reads:

"Act III: Dress Rehearsal."

Beside it lies a hand mirror, hairline cracks veining its surface like frost. It is warm.

Eleanor hesitates.

What should she do now? 
`,
  choices: [
    {
      text: 'Look deeply into the mirror',
      stat: 'awareness',
      nextScene: 'Day3_DressingRoom_ReflectionsTable'
    },
    {
      text: 'Open the script and read',
      stat: 'control',
      nextScene: 'Day3_DressingRoom_ShatteredWardrobe'
    },
    {
      text: 'Sit down and wait',
      stat: 'trust',
      nextScene: 'Day3_DressingRoom_FittingRoom'
    }
  ]
};

// Add this to your scenes.js

window.scenes.Day3_DressingRoom_ReflectionsTable = {
  background: 'Images/Day3Mi.jpg', // adjust path if needed
  character: '../../assets/images/characters/eleanor_mirror.png', // adjust path if needed
  name: 'Narrator',
  dialogue: `

Eleanor’s breath hitched as she caught a glimpse of her reflection.

But it wasn’t her.

The girl in the mirror wore Eleanor’s dress. Her posture, her frame — all nearly right. But the eyes blinked when Eleanor didn’t. The expression shifted before Eleanor moved. A second too early. A second too wrong.

The room around her felt false in a way that made her skin tighten. The shadows were too symmetrical, falling perfectly into corners as though placed by a designer. The drawers in the vanity gaped open — pristine, untouched, deliberately empty. Like a stage set dressed just enough to suggest life.

This wasn’t a place. It was a message.

Behind the mirror, her fingers brushed paper — brittle and curling at the corners. A script, hidden deliberately. She pulled it free, heart quickening as her eyes scanned the text.

Every line was hers. Not just what she’d said, but what she’d thought. The pauses, the hesitations. The quiet between breaths.

Someone had written her.

“Someone is recording me,” she whispered. The words tasted like rust.

The mirror pulsed. Then, the voice — smooth, close, far too pleased.

“Recording? No, no. You’re being remembered, Eleanor. That’s worse.
 Want to leave the stage? Fine. Just look behind the curtain.”

She blinked.

When she opened her eyes, her reflection was still watching her.

But the face looking back...
was no longer her own.

`,
  choices: [
    {
      text: "Continue",
      stat: "awareness",
      nextScene: "Day4_Stage_InitialStageScene"
    }
  ]
};

// Add this to your scenes.js

window.scenes.Day3_DressingRoom_ShatteredWardrobe = {
  background: 'Images/Day3Manne.jpg', // adjust path if needed
  character: '../../assets/images/characters/eleanor_neutral.png', // adjust path if needed
  name: 'Narrator',
  dialogue: `
  The mirror showed her again — but this version of Eleanor was already in costume. Same dress. Same posture. But her mouth was sewn shut with black, uneven thread, puckering the skin like a cruel seamstress’s joke.

Eleanor tore open the script.

The pages crackled. Her lines were already marked, the blocking sketched out in red. At the bottom, where her name should have been signed, a dark stain bloomed — old blood, dried into the paper like a promise. Or a curse.

Then came the sound. A low thud.

She spun. The wardrobe creaked open on its own, its hinges groaning like a reluctant stagehand. Inside: mannequins, slumped and stacked like failed attempts. Some wore tattered costumes. Some had no arms. A few had her face.

From inside the dark mouth of the wardrobe, a voice purred.

"You wanted freedom? Make your own lines. Go ahead. We’ll wait."

Silence stretched, taut and expectant.

"But the audience gets... angry when you improvise."

Ink began to fall from the ceiling.

Thick and black, it spattered against the floor, then stained her shoes. It rose, climbing her ankles, her calves — not liquid, not fast, but deliberate. Like it knew where to go.

Around her, the mannequins began to twitch. Fingers spasming. Heads tilting. Mouths once sealed now opened in unison — wide, silent screams echoing through the room with no sound at all.

And still, the ink rose.

`,
  choices: [
    {
      text: "Continue",
      stat: "control",
      nextScene: "Day4_Stage_InitialStageScene"
    }
  ]
};

// Add this to your scenes.js

window.scenes.Day4_Stage_ImprovisedScene = {
  background: 'Images/DayAU.jpg', // adjust path if needed
  character: '../../assets/images/characters/clown.png', // adjust path if needed
  name: 'Narrator',
  dialogue: `

She tore the invisible script in half.

There was no paper in her hands, but the gesture was real — defiant, final. The spotlight above her buzzed once, then flickered in disapproval, casting long, stuttering shadows across the stage.

Eleanor stepped forward.

Then sideways.

Off the mark. Off cue.

The murmurs began in the darkened seats — low, rustling discontent that sounded like insects under velvet.

> *"Wrong. Wrong. Wrong."*

Something shifted in the back row. A figure — too tall, too thin — began to rise.

Onstage now, the Clown appeared with abrupt theatricality, dragging an upside-down director’s chair like it weighed a thousand pounds.

He didn’t look amused.

> *“Say the line, Eleanor. Say any line.”*
> His voice cracked under the stage lights.

She didn’t.

Instead, she screamed.

Not in fear — but in refusal. Just to prove she still could.

The audience twitched in perfect unison. The velvet shadows behind them pulsed like lungs. The stage tilted, almost imperceptibly, as if the world itself were trying to re-center.

Then she saw her.

In the wings, watching — another Eleanor, eyes burning. That version of her mouthed the words she’d refused to say.

The Clown turned, smile strained, painted lips pulled too tight.

> *“You broke the prompter,”* he said softly. *“I hope you’re proud.”*

And the house lights began to dim.


`,
  choices: [
    {
      text: "Continue",
      stat: "control", // or whichever stat fits your narrative
      nextScene: "Day5_Terminal_MetaScene"
    }
  ]
};
// Add this to your scenes.js

window.scenes.Day4_Stage_InitialStageScene = {
  background: 'Images/Day4ini.jpg', // adjust path if needed
  character: '', // No character image, or set as needed
  name: 'Narrator',
  dialogue: `
The velvet darkness peeled back like stage cloth, and Eleanor found herself standing beneath a single, blinding spotlight.

She didn’t remember walking here.

The stage stretched out beneath her bare feet, polished wood groaning softly with every breath she took. Behind her: drawn curtains, heavy and crimson. Before her: a table on wheels, waiting in perfect stillness. And beyond the edge of the light — rows and rows of faceless silhouettes, sitting motionless in velvet seats. Watching.

She couldn’t see their eyes, but she felt them. Every single one.

A small, rolling table stood at arm’s length. Three objects rested upon it, spaced with the kind of care only a director would use.

She didn’t need to be told.
She could feel it. She may choose only one.

A lantern — flickering gently, as if remembering fire. It pulsed warmth with a heartbeat not her own.

A quill — black as ink and still wet at the tip. Her name was carved into the handle in looping cursive.

A broken mask — split neatly down the center. One side smooth, one side jagged. One eyehole painted over, as if it had seen too much.

Eleanor hesitated.

Then she reached out and took one.

The instant her fingers closed around the object, the spotlight flared. The curtains behind her groaned on their tracks and began to part — not quickly, not kindly. Like a wound reopening.

And somewhere in the darkness, applause began. Slow. Measured. Unnerving.

The scene had chosen her.
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

// Add this to your scenes.js

window.scenes.Day4_Stage_ReflectedMonologue = {
  background: 'Images/Day4RefMon.jpg', // adjust path if needed
  character: '../../assets/images/characters/eleanor_mirror.png', // adjust path if needed
  name: 'Narrator',
  dialogue: `
Her first line echoes before she speaks it. Her lips move out of sync. The spotlight follows her, but it casts no shadow.

Mirrors appear on stage edges. Each one shows her at different times — laughing, crying, dead-eyed. The audience gasps, though no one moves.

From the rafters:  
Clown (disembodied):  
"You’re peeking behind the curtain now. Risky, isn’t it?"

She finds the broken mask again — it’s waiting on the floor. When she lifts it, the mirrors crack.

One reflection steps out. Another Eleanor. But this one’s made of porcelain and script paper.

Porcelain Eleanor:  
"You should’ve stayed in character."

They grapple — mirror against mirror. In the scuffle, Eleanor sees a script page flutter out of her doppelgänger’s sleeve. It reads:  
CHARACTER REFUSES TO OBEY. SYSTEM MUST RESET.

She blinks — and the audience is gone.

Clown (close now):  
"What a mess you’ve made."

`,
  choices: [
    {
      text: "Continue",
      stat: "awareness",
      nextScene: "Day5_Terminal_MetaScene"
    }
  ]
};

// Add this to your scenes.js

window.scenes.Day4_Stage_ScriptedPerformance = {
  background: 'Images/Day4lef.jpg', // adjust path if needed
  character: '../../assets/images/characters/clown.png', // adjust path if needed
  name: 'Narrator',
  dialogue: `
The lights rise gently. A string quartet plays softly from nowhere. The script is in her head — she doesn’t remember learning it, but every line is ready. Every gesture perfect.

The Clown appears beside her, arms folded behind his back like a proud director.

Clown (softly):  
"Go on, little star. They’re here for you."

She steps forward and speaks. Her voice is strong. Applause follows on cue — rhythmic, but empty.

The audience is still faceless, but their heads nod. She bows automatically. The Clown smiles, wider than he should be able to.

Eleanor (gently):  
"I thought I was choosing."

Clown (delighted):  
"You did! You chose to obey. Isn’t that freedom?"

She can’t answer. The spotlight dims. The curtain closes behind her — but she hears her own voice still speaking on stage, reciting the final monologue alone.

`,
  choices: [
    {
      text: "Continue",
      stat: "trust",
      nextScene: "Day5_Terminal_MetaScene"
    }
  ]
};

window.scenes.Day5_Terminal_MetaScene = {
  background: '', // Black screen
  character: '',
  name: '',
  dialogue: `
[STATIC — sharp, brief.]
> _Initializing cast boundary..._
> _Director: Online._
> _Actor: Suspended._
[Cursor blinks.]

Clown:  
Ah.  
There you are.  
Just you and me now.

`,
  choices: [
    { text: "Talk to Him", nextScene: "Meta_AI_Chat" },
    { text: "Stay Silent", nextScene: "Meta_Silence" }
  ]
};

window.scenes.Meta_Silence = {
  background: '',
  character: '',
  name: 'Clown',
  dialogue: `Silence is a choice too.
  That’s where you put your signature, isn’t it?
  Very well.
  We’ll see if your quiet writes a better ending`,
  choices: [
    {
      text: "Continue",
      nextScene: "Meta_Silence_EndingBranch"
    }
  ]
};

// For scenes.js (JavaScript)
window.scenes.Day5_Terminal_CurtainTornEnding = {
  background: '', // Black or static background
  character: '',  // No character image
  name: '',
  dialogue: `
Eleanor is on stage. Alone.<br>
But this time — she’s not acting.<br>
She turns her head toward the audience her gaze focused somwhere oh so far away.<br>
Slowly.<br>
Deliberately.<br>
Like she’s looking at someone behind the screen.<br><br>

<b>ELEANOR (calm, certain):</b><br>
You’re not the first.<br>
But maybe you’ll be the last.<br>
I think I remember now…<br>
I never auditioned. I was cast.<br>
And you were in the front row the whole time.<br><br>
The walls begin to breathe — not metaphorically but dim gray and beige like a photocopied dream..<br>.
The Clown’s mask appears, split open, revealing...<br>
Nothing.<br>
Not horror.<br>
Not a twist.<br>
Just blank paper.<br><br>


<b>CLOWN (Disembodied):</b><br>
You see it now, don’t you?<br>
The world isn’t a stage.<br>
It’s the script we’re not supposed to read.<br>
So tear it.<br>
Go on.<br><br>

`,
  choices: [
    {
      text: "[TEAR THE SCRIPT]",
      stat: "awareness",
      nextScene: "Day5_Terminal_CurtainTornFinal"
    }
  ]
};

// Add this to your scenes.js

window.scenes.Day5_Terminal_CurtainTornFinal = {
  background: '', // Optionally set to a static/white noise image if you have one
  character: '',
  name: '',
  dialogue: `
The torn script floats down the dark abyss that now surrounds Eleanor <br><br>

She remembers now. And you’re not watching anymore.<br><br>

<span style="font-weight:bold;">[Your Ending : “CURTAIN TORN”]</span>



`,
  choices: [
    {
      text: "End",
      nextScene: "ShowCurtainTornOverlay"
    }
  ]
};

// Add this to your scenes.js

window.scenes.Day5_Terminal_ForgivenessEnding = {
  background: '', // Optionally set to a mirror room or white background
  character: '',
  name: '',
  dialogue: `
The curtain has fallen. But not with applause.<br>
Just the hush of something finally exhaling.<br><br>

Eleanor stands alone in the wings, the weight of stage makeup smudged beneath her eyes, her costume threadbare at the seams. The stage behind her is dim now—empty chairs, overturned props, a cracked spotlight that still twitches every few seconds like a dying firefly.<br><br>

She doesn’t look at the audience anymore.<br>
She looks inward.<br><br>

A door creaks behind her. Not grand. Not carved. Just a plain wooden one, as if plucked from a real home and dropped here like a mistake.<br><br>

She hesitates.<br>
Then she opens it.<br><br>

<br>
Its the Mirror<br>
Inside is a narrow dressing room.<br>
No velvet.<br>
No theatrical fog.<br>
Just harsh white light. A single chair. And a mirror.<br><br>

No trick or delay.<br>
No alternate reflection.<br>
It’s her.<br>
Hair mussed. Skin pale. Eyes—hers. For once.<br><br>

And yet...<br>
She doesn’t sit. Not yet.<br>
Because there’s one last thing to do.<br><br>

A note lies on the vanity. Plain paper. Folded twice. Written in pen, not ink.<br>
It’s her handwriting.<br><br>

“Thank you for letting me stop.”<br><br>

She finally sits.<br>
Not to perform.<br>
But to rest.<br><br>

She places the note down, carefully. Then wipes the makeup from her cheeks. The redness fades. The sharpness of the stage contour dulls. She becomes… softer. Warmer.<br>
Real.
`,
choices: [
    {
      text: "End",
      nextScene: "ShowForgivenessOverlay"
    }
  ]

};

window.scenes.Day5_Terminal_CollapseEnding = {
  background: '', // Optionally set to a dark or glitched background
  character: '',
  name: '',
  dialogue: `
There’s no music now. Just a low, buzzing hum, like an amp left on too long.<br><br>

Eleanor stands at center stage — but she’s wrong. Her smile loops between expressions. Her mouth twitches. She opens it to speak… and a scream comes out instead.<br><br>

In the rafters, the Clown watches. Head tilted. Silent. Until he begins to slow clap.<br><br>

<b>CLOWN:</b><br>
Bravo. Really.<br>
I hope you are sated.<br>
You poked the puppet until she cried.<br>
You broke the mirror just to count the shards.<br><br>

The lights go out, one by one — not dramatically. Just... awkwardly, like someone forgot how to end a scene.<br><br>
<span id="collapse-typewriter"></span>
<br>
<span style="font-weight:bold;">[Your ending : “Collapse Ending”]</span>
`,
  choices: []
};