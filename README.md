# Career, taking shape

An interactive personal portfolio built around a 3D block-letter **CAREER**.
Select the **C** to explode it into a Teams integration scene with a Teams hub,
video, chat, voice, integration, and illustrative AI-model nodes. Select an object
or its matching component button to explore it; use **Reassemble** or Escape to
return to the wordmark.

The chapter order is Teams, Mesh & Immersive Events, Treasury, Wisconsin Institute
for Discovery, Wisconsin Education, and continued learning/resources/personal
projects. Only C has an exploded scene in this first iteration; the other letters
show chapter previews. AI imagery is conceptual, not a claim of AI-model work.

## Preview

Open `index.html` in a browser, or serve this directory with
`python -m http.server 8000` and visit `http://localhost:8000`.
There are no build steps, external assets, runtime dependencies, or network
requests required for the scene. The block geometry uses CSS 3D transforms,
with local SVG artwork on the communication objects.

`career.css` contains the visual design, and `career.js` contains the geometry,
chapter data, and interaction. Component buttons provide a touch and keyboard
alternative to the 3D objects. Reduced-motion preferences disable transitions.
The existing `work-and-projects.html` and `educational-resources.html` pages
remain available through the navigation.

The GitHub repository is [calegeffre/career](https://github.com/calegeffre/career).
