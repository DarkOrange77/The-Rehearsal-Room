// Initialize stats
window.stats = { awareness: 0, control: 0, trust: 0 };
window.sceneHistory = [];
window.currentSceneKey = null;

document.addEventListener('DOMContentLoaded', function() {
  const bgm = document.getElementById('bgm');
  const muteBtn = document.getElementById('mute-bgm');
  const volSlider = document.getElementById('bgm-volume');

  muteBtn.onclick = function() {
    bgm.muted = !bgm.muted;
    muteBtn.textContent = bgm.muted ? "Unmute Music" : "Mute Music";
  };

  volSlider.oninput = function() {
    bgm.volume = parseFloat(this.value);
  };
});

function typewriterEffect(html, element, speed = 38) {
  element.innerHTML = '';
  let i = 0;
  let isTag = false;
  let tagBuffer = '';
  let output = '';

 

  function type() {
    if (i < html.length) {
      let char = html[i];
      if (char === '<') {
        isTag = true;
        tagBuffer = '<';
      } else if (char === '>' && isTag) {
        tagBuffer += '>';
        output += tagBuffer;
        isTag = false;
        tagBuffer = '';
      } else if (isTag) {
        tagBuffer += char;
      } else {
        output += char;
      }
      element.innerHTML = output + (isTag ? tagBuffer : '');
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

function typewriterOnScroll(elementId, message, speed = 38) {
  let triggered = false;
  function onScroll() {
    const el = document.getElementById(elementId);
    if (!el || triggered) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      triggered = true;
      typewriterEffect(message, el, speed);
      window.removeEventListener('scroll', onScroll);
    }
  }
  window.addEventListener('scroll', onScroll);
  // Also check immediately in case it's already in view
  onScroll();
}

function showEnding(title, text) {
  document.getElementById('ending-title').textContent = title;
  document.getElementById('ending-text').innerHTML = text;
  document.getElementById('ending-overlay').style.display = 'flex';
  document.getElementById('ending-restart').onclick = restartGame;
}

// Save progress to localStorage
function saveProgress() {
  localStorage.setItem('rr_currentScene', window.currentSceneKey);
  localStorage.setItem('rr_stats', JSON.stringify(window.stats));
  localStorage.setItem('rr_sceneHistory', JSON.stringify(window.sceneHistory));
}

// Load progress from localStorage
function loadProgress() {
  const savedScene = localStorage.getItem('rr_currentScene');
  const savedStats = localStorage.getItem('rr_stats');
  const savedHistory = localStorage.getItem('rr_sceneHistory');
  if (savedScene && window.scenes[savedScene]) {
    window.stats = savedStats ? JSON.parse(savedStats) : { awareness: 0, control: 0, trust: 0 };
    window.sceneHistory = savedHistory ? JSON.parse(savedHistory) : [];
    renderScene(savedScene);
    return true;
  }
  return false;
}

// Branching function for Clown Response
function goToClownResponse() {
  const stats = window.stats;
  if (
    stats.trust >= stats.awareness &&
    stats.trust >= stats.control
  ) {
    renderScene('Day1_FirstEncounter_ClownResponse_Trust');
  } else if (
    stats.awareness >= stats.trust &&
    stats.awareness >= stats.control
  ) {
    renderScene('Day1_FirstEncounter_ClownResponse_Awareness');
  } else {
    renderScene('Day1_FirstEncounter_ClownResponse_Control');
  }
}

// Meta AI Chat with 7-exchange limit
function renderMetaAIChat() {
  const dialogueBox = document.getElementById('vn-dialogue');
  const choicesDiv = document.getElementById('vn-choices');
  dialogueBox.innerHTML = `<span class="meta-cursor">></span> <span id="meta-clown-text">The Clown waits for your words...</span>`;
  choicesDiv.innerHTML = `
    <input id="meta-input" type="text" placeholder="Type your message..." style="width:60%">
    <button id="meta-send" class="meta-choice-btn">Send</button>
    <button id="meta-exit" class="meta-choice-btn">End Conversation</button>
  `;

  let messages = [
    { role: "system", content: "You are the Clown, a meta-aware, unsettling, theatrical entity who knows this is a game and addresses the player directly." }
  ];
  const exchangeLimit = 7;

  const metaInput = document.getElementById('meta-input');
metaInput.addEventListener('keydown', function(e) {
  if (e.key === "Enter") {
    document.getElementById('meta-send').click();
  }
});

  document.getElementById('meta-send').onclick = async () => {
    const input = document.getElementById('meta-input');
    const userMsg = input.value.trim();
    if (!userMsg) return;
    messages.push({ role: "user", content: userMsg });
    dialogueBox.innerHTML += `<br><b>You:</b> ${userMsg}`;
    input.value = '';
   
    // Count user messages (excluding system prompt)
    const userExchanges = messages.filter(m => m.role === "user").length;
    if (userExchanges >= exchangeLimit) {
      // Show final Clown message and end
      dialogueBox.innerHTML += `<br><b>Clown:</b> The stage empties, but your shadow lingers.<br>
Ink on your hands. Ghosts in the wings.<br>
The lights rise. The script waits. Director.<br>
Ready to pretend again?<br>
[Curtain falls]`;
      document.getElementById('meta-send').disabled = true;
      document.getElementById('meta-input').disabled = true;
      setTimeout(goToMetaEnding, 3500);
      saveProgress();
      return;
    }

    // Otherwise, continue as normal
    const res = await fetch('https://the-rehearsal-room.onrender.com/meta-chat' , {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages })
    });
    const data = await res.json();
    messages.push({ role: "assistant", content: data.clown_reply });
    dialogueBox.innerHTML += `<br><b>Clown:</b> ${data.clown_reply}`;
    dialogueBox.scrollTop = dialogueBox.scrollHeight;
    saveProgress();
  };

  document.getElementById('meta-exit').onclick = () => {
    goToMetaEnding();
    saveProgress();
  };
}

