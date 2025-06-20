document.getElementById("start-quiz").addEventListener("click", () => {
    const answer = prompt("Pick a vibe: 🔥 Fierce / 🌿 Soulful / 👑 Regal / 🎤 Bold").toLowerCase();
    let result = "";
  
    if (answer.includes("fierce")) result = "You're the Sasha Fierce era – confident and powerful!";
    else if (answer.includes("soulful")) result = "You're the B'Day era – radiant and emotionally in tune.";
    else if (answer.includes("regal")) result = "You're the Lemonade era – deeply introspective and bold.";
    else if (answer.includes("bold")) result = "You're the Renaissance era – stylish, loud, and unapologetic.";
    else result = "You're uniquely Beyoncé – unboxed and undefinable!";
  
    document.getElementById("quiz-result").textContent = result;
  });

  