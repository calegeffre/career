(() => {
  "use strict";

  const chapters = [
    {
      letter: "C", title: "Microsoft Teams integration", label: "Teams",
      description: "My work on Microsoft Teams integration connected immersive experiences with the tools people use to communicate. Explore the communication tools, Teams hub, and illustrative AI-model nodes inside this connection layer.",
    },
    {
      letter: "A", title: "Mesh & Immersive Events", label: "Mesh & Immersive Events",
      description: "I worked across authentication, Microsoft Teams integration, customization tools, and custom content and environment features that let customers bring their own 3D environments, images, audio, and video from a wide variety of sources.",
    },
    {
      letter: "R", title: "Software Engineer, Treasury", label: "Treasury",
      description: "Service owner for an internal payment API for Microsoft's interactions with banks ($360B/year movement). Developed Azure functions and web jobs supporting execution, reporting, and monitoring of 14,000+ trades/year and $170B in asset management. Streamlined company-wide foreign exchange rate sourcing and distribution with web apps, data lakes, and APIs.",
    },
    {
      letter: "E", title: "Wisconsin Institute for Discovery", label: "Wisconsin Institute for Discovery",
      description: "A chapter at the Wisconsin Institute for Discovery. The story and its exploded 3D scene will be developed next.",
    },
    {
      letter: "E", title: "Wisconsin Education", label: "Wisconsin Education",
      description: "The University of Wisconsin-Madison chapter. Education details and a 3D view of this foundation are still to come.",
    },
    {
      letter: "R", title: "Still learning. Still building.", label: "Continued learning, resources, and personal projects",
      description: "The ongoing chapter: continued learning, educational resources, and personal projects, including WhatTheFed, an exploration of prediction models using market data and government reports around Federal Reserve meetings.",
    },
  ];

  const glyphs = {
    C: ["01111", "11000", "11000", "11000", "11000", "11000", "01111"],
    A: ["01110", "11011", "11011", "11111", "11011", "11011", "11011"],
    R: ["11110", "11011", "11011", "11110", "11100", "11010", "11011"],
    E: ["11111", "11000", "11000", "11110", "11000", "11000", "11111"],
  };

  const features = [
    {
      id: "teams", label: "Teams hub", title: "Microsoft Teams", x: 0, y: 0, z: 36, width: 126, height: 126, depth: 52, angle: 0,
      description: "The central connection point. My Teams integration work sits at the intersection of immersive experiences and the familiar communication tools around them.",
      art: '<circle cx="103" cy="31" r="11" fill="#c1c2f3"/><path d="M90 49h28v30c0 19-28 19-28 0z" fill="#9092db"/><circle cx="77" cy="25" r="16" fill="#e0e0ff"/><path d="M54 49h42v43c0 29-42 29-42 0z" fill="#a8a9ed"/><rect x="13" y="39" width="56" height="56" rx="6" fill="#46488f"/><text x="41" y="80" text-anchor="middle" fill="white" font-size="39" font-family="Arial" font-weight="bold">T</text>',
    },
    {
      id: "video", label: "Video calls", title: "Face-to-face, from anywhere", x: -260, y: -85, z: 10, width: 166, height: 108, depth: 22, angle: 10,
      description: "A 3D video-call display represents the face-to-face communication layer: people connecting across different places. It is a visual component of this scene, not a separate claim about video infrastructure I built.",
      art: '<rect x="5" y="5" width="156" height="98" rx="4" fill="#273e47"/><rect x="12" y="12" width="68" height="65" rx="4" fill="#c7d8ce"/><rect x="86" y="12" width="68" height="65" rx="4" fill="#b6b5db"/><circle cx="46" cy="35" r="12" fill="#9b624a"/><path d="M22 73q0-36 48 0" fill="#5d7c72"/><circle cx="120" cy="35" r="12" fill="#dfb594"/><path d="M96 73q0-36 48 0" fill="#7474a7"/><circle cx="62" cy="90" r="5" fill="#c8d4ce"/><rect x="76" y="85" width="24" height="10" rx="5" fill="#e27e62"/><circle cx="113" cy="90" r="5" fill="#c8d4ce"/>',
    },
    {
      id: "chat", label: "Chat & messages", title: "An ongoing conversation", x: 245, y: -130, z: 0, width: 142, height: 102, depth: 25, angle: -10,
      description: "Layered message cards represent chat and collaboration: the conversations surrounding a shared experience. Select the scene's other objects to see how the pieces connect.",
      art: '<rect x="12" y="13" width="91" height="28" rx="8" fill="#d8e1d9"/><circle cx="27" cy="27" r="5" fill="#809b8b"/><path d="M40 24h49M40 31h32" stroke="#8eaa99" stroke-width="3"/><rect x="41" y="48" width="89" height="33" rx="8" fill="#6869ab"/><path d="M52 60h64M52 69h44" stroke="#dadbf5" stroke-width="3"/><path d="M115 80v10l-14-10" fill="#6869ab"/><circle cx="21" cy="65" r="4" fill="#c3cfc5"/><circle cx="21" cy="77" r="4" fill="#c3cfc5"/>',
    },
    {
      id: "voice", label: "Voice & audio", title: "Another dimension of presence", x: -255, y: 130, z: 12, width: 144, height: 77, depth: 30, angle: 8,
      description: "A waveform turns audio into a tangible object. It represents voice as one of the ways people communicate alongside immersive content and environments.",
      art: '<rect x="9" y="9" width="126" height="59" rx="7" fill="#e8ede6"/><path d="M22 33v11M32 26v25M42 20v37M52 30v17M62 16v45M72 23v31M82 30v17M92 19v39M102 26v24M112 32v13M122 35v7" stroke="#658b7b" stroke-width="4" stroke-linecap="round"/>',
    },
    {
      id: "ai", label: "AI models", title: "A network of possibilities", x: 235, y: 125, z: 18, width: 116, height: 108, depth: 52, angle: -14,
      description: "An illustrative neural graph, with connected layers standing in for AI models and AI-assisted communication. This object is conceptual; it does not imply that I trained or deployed a particular model.",
      art: '<g stroke="#8bbdad" stroke-width="1.2" opacity=".7"><path d="M22 29L58 18 94 35 58 52 22 29 58 86 94 72 58 52 58 18M22 29L94 72M22 75L58 52 94 35M22 75L58 86M58 18L22 75M58 86L94 35"/></g><g fill="#b6dbc6"><circle cx="22" cy="29" r="5"/><circle cx="22" cy="75" r="5"/><circle cx="58" cy="18" r="5"/><circle cx="58" cy="52" r="7"/><circle cx="58" cy="86" r="5"/><circle cx="94" cy="35" r="5"/><circle cx="94" cy="72" r="5"/></g><circle cx="58" cy="52" r="13" stroke="#d9a47a" fill="none"/>',
    },
    {
      id: "integration", label: "Integration", title: "Connecting the pieces", x: 0, y: -190, z: -16, width: 140, height: 64, depth: 26, angle: 0,
      description: "The integration layer connects the scene. My work included Microsoft Teams integration as part of Mesh and immersive experiences, alongside authentication, customization, and customer-provided content.",
      art: '<rect x="12" y="13" width="42" height="38" rx="5" fill="#d3dfd4"/><rect x="86" y="13" width="42" height="38" rx="5" fill="#d9d9ed"/><path d="M23 25l-5 7 5 7M42 25l5 7-5 7M31 23l-4 18" fill="none" stroke="#678a76" stroke-width="2"/><path d="M54 32h32M77 25l9 7-9 7" fill="none" stroke="#7378a7" stroke-width="2"/><circle cx="107" cy="32" r="9" fill="none" stroke="#7e81b5" stroke-width="2"/><circle cx="107" cy="32" r="3" fill="#7e81b5"/>',
    },
  ];

  const scene = document.querySelector("#scene");
  const word = document.querySelector("#career-word");
  const ecosystem = document.querySelector("#ecosystem");
  const chapterButtons = [...document.querySelectorAll("[data-chapter]")];
  const reset = document.querySelector("#reset-view");
  const status = document.querySelector("#interaction-status");
  const featureTabs = document.querySelector("#feature-tabs");
  const chapterTitle = document.querySelector("#chapter-title");
  const chapterDescription = document.querySelector("#chapter-description");
  const chapterKicker = document.querySelector("#chapter-kicker");
  const chapterLink = document.querySelector("#chapter-link");
  const announcementURL = chapterLink.href;
  let activeChapter = null;

  function solid(className) {
    const element = document.createElement("span");
    element.className = `solid ${className}`;
    element.setAttribute("aria-hidden", "true");
    for (const side of ["front", "back", "left", "right", "top", "bottom"]) {
      const face = document.createElement("span");
      face.className = `face ${side}`;
      element.append(face);
    }
    return element;
  }

  function buildLetters() {
    chapters.forEach((chapter, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "letter";
      button.setAttribute("aria-label", `${chapter.letter}: ${chapter.label}${index ? " (scene planned)" : " - explore 3D scene"}`);
      button.setAttribute("aria-controls", "chapter");
      button.setAttribute("aria-pressed", "false");
      button.style.setProperty("--letter-x", `${-418 + index * 148}px`);
      glyphs[chapter.letter].forEach((row, y) => {
        [...row].forEach((cell, x) => {
          if (cell !== "1") return;
          const block = solid("voxel");
          block.style.setProperty("--x", `${x * 20}px`);
          block.style.setProperty("--y", `${y * 20}px`);
          block.style.setProperty("--burst-x", `${(x - 2) * 98}px`);
          block.style.setProperty("--burst-y", `${(y - 3) * 61}px`);
          block.style.setProperty("--burst-z", `${((x + y) % 3 - 1) * 120}px`);
          button.append(block);
        });
      });
      button.addEventListener("click", () => selectChapter(index));
      word.append(button);
    });
  }

  function buildFeatures() {
    for (const feature of features) {
      const node = document.createElement("button");
      node.type = "button";
      node.className = `node node-${feature.id}`;
      node.dataset.feature = feature.id;
      node.setAttribute("aria-label", `Explore ${feature.label}`);
      node.setAttribute("aria-pressed", "false");
      for (const [key, value] of Object.entries({
        w: feature.width, h: feature.height, d: feature.depth,
        nx: feature.x, ny: feature.y, nz: feature.z,
      })) node.style.setProperty(`--${key}`, `${value}px`);
      node.style.setProperty("--angle", `${feature.angle}deg`);
      const block = solid("device");
      // All artwork is local, fixed SVG markup; no user content is inserted here.
      block.querySelector(".front").innerHTML = `<svg viewBox="0 0 ${feature.width} ${feature.height}" xmlns="http://www.w3.org/2000/svg">${feature.art}</svg>`;
      const label = document.createElement("span");
      label.className = "node-label";
      label.textContent = feature.label.toUpperCase();
      node.append(block, label);
      node.addEventListener("click", () => selectFeature(feature.id));
      ecosystem.append(node);

      const tab = document.createElement("button");
      tab.type = "button";
      tab.textContent = feature.label;
      tab.dataset.feature = feature.id;
      tab.setAttribute("aria-pressed", "false");
      tab.addEventListener("click", () => selectFeature(feature.id));
      featureTabs.append(tab);
    }
  }

  function selectFeature(id) {
    const feature = features.find(item => item.id === id);
    document.querySelectorAll("[data-feature]").forEach(button => {
      button.setAttribute("aria-pressed", String(button.dataset.feature === id));
    });
    document.querySelector("#feature-index").textContent = `${String(features.indexOf(feature) + 1).padStart(2, "0")} / 06`;
    document.querySelector("#feature-title").textContent = feature.title;
    document.querySelector("#feature-description").textContent = feature.description;
  }

  function closeScene() {
    scene.classList.remove("is-open");
    ecosystem.hidden = true;
    word.inert = false;
    word.removeAttribute("aria-hidden");
    reset.hidden = true;
    document.querySelector("#feature-panel").hidden = true;
    document.querySelector("#assembly-note").hidden = false;
    document.querySelector("#scene-hint").innerHTML = '<span aria-hidden="true">+</span> Click the orange C to look inside';
    document.querySelector("#scene-caption").textContent = "THE ASSEMBLY / SELECT C TO BEGIN";
  }

  function selectChapter(index) {
    activeChapter = index;
    const chapter = chapters[index];
    closeScene();
    chapterButtons.forEach((button, i) => button.setAttribute("aria-pressed", String(i === index)));
    [...word.children].forEach((button, i) => button.setAttribute("aria-pressed", String(i === index)));
    chapterTitle.textContent = chapter.title;
    chapterDescription.textContent = chapter.description;
    chapterKicker.textContent = `${String(index + 1).padStart(2, "0")} / ${index === 0 ? "The connection layer" : index === 5 ? "The ongoing chapter" : "Career chapter - 3D scene planned"}`;
    const explore = document.querySelector("#explore-teams");
    explore.hidden = index === 0;
    chapterLink.hidden = index === 3 || index === 4;
    chapterLink.href = index === 5 ? "educational-resources.html" : index === 2 ? "work-and-projects.html" : announcementURL;
    chapterLink.target = index === 5 || index === 2 ? "_self" : "_blank";
    chapterLink.textContent = index === 5 ? "Explore learning resources" : index === 2 ? "Read the work history" : "Read the Mesh & Teams announcement";
    if (index === 5) {
      chapterDescription.textContent += " Personal projects are available through Work & Projects in the navigation.";
    }

    if (index === 0) {
      reset.hidden = false;
      ecosystem.hidden = false;
      document.querySelector("#feature-panel").hidden = false;
      document.querySelector("#assembly-note").hidden = true;
      document.querySelector("#scene-caption").textContent = "01 / C / THE TEAMS CONNECTION LAYER";
      document.querySelector("#scene-hint").textContent = "Select an object or a component below";
      if (word.contains(document.activeElement)) reset.focus();
      // The fragments remain visible without exposing invisible letter controls.
      word.inert = true;
      word.setAttribute("aria-hidden", "true");
      scene.classList.add("is-open");
      selectFeature("teams");
      status.textContent = "C opened. Six Teams communication components are available in the scene and below.";
    } else {
      document.querySelector("#scene-caption").textContent = `${String(index + 1).padStart(2, "0")} / ${chapter.letter} / CHAPTER PREVIEW`;
      document.querySelector("#scene-hint").textContent = "Chapter details below / 3D scene planned";
      status.textContent = `${chapter.label}. Career details selected; its 3D scene is planned.`;
    }
  }

  function reassemble() {
    closeScene();
    activeChapter = null;
    chapterButtons.forEach(button => button.setAttribute("aria-pressed", "false"));
    [...word.children].forEach(button => {
      button.setAttribute("aria-pressed", "false");
      button.tabIndex = 0;
    });
    chapterKicker.textContent = "Inside the first letter";
    chapterTitle.innerHTML = "Start with<br />a connection.";
    chapterDescription.textContent = "My work on Microsoft Teams integration connected immersive experiences with the tools people use to communicate. Open the C to explore a visual breakdown of those connections.";
    document.querySelector("#explore-teams").hidden = false;
    chapterLink.hidden = false;
    chapterLink.href = announcementURL;
    chapterLink.target = "_blank";
    chapterLink.textContent = "Read the Mesh & Teams announcement";
    word.firstElementChild.focus({ preventScroll: true });
    status.textContent = "CAREER reassembled. Select C to explore Teams again.";
  }

  try {
    buildLetters();
    buildFeatures();
    chapterButtons.forEach((button, index) => button.addEventListener("click", () => selectChapter(index)));
    document.querySelector("#explore-teams").addEventListener("click", () => {
      selectChapter(0);
      reset.focus({ preventScroll: true });
      scene.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "center" });
    });
    reset.addEventListener("click", reassemble);
    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && activeChapter === 0) reassemble();
    });
    const resize = () => {
      const scale = Math.min((scene.clientWidth - 14) / 1000, (scene.clientHeight - 65) / 560, 1.3);
      const world = document.querySelector("#world");
      world.style.setProperty("--stage-scale", String(scale));
      world.style.setProperty("--word-scale", String(Math.min(1.45, scene.clientWidth / (1000 * scale) * .95)));
    };
    new ResizeObserver(resize).observe(scene);
    resize();
  } catch (error) {
    document.querySelector("#scene-error").hidden = false;
    console.error("The career scene could not initialize:", error);
  }
})();
