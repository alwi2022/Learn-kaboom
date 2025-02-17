export function displayDialogue(fullText, onDisplayEnd) {
  const dialogueUI = document.getElementById("textbox-container");
  const dialogue = document.getElementById("dialogue");
  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("prev");
  const closeBtn = document.getElementById("close");

  dialogueUI.style.display = "block"; // Munculkan textbox

  let sentences = splitTextByBreaks(fullText); // Pisahkan teks sesuai dengan `<br><br>`
  let pageIndex = 0;

  function updateDialogue() {
    dialogue.innerHTML = sentences[pageIndex];
    prevBtn.style.display = pageIndex > 0 ? "inline-block" : "none";
    nextBtn.style.display = pageIndex < sentences.length - 1 ? "inline-block" : "none";
    closeBtn.style.display = pageIndex === sentences.length - 1 ? "inline-block" : "none";
  }

  nextBtn.onclick = () => {
    if (pageIndex < sentences.length - 1) {
      pageIndex++;
      updateDialogue();
    }
  };

  prevBtn.onclick = () => {
    if (pageIndex > 0) {
      pageIndex--;
      updateDialogue();
    }
  };

  closeBtn.onclick = () => {
    onDisplayEnd();
    dialogueUI.style.display = "none";
    pageIndex = 0;
  };

  updateDialogue();
}

/**
 * Fungsi untuk membagi teks berdasarkan tag `<br><br>` agar tetap rapi.
 */
function splitTextByBreaks(text) {
  return text.split("<br><br>").map((segment) => segment.trim() + "<br><br>");
}



export function setCamScale(k) {
  const scale = Math.min(k.width() / 800, k.height() / 600); // 800x600 bisa disesuaikan
  k.camScale(k.vec2(scale));
}