// Meta Ending Branch
function goToMetaEnding() {
  const stats = window.stats;
  if (stats.trust >= stats.awareness && stats.trust >= stats.control) {
    renderScene('Day5_Terminal_ForgivenessEnding');
  } else if (stats.control >= stats.trust && stats.control >= stats.awareness) {
    renderScene('Day5_Terminal_CollapseEnding');
  } else {
    renderScene('Day5_Terminal_CurtainTornEnding');
  }
  saveProgress();
}

// Optional: Add a restart function
function restartGame() {
  localStorage.removeItem('rr_currentScene');
  localStorage.removeItem('rr_stats');
  localStorage.removeItem('rr_sceneHistory');
  window.location.reload();
}

function renderScene(sceneKey, isBack = false) {
  // Handle overlays and special branches first
  if (sceneKey === "ShowForgivenessOverlay") {
    showEnding(
      "Forgiveness",
      "Not every ending needs a final line. Some need only the courage to be seen."
    );
    return;
  }

  if (sceneKey === "ShowCurtainTornOverlay") {
    showEnding(
      "Curtain Torn",
      "The show doesn’t end when the curtain falls.<br>It ends when the curtain is no longer believed in."
    );
    return;
  }

  if (sceneKey === "Meta_Silence_EndingBranch") {
    goToMetaEnding();
    return;
  }

  if (sceneKey === "Day5_Terminal_CollapseEnding") {
    setTimeout(() => {
      const collapseMsg = `<span style="color:#ffe066;">
THE REHEARSAL ROOM HAS ENCOUNTERED A FATAL ERROR.<br>
TRYING TO FIND A SCRIPT THAT STILL MAKES SENSE...<br>
...<br>
NO SCRIPT FOUND.<br>
“YOU GOT YOUR LAUGH. NOW GET OFF THE STAGE.”
</span>`;
      const el = document.getElementById('collapse-typewriter');
      if (el) typewriterEffect(collapseMsg, el, 38);
    }, 1200);
  }

  if (!isBack && window.currentSceneKey) {
    window.sceneHistory.push(window.currentSceneKey);
  }
  window.currentSceneKey = sceneKey;

  if (sceneKey === "Meta_AI_Chat") {
    renderMetaAIChat();
    saveProgress();
    return;
  }

  // --- Normal scene rendering ---
  const scene = window.scenes[sceneKey];
  if (!scene) {
    alert('Scene not found: ' + sceneKey);
    return;
  }
  // Set background and character images
  document.getElementById('vn-background').style.backgroundImage = `url('${scene.background}')`;
  document.getElementById('vn-character').style.backgroundImage = scene.character
    ? `url('${scene.character}')`
    : 'none';
  document.getElementById('vn-name').textContent = scene.name || '';
  document.getElementById('vn-dialogue').innerHTML = scene.dialogue || '';

  const boxColors = {
    'Day1Ini.jpg': 'rgba(30,30,80,0.85)',
    'Day1Mir.jpg': 'rgba(30,40,60,0.65)',
    'Day1Clownenc.jpg': 'rgba(35,36,45,0.72)',
    'Day1Door.jpg': 'rgba(20,18,22,0.78)',
    'Day1Wardrobe.jpg': 'rgba(28,30,36,0.80)',
    'ClownOp.jpg': 'rgba(18,24,48,0.72)',
    'ClownOp1.jpg': 'rgba(70,18,32,0.75)',
    'FadeOut.jpg': 'rgba(18,16,12,0.82)',
    'Day2initialC.jpg': 'rgba(60,44,24,0.78)',
    'Day2Eyecor.jpg': 'rgba(44,18,70,0.72)',
    'Day2GH.jpg': 'rgba(70,18,32,0.75)',
    'Day2Unstp.jpg': 'rgba(28,36,44,0.80)',
    'Day3Drestable.jpg': 'rgba(28,36,44,0.80)',
    'Day3ini.jpg': 'rgba(44,18,32,0.78)',
    'Day3Mi.jpg': 'rgba(30,60,60,0.72)',
    'Day3Manne.jpg': 'rgba(30,30,30,0.72)',
    'Day4ini.jpg': 'rgba(70,18,32,0.78)',
    'Day4RefMon.jpg': 'rgba(30,30,30,0.92)', // Increased opacity for readability
    'DayAU.jpg': 'rgba(30,30,30,0.92)',      // Increased opacity for meta/terminal
    'Day4lef.jpg': 'rgba(120,110,90,0.82)'
    // ...add more as needed
  };
  const bgFile = scene.background.split('/').pop();
  const boxColor = boxColors[bgFile] || 'rgba(30,30,80,0.85)';
  const dialogueBox = document.getElementById('vn-dialogue-box');
  dialogueBox.style.background = boxColor;

  // --- Meta UI override for Day 5/Meta scenes ---
  // Remove any previous meta class
  dialogueBox.classList.remove('meta-terminal-ui');
  // Add meta-terminal-ui class for Day 5 meta scenes
  if (
    sceneKey.startsWith('Day5_Terminal') ||
    sceneKey === 'Meta_AI_Chat' ||
    sceneKey === 'Meta_Silence'
  ) {
    dialogueBox.classList.add('meta-terminal-ui');
  }

  // Render choices
  const choicesDiv = document.getElementById('vn-choices');
  choicesDiv.innerHTML = '';
  if (scene.choices && scene.choices.length > 0) {
    scene.choices.forEach(choice => {
      const btn = document.createElement('button');
      btn.textContent = choice.text;
      // Use meta style for Day 5/Meta
      if (
        sceneKey.startsWith('Day5_Terminal') ||
        sceneKey === 'Meta_AI_Chat' ||
        sceneKey === 'Meta_Silence'
      ) {
        btn.classList.add('meta-choice-btn');
      }
      btn.onclick = () => {
        // Increment stat if present
        if (choice.stat && window.stats.hasOwnProperty(choice.stat)) {
          window.stats[choice.stat]++;
        }
        // Special branch for Clown Response
        if (choice.nextScene === 'ClownResponseBranch') {
          goToClownResponse();
        } else {
          renderScene(choice.nextScene);
        }
      };
      choicesDiv.appendChild(btn);
    });
  } else {
    // If no choices, clear choicesDiv (for endings)
    choicesDiv.innerHTML = '';
  }

  // Add Back button if possible
  if (window.sceneHistory.length > 0) {
    const backBtn = document.createElement('button');
    backBtn.textContent = "Back";
    // Use meta style for Day 5/Meta
    if (
      sceneKey.startsWith('Day5_Terminal') ||
      sceneKey === 'Meta_AI_Chat' ||
      sceneKey === 'Meta_Silence'
    ) {
      backBtn.classList.add('meta-choice-btn');
    }
    backBtn.onclick = () => {
      const prevScene = window.sceneHistory.pop();
      if (prevScene) renderScene(prevScene, true);
    };
    choicesDiv.appendChild(backBtn);
  }

  saveProgress();
}

// On load, restore progress or start new game
window.onload = function() {
  if (!loadProgress()) {
    window.stats = { awareness: 0, control: 0, trust: 0 };
    window.sceneHistory = [];
    renderScene('Day1_DollRoom_Initial');
  }
}
