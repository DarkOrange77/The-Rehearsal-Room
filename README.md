
# The Rehearsal Room 🎭

**The Rehearsal Room** is a branching psychological thriller visual novel set in an abandoned drama department. Navigate surreal AI theatre, trust and control dynamics, and confront memory, identity, and guilt—all under the Clown’s unsettling gaze.

---

## 🎮 Features

* Branching narrative with multiple endings
* Immersive sound and music (via [Suno.ai](https://suno.ai))
* Meta AI dialogue system with the Clown (Python Flask backend)
* Custom UI with typewriter effects, animated transitions, and stylized overlays

---

## 🗂️ Project Structure

```
the-rehearsal-room/
├── frontend/          # HTML, CSS, JS, character sprites, backgrounds
├── backend/           # Flask app for meta Clown chat
├── requirements.txt   # Python dependencies
└── README.md
```

---

## 🚀 How to Run

### 🔸 Frontend

1. Open `frontend/index.html` in your browser
   *or*
   Deploy the `frontend/` folder to GitHub Pages, Netlify, or any static host.

### 🔸 Backend (AI Clown Chat)

1. Install dependencies

   ```bash
   pip install -r requirements.txt
   ```

2. Run the Flask server

   ```bash
   flask run
   ```

> Make sure to enable CORS if frontend and backend are on different origins.

---

## ⚙️ Dependencies

* `flask`
* `flask-cors`
* `requests`
* `python-dotenv`

---

## 🎷 Soundtrack & Audio

Music generated using **[Suno.ai](https://suno.ai/)** for ambient tracks and emotional tension.

---

## 📝 Credits

* **Story, Design, and Direction** – Delora
* **Frontend & Narrative Flow** – HTML/CSS/JS
* **Meta Chat AI Backend** – Flask (Python)
* **Music & Atmosphere** – Suno.ai

---

## 🕳️ Final Note

> *"The play ends not in silence,
> but in the moment she no longer feared being seen."*

Welcome to *The Rehearsal Room*. The curtain never falls—only shifts.
