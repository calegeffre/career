# Career, taking shape

An interactive personal portfolio built around a 3D block-letter **CAREER**.
Select the **C** to explode it into a Teams integration scene with a Teams hub,
video, chat, voice, integration, and illustrative AI-model nodes. Hover, focus,
or tap an object or its matching component button to open a bubble inside the
visualization. Bubbles contain Teams and Mesh career notes and metrics from the
resume; the objects illustrate related work rather than separate products built.
Click or tap to keep a bubble open, and use its close button or Escape to dismiss
it. Use **Reassemble**, or Escape with no bubble open, to return to the wordmark.

The chapter order is Teams, Mesh & Immersive Events, Treasury, Wisconsin Institute
for Discovery, Wisconsin Education, and continued learning/resources/personal
projects. Only C has an exploded scene in this first iteration; the other letters
show chapter previews. AI imagery represents AI integration, not model training.

## Preview

Open `index.html` in a browser, or serve this directory with
`python -m http.server 8000` and visit `http://localhost:8000`.
There are no build steps, external assets, runtime dependencies, or network
requests required for the scene. The block geometry uses CSS 3D transforms,
with local SVG artwork on the communication objects.

`career.css` contains the visual design, and `career.js` contains the geometry,
chapter data, and interaction. Component buttons provide a touch and keyboard
alternative to the 3D objects. Reduced-motion preferences disable transitions.
The Educational Resources page shares the career theme and includes 16
curated links across four categories, including Aced AI mock interviews.
Work & Projects, Educational Resources,
and a publicly hosted copy of `CaleGeffre_Resume_2026.pdf` are available through
the top navigation; the resume link does not depend on a private repository.

The GitHub repository is [calegeffre/career](https://github.com/calegeffre/career).
