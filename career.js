(() => {
  "use strict";

  const chapters = [
    {
      letter: "C", title: "Microsoft Teams integration", label: "Teams",
      description: "My work spans Teams Intelligent Experiences and Microsoft Mesh: meeting ingestion, AI-assisted customization, authentication, and immersive content. Open a component for the individual career stats and notes.",
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
      letter: "E", title: "University of Wisconsin", label: "University of Wisconsin",
      description: "The University of Wisconsin-Madison chapter. Explore Badgerloop's virtual-reality pod experience and the student engineering behind it.",
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

  const teamsFeatures = [
    {
      id: "teams", label: "Teams hub", title: "Microsoft Teams", x: 0, y: 0, z: 36, width: 126, height: 126, depth: 52, angle: 0,
      stat: "~75% fewer setup steps",
      description: "I shipped Teams UI for 3D environment customization across the Teams Immersive and Environment repos. Users and AI workflows can configure scenes directly from the Teams scheduling UI, enabling agent setup.",
      art: '<circle cx="103" cy="31" r="11" fill="#c1c2f3"/><path d="M90 49h28v30c0 19-28 19-28 0z" fill="#9092db"/><circle cx="77" cy="25" r="16" fill="#e0e0ff"/><path d="M54 49h42v43c0 29-42 29-42 0z" fill="#a8a9ed"/><rect x="13" y="39" width="56" height="56" rx="6" fill="#46488f"/><text x="41" y="80" text-anchor="middle" fill="white" font-size="39" font-family="Arial" font-weight="bold">T</text>',
    },
    {
      id: "video", label: "Video calls", title: "Face-to-face, from anywhere", x: -260, y: -85, z: 10, width: 166, height: 108, depth: 22, angle: 10,
      stat: "4 partner teams",
      description: "In Teams Intelligent Experiences, I architect a capability that ingests recorded meetings from wearable and handheld devices into structured content for customer-facing AI experiences. I own backend ingestion and attribution orchestration, moving from proof of concept toward production.",
      art: '<rect x="5" y="5" width="156" height="98" rx="4" fill="#273e47"/><rect x="12" y="12" width="68" height="65" rx="4" fill="#c7d8ce"/><rect x="86" y="12" width="68" height="65" rx="4" fill="#b6b5db"/><circle cx="46" cy="35" r="12" fill="#9b624a"/><path d="M22 73q0-36 48 0" fill="#5d7c72"/><circle cx="120" cy="35" r="12" fill="#dfb594"/><path d="M96 73q0-36 48 0" fill="#7474a7"/><circle cx="62" cy="90" r="5" fill="#c8d4ce"/><rect x="76" y="85" width="24" height="10" rx="5" fill="#e27e62"/><circle cx="113" cy="90" r="5" fill="#c8d4ce"/>',
    },
    {
      id: "chat", label: "Chat & messages", title: "An ongoing conversation", x: 245, y: -130, z: 0, width: 142, height: 102, depth: 25, angle: -10,
      stat: "50+ customer tenants",
      description: "I built bring-your-own-content workflows connecting environments, images, 3D models, and artifacts from OneDrive, SharePoint, and GitHub. Use cases include factory walkthroughs and persistent team command centers. The message cards illustrate this collaboration, not chat infrastructure I built.",
      art: '<rect x="12" y="13" width="91" height="28" rx="8" fill="#d8e1d9"/><circle cx="27" cy="27" r="5" fill="#809b8b"/><path d="M40 24h49M40 31h32" stroke="#8eaa99" stroke-width="3"/><rect x="41" y="48" width="89" height="33" rx="8" fill="#6869ab"/><path d="M52 60h64M52 69h44" stroke="#dadbf5" stroke-width="3"/><path d="M115 80v10l-14-10" fill="#6869ab"/><circle cx="21" cy="65" r="4" fill="#c3cfc5"/><circle cx="21" cy="77" r="4" fill="#c3cfc5"/>',
    },
    {
      id: "voice", label: "Voice & audio", title: "Another dimension of presence", x: -255, y: 130, z: 12, width: 144, height: 77, depth: 30, angle: 8,
      stat: "~50% less publish time",
      description: "Audio is one piece of an immersive experience. I owned first-party 3D environment publishing end-to-end with art and design, standardizing Unity development, deployment, and validation across web, Windows, and Meta Quest. The waveform is illustrative, not a claim of voice infrastructure work.",
      art: '<rect x="9" y="9" width="126" height="59" rx="7" fill="#e8ede6"/><path d="M22 33v11M32 26v25M42 20v37M52 30v17M62 16v45M72 23v31M82 30v17M92 19v39M102 26v24M112 32v13M122 35v7" stroke="#658b7b" stroke-width="4" stroke-linecap="round"/>',
    },
    {
      id: "ai", label: "AI models", title: "A network of possibilities", x: 235, y: 125, z: 18, width: 116, height: 108, depth: 52, angle: -14,
      stat: "~85% less customization time",
      description: "I led a team of 5 building MCP servers for Claude and GitHub Copilot, plus custom instructions for Teams Facilitator. The work won an internal innovation award and secured production funding. The graph represents AI integration, not model training.",
      art: '<g stroke="#8bbdad" stroke-width="1.2" opacity=".7"><path d="M22 29L58 18 94 35 58 52 22 29 58 86 94 72 58 52 58 18M22 29L94 72M22 75L58 52 94 35M22 75L58 86M58 18L22 75M58 86L94 35"/></g><g fill="#b6dbc6"><circle cx="22" cy="29" r="5"/><circle cx="22" cy="75" r="5"/><circle cx="58" cy="18" r="5"/><circle cx="58" cy="52" r="7"/><circle cx="58" cy="86" r="5"/><circle cx="94" cy="35" r="5"/><circle cx="94" cy="72" r="5"/></g><circle cx="58" cy="52" r="13" stroke="#d9a47a" fill="none"/>',
    },
    {
      id: "integration", label: "Integration", title: "Connecting the pieces", x: 0, y: -190, z: -16, width: 140, height: 64, depth: 26, angle: 0,
      stat: "500K+ monthly active users",
      description: "I architected React-based authentication across Avatars and Immersive Events, using telemetry-driven ring deployment to scale across 1,500+ tenants. Authentication and Teams integration connect the immersive experience to the tools people already use.",
      art: '<rect x="12" y="13" width="42" height="38" rx="5" fill="#d3dfd4"/><rect x="86" y="13" width="42" height="38" rx="5" fill="#d9d9ed"/><path d="M23 25l-5 7 5 7M42 25l5 7-5 7M31 23l-4 18" fill="none" stroke="#678a76" stroke-width="2"/><path d="M54 32h32M77 25l9 7-9 7" fill="none" stroke="#7378a7" stroke-width="2"/><circle cx="107" cy="32" r="9" fill="none" stroke="#7e81b5" stroke-width="2"/><circle cx="107" cy="32" r="3" fill="#7e81b5"/>',
    },
  ];

  const meshFeatures = [
    {
      id: "mesh", label: "Microsoft Mesh", title: "Microsoft Mesh",
      x: -210, y: -55, z: 32, width: 180, height: 135, depth: 34, angle: 8,
      href: "https://www.youtube.com/watch?v=_0InCXA13L8",
      videoId: "_0InCXA13L8",
      linkLabel: "Watch Microsoft Mesh on YouTube",
      image: "mesh-icon.png", imageAlt: "Microsoft Mesh purple sphere and ribbon icon",
      description: "Shared spaces, beyond a screen. My Mesh and Immersive Events work spanned authentication, Teams integration, customization tools, and customer-provided 3D environments and content. Watch the Microsoft Mesh video for a look at the experience.",
    },
    {
      id: "hololens", label: "HoloLens", title: "The mixed-reality connection",
      x: 210, y: -55, z: 20, width: 190, height: 120, depth: 38, angle: -10,
      href: "https://www.theverge.com/22308883/microsoft-mesh-virtual-reality-augmented-reality-hololens-vr-headsets-features",
      linkLabel: "Read the HoloLens story on The Verge",
      image: "mesh-hololens.png", imageAlt: "A HoloLens wearer collaborating with holographic people around a shared table",
      description: "HoloLens brings shared digital content into physical space. The Verge explores the early Mesh vision: collaborating with holograms and avatars in shared spaces, and what that could mean for the future of Teams meetings.",
    },
  ];

  const educationFeatures = [
    {
      id: "badgerloop", label: "Badgerloop", title: "Badgerloop: Virtual Reality",
      x: 0, y: -55, z: 30, width: 240, height: 124, depth: 34, angle: 0,
      href: "https://medium.com/@badgerloop/virtual-reality-8f73009cb1a8",
      linkLabel: "Read Virtual Reality by Badgerloop on Medium",
      image: "badgerloop-vr.png", imageAlt: "Badgerloop pod in a virtual environment with a VR headset and an interactive control panel",
      description: "Student engineering in a new dimension. Take a look at the Badgerloop pod in virtual reality, and read the team's story about the experience on Medium.",
    },
  ];

  const scenes = {
    0: { label: "Teams", caption: "THE TEAMS CONNECTION LAYER", features: teamsFeatures },
    1: {
      label: "Mesh & Immersive Events", caption: "MESH & IMMERSIVE EVENTS", features: meshFeatures,
      hint: "Hover to explore / select an icon to visit its story",
      note: "Mesh & Immersive Events. Hover or focus an icon for an image card; click to open its video or article. On touch, use a component button to preview its card.",
    },
    4: {
      label: "University of Wisconsin", caption: "UNIVERSITY OF WISCONSIN", features: educationFeatures,
      hint: "Hover to explore / select Badgerloop to read its story",
      note: "University of Wisconsin / Badgerloop. Hover or focus the tile for an image card; click to read the team's Virtual Reality article. On touch, use the Badgerloop button to preview its card.",
    },
  };

  const scene = document.querySelector("#scene");
  const word = document.querySelector("#career-word");
  const ecosystem = document.querySelector("#ecosystem");
  const chapterButtons = [...document.querySelectorAll("[data-chapter]")];
  const reset = document.querySelector("#reset-view");
  const status = document.querySelector("#interaction-status");
  const featurePanel = document.querySelector("#feature-panel");
  const sceneControls = new Map();
  const chapterTitle = document.querySelector("#chapter-title");
  const chapterDescription = document.querySelector("#chapter-description");
  const chapterKicker = document.querySelector("#chapter-kicker");
  const chapterLink = document.querySelector("#chapter-link");
  const announcementURL = chapterLink.href;
  const bubble = document.querySelector("#scene-bubble");
  const chapterDetail = document.querySelector("#chapter");
  const featureMedia = document.querySelector("#feature-media");
  const featureImage = document.querySelector("#feature-image");
  const featureImageLink = document.querySelector("#feature-image-link");
  const featurePlay = document.querySelector("#feature-play");
  const featureVideo = document.querySelector("#feature-video");
  const featureLink = document.querySelector("#feature-link");
  const teamsNote = document.querySelector("#scene-note").textContent;
  let features = [];
  let activeChapter = null;
  let activeFeature = null;
  let bubbleTrigger = null;
  let bubblePinned = false;
  let dismissingBubble = false;
  let dismissTimer;

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
      button.setAttribute("aria-label", `${chapter.letter}: ${chapter.label}${scenes[index] ? " - explore 3D scene" : " (scene planned)"}`);
      button.setAttribute("aria-controls", "scene chapter");
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
      button.addEventListener("click", () => toggleChapter(index, button));
      word.append(button);
    });
  }

  function buildSceneControls() {
    featurePanel.replaceChildren();
    for (const [index, chapterScene] of Object.entries(scenes)) {
      const panel = document.createElement("div");
      panel.className = "scene-controls";
      panel.inert = true;
      panel.setAttribute("aria-hidden", "true");
      const tabs = document.createElement("div");
      tabs.className = "feature-tabs";
      tabs.setAttribute("role", "group");
      tabs.setAttribute("aria-label", `${chapterScene.label} scene components`);
      for (const feature of chapterScene.features) {
        const tab = document.createElement("button");
        tab.type = "button";
        tab.textContent = feature.label;
        tab.dataset.feature = feature.id;
        tab.setAttribute("aria-pressed", "false");
        connectFeatureControl(tab, feature.id);
        tabs.append(tab);
      }
      const note = document.createElement("p");
      note.className = "illustration-note";
      note.textContent = chapterScene.note || teamsNote;
      panel.append(tabs, note);
      sceneControls.set(Number(index), panel);
      featurePanel.append(panel);
    }
  }

  function buildFeatures(chapterScene, index) {
    features = chapterScene.features;
    ecosystem.querySelectorAll(".node").forEach(node => node.remove());
    for (const [chapterIndex, panel] of sceneControls) {
      const selected = chapterIndex === index;
      panel.classList.toggle("is-active", selected);
      panel.inert = !selected;
      panel.setAttribute("aria-hidden", String(!selected));
      panel.querySelector(".feature-tabs").removeAttribute("id");
      panel.querySelector(".illustration-note").removeAttribute("id");
      if (selected) {
        panel.querySelector(".feature-tabs").id = "feature-tabs";
        panel.querySelector(".illustration-note").id = "scene-note";
      }
    }
    ecosystem.setAttribute("aria-label", `${chapterScene.label} scene`);
    ecosystem.querySelector(".connections path").setAttribute("d",
      features.map(feature => `M500 280 L${500 + feature.x} ${280 + feature.y}`).join(" "));
    for (const feature of features) {
      const node = document.createElement(feature.href ? "a" : "button");
      if (feature.href) {
        node.href = feature.href;
        node.target = "_blank";
        node.rel = "noopener";
      } else {
        node.type = "button";
        node.setAttribute("aria-pressed", "false");
      }
      node.className = `node node-${feature.id}`;
      node.dataset.feature = feature.id;
      node.setAttribute("aria-label", feature.linkLabel || `Explore ${feature.label}`);
      for (const [key, value] of Object.entries({
        w: feature.width, h: feature.height, d: feature.depth,
        nx: feature.x, ny: feature.y, nz: feature.z,
      })) node.style.setProperty(`--${key}`, `${value}px`);
      node.style.setProperty("--angle", `${feature.angle}deg`);
      const block = solid("device");
      if (feature.art) {
        // All artwork is local, fixed SVG markup; no user content is inserted here.
        block.querySelector(".front").innerHTML = `<svg viewBox="0 0 ${feature.width} ${feature.height}" xmlns="http://www.w3.org/2000/svg">${feature.art}</svg>`;
      } else {
        const image = document.createElement("img");
        image.src = feature.image;
        image.alt = "";
        block.querySelector(".front").append(image);
      }
      const label = document.createElement("span");
      label.className = "node-label";
      label.textContent = feature.label.toUpperCase();
      node.append(block, label);
      connectFeatureControl(node, feature.id);
      node.addEventListener("transitionend", positionBubble);
      ecosystem.append(node);
    }
  }

  function connectFeatureControl(control, id) {
    control.setAttribute("aria-controls", "scene-bubble");
    control.setAttribute("aria-expanded", "false");
    control.addEventListener("pointerenter", event => {
      if (event.pointerType !== "touch") selectFeature(id, control);
    });
    control.addEventListener("pointerleave", scheduleDismiss);
    control.addEventListener("focus", () => {
      if (!dismissingBubble) selectFeature(id, control);
    });
    control.addEventListener("blur", scheduleDismiss);
    control.addEventListener("click", () => selectFeature(id, control, true));
  }

  function positionBubble() {
    if (bubble.hidden || !activeFeature) return;
    const bounds = scene.getBoundingClientRect();
    const node = ecosystem.querySelector(`[data-feature="${activeFeature}"]`).getBoundingClientRect();
    bubble.style.maxHeight = "";
    const width = bubble.offsetWidth;
    let height = bubble.offsetHeight;
    const left = node.left - bounds.left;
    const right = node.right - bounds.left;
    const top = node.top - bounds.top;
    const bottom = node.bottom - bounds.top;
    const gap = 16;
    let x;
    let y;
    if (right + gap + width <= bounds.width - 12) {
      x = right + gap;
      y = (top + bottom - height) / 2;
    } else if (left - gap - width >= 12) {
      x = left - gap - width;
      y = (top + bottom - height) / 2;
    } else {
      x = (left + right - width) / 2;
      const above = top > bounds.height - bottom;
      const space = above ? top - gap - 12 : bounds.height - bottom - gap - 12;
      bubble.style.maxHeight = `${Math.max(1, space)}px`;
      height = bubble.offsetHeight;
      y = above ? top - gap - height : bottom + gap;
    }
    bubble.style.left = `${Math.max(12, Math.min(x, scene.clientWidth - width - 12))}px`;
    bubble.style.top = `${Math.max(12, Math.min(y, scene.clientHeight - height - 12))}px`;
  }

  function selectFeature(id, trigger, pinned = false) {
    clearTimeout(dismissTimer);
    if (!scenes[activeChapter]) return;
    const feature = features.find(item => item.id === id);
    if (activeFeature !== id) {
      stopVideo();
      bubble.scrollTop = 0;
    }
    bubblePinned = pinned || (activeFeature === id && bubblePinned);
    activeFeature = id;
    bubbleTrigger = trigger;
    document.querySelectorAll("[data-feature]").forEach(button => {
      const selected = button.dataset.feature === id;
      if (button.tagName === "BUTTON") button.setAttribute("aria-pressed", String(selected));
      button.setAttribute("aria-expanded", String(selected));
      if (selected) button.setAttribute("aria-describedby", feature.stat ? "feature-stat feature-description" : "feature-description");
      else button.removeAttribute("aria-describedby");
    });
    document.querySelector("#feature-index").textContent = `${String(features.indexOf(feature) + 1).padStart(2, "0")} / ${feature.label.toUpperCase()}`;
    document.querySelector("#feature-stat").hidden = !feature.stat;
    document.querySelector("#feature-stat").textContent = feature.stat || "";
    document.querySelector("#feature-title").textContent = feature.title;
    document.querySelector("#feature-description").textContent = feature.description;
    featureLink.href = feature.href || "CaleGeffre_Resume_2026.pdf";
    featureLink.textContent = `${feature.linkLabel || "More in my resume"} \u2197`;
    featurePlay.hidden = !feature.videoId || !featureVideo.hidden;
    featureMedia.hidden = !feature.image;
    if (feature.image) {
      featureImage.src = feature.image;
      featureImage.alt = feature.imageAlt;
      featureImageLink.href = feature.href;
      featureImageLink.inert = Boolean(feature.videoId);
    }
    bubble.hidden = false;
    positionBubble();
  }

  function playVideo() {
    const feature = features.find(item => item.id === activeFeature);
    if (!feature?.videoId) return;
    clearTimeout(dismissTimer);
    bubblePinned = true;
    const player = document.createElement("iframe");
    player.title = `${feature.title} video player`;
    player.src = `https://www.youtube-nocookie.com/embed/${feature.videoId}?autoplay=1&playsinline=1&rel=0`;
    player.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
    player.allowFullscreen = true;
    player.referrerPolicy = "strict-origin-when-cross-origin";
    featureVideo.replaceChildren(player);
    featureVideo.hidden = false;
    featurePlay.hidden = true;
    bubble.classList.add("is-playing");
    positionBubble();
    player.focus({ preventScroll: true });
    featureVideo.scrollIntoView({ block: "nearest" });
    status.textContent = "Microsoft Mesh video player opened inside the card. If playback is unavailable, use the Watch on YouTube link.";
  }

  function stopVideo() {
    featureVideo.replaceChildren();
    featureVideo.hidden = true;
    bubble.classList.remove("is-playing");
  }

  function hideBubble() {
    clearTimeout(dismissTimer);
    if (bubble.contains(document.activeElement) && bubbleTrigger) {
      dismissingBubble = true;
      bubbleTrigger.focus({ preventScroll: true });
      dismissingBubble = false;
    }
    stopVideo();
    bubble.hidden = true;
    activeFeature = null;
    bubblePinned = false;
    document.querySelectorAll("[data-feature]").forEach(button => {
      if (button.tagName === "BUTTON") button.setAttribute("aria-pressed", "false");
      button.setAttribute("aria-expanded", "false");
      button.removeAttribute("aria-describedby");
    });
  }

  function scheduleDismiss() {
    clearTimeout(dismissTimer);
    dismissTimer = setTimeout(() => {
      const focused = document.activeElement;
      if (!bubblePinned && !bubble.matches(":hover") && !bubble.contains(focused) &&
          !focused.matches("[data-feature]") && !document.querySelector("[data-feature]:hover")) hideBubble();
    }, 180);
  }

  function closeScene() {
    hideBubble();
    chapterDetail.hidden = false;
    document.querySelector(".skip-link").href = "#chapter";
    document.querySelector(".skip-link").textContent = "Skip to career details";
    scene.classList.remove("is-open");
    [...word.children].forEach(letter => letter.classList.remove("is-exploded"));
    ecosystem.hidden = true;
    word.inert = false;
    word.removeAttribute("aria-hidden");
    reset.hidden = true;
    featurePanel.classList.remove("is-active");
    featurePanel.inert = true;
    featurePanel.setAttribute("aria-hidden", "true");
    document.querySelector("#assembly-note").hidden = false;
    document.querySelector("#scene-hint").innerHTML = '<span aria-hidden="true">+</span> Explore C, A, or the second E';
    document.querySelector("#scene-caption").textContent = "THE ASSEMBLY / SELECT C, A OR SECOND E";
  }

  function toggleChapter(index, control) {
    if (activeChapter === index) {
      reassemble();
      control.focus({ preventScroll: true });
    } else {
      selectChapter(index);
    }
  }

  function selectChapter(index) {
    activeChapter = index;
    const chapter = chapters[index];
    const chapterScene = scenes[index];
    closeScene();
    chapterButtons.forEach((button, i) => button.setAttribute("aria-pressed", String(i === index)));
    [...word.children].forEach((button, i) => button.setAttribute("aria-pressed", String(i === index)));
    chapterTitle.textContent = chapter.title;
    chapterDescription.textContent = chapter.description;
    chapterKicker.textContent = `${String(index + 1).padStart(2, "0")} / ${index === 0 ? "The connection layer" : index === 5 ? "The ongoing chapter" : "Career chapter - 3D scene planned"}`;
    const explore = document.querySelector("#explore-teams");
    explore.hidden = Boolean(chapterScene);
    chapterLink.hidden = index === 3 || index === 4;
    chapterLink.href = index === 5 ? "educational-resources.html" : index === 2 ? "work-and-projects.html" : announcementURL;
    chapterLink.target = index === 5 || index === 2 ? "_self" : "_blank";
    chapterLink.textContent = index === 5 ? "Explore learning resources" : index === 2 ? "Read the work history" : "Read the Mesh & Teams announcement";
    if (index === 5) {
      chapterDescription.textContent += " Personal projects are available through Work & Projects in the navigation.";
    }

    if (chapterScene) {
      buildFeatures(chapterScene, index);
      reset.hidden = false;
      if (chapterDetail.contains(document.activeElement)) reset.focus({ preventScroll: true });
      chapterDetail.hidden = true;
      document.querySelector(".skip-link").href = "#scene";
      document.querySelector(".skip-link").textContent = `Skip to ${chapterScene.label} visualization`;
      ecosystem.hidden = false;
      featurePanel.classList.add("is-active");
      featurePanel.inert = false;
      featurePanel.setAttribute("aria-hidden", "false");
      document.querySelector("#assembly-note").hidden = true;
      document.querySelector("#scene-caption").textContent = `${String(index + 1).padStart(2, "0")} / ${chapter.letter} / ${chapterScene.caption}`;
      document.querySelector("#scene-hint").textContent = chapterScene.hint || "Hover, focus, or tap a component to look inside";
      if (word.contains(document.activeElement)) reset.focus();
      // The fragments remain visible without exposing invisible letter controls.
      word.inert = true;
      word.setAttribute("aria-hidden", "true");
      word.children[index].classList.add("is-exploded");
      scene.classList.add("is-open");
      status.textContent = `${chapter.letter} opened. ${features.length} ${chapterScene.label} components are available. Hover, focus, or use the component buttons to explore their cards inside the scene.`;
    } else {
      document.querySelector("#scene-caption").textContent = `${String(index + 1).padStart(2, "0")} / ${chapter.letter} / CHAPTER PREVIEW`;
      document.querySelector("#scene-hint").textContent = "Chapter details below / 3D scene planned";
      status.textContent = `${chapter.label}. Career details selected; its 3D scene is planned.`;
    }
  }

  function reassemble() {
    const previousChapter = activeChapter;
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
    (word.children[previousChapter] || word.firstElementChild).focus({ preventScroll: true });
    status.textContent = "CAREER reassembled. Select C for Teams, A for Mesh & Immersive Events, or the second E for University of Wisconsin.";
  }

  try {
    buildSceneControls();
    buildLetters();
    chapterButtons.forEach((button, index) => button.addEventListener("click", () => toggleChapter(index, button)));
    document.querySelector("#explore-teams").addEventListener("click", () => {
      selectChapter(0);
      reset.focus({ preventScroll: true });
      scene.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "center" });
    });
    reset.addEventListener("click", reassemble);
    document.querySelector("#close-bubble").addEventListener("click", hideBubble);
    featurePlay.addEventListener("click", playVideo);
    bubble.addEventListener("pointerenter", () => clearTimeout(dismissTimer));
    bubble.addEventListener("pointerleave", scheduleDismiss);
    bubble.addEventListener("focusout", scheduleDismiss);
    document.addEventListener("pointerdown", event => {
      if (!bubble.hidden && !bubble.contains(event.target) && !event.target.closest("[data-feature]")) hideBubble();
    });
    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && scenes[activeChapter]) {
        if (!bubble.hidden) hideBubble();
        else reassemble();
      }
    });
    const resize = () => {
      const scale = Math.min((scene.clientWidth - 14) / 1000, (scene.clientHeight - 65) / 560, 1.3);
      const world = document.querySelector("#world");
      world.style.setProperty("--stage-scale", String(scale));
      world.style.setProperty("--word-scale", String(Math.min(1.45, scene.clientWidth / (1000 * scale) * .95)));
      positionBubble();
    };
    new ResizeObserver(resize).observe(scene);
    resize();
  } catch (error) {
    document.querySelector("#scene-error").hidden = false;
    console.error("The career scene could not initialize:", error);
  }
})();
