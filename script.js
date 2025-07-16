
    const circle = document.getElementById("circle");
    const text = document.getElementById("breatheText");
    const pauseBtn = document.getElementById("pauseBtn");
    const resetBtn = document.getElementById("resetBtn");

    const steps = [
      { label: "Inhale", scale: 1.4, time: 4 },
      { label: "Hold",   scale: 1.4, time: 7 },
      { label: "Exhale", scale: 1.0, time: 8 },
      { label: "Pause",  scale: 1.0, time: 3 }
    ];

    let timeline = gsap.timeline({ repeat: -1 });

    steps.forEach(step => {
      timeline.to(circle, {
        scale: step.scale,
        duration: step.time,
        ease: "power1.inOut",
        onStart: () => text.textContent = step.label
      });
    });

    pauseBtn.onclick = () => {
      if (timeline.paused()) {
        timeline.resume();
        pauseBtn.textContent = "Pause";
      } else {
        timeline.pause();
        pauseBtn.textContent = "Resume";
      }
    };

    resetBtn.onclick = () => {
      timeline.restart();
      text.textContent = "Ready?";
      pauseBtn.textContent = "Pause";
    };
  