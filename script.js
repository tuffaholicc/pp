const iconFiles = [
  "POGG.webp", "catHug.webp", "DIESOFCRINGE.webp", "pepoClown.webp", "peepoShrug.webp",
  "NOWAYING.webp", "spongePls.webp", "CATBEDOINGTHELAUNDRY.webp", "NezukoSlide.webp", "Bedge.webp",
  "monkaBan.webp", "CrabPls.webp", "dekuHYPE.webp", "tenseSmash.webp", "HUHH.webp",
  "SNIFFA.webp", "modCheck.webp", "peepoClap.webp", "blobDance.webp", "Sadge.webp",
  "weirdChamp.webp", "GIGACHAD.webp", "peepoWave.webp", "KEKW.webp", "Prayge.webp",
  "LETSGOOO.webp", "catJAM.webp", "monkaSHAKE.webp", "CAUGHT.webp", "COOKED.webp"
];

document.addEventListener("DOMContentLoaded", function () {
  const slotContainer = document.getElementById("slotContainer");

  for (let i = 0; i < iconFiles.length; i++) {
    const slot = document.createElement("div");
    slot.classList.add("slot");

    const iconImage = document.createElement("img");
    iconImage.classList.add("icon-image");
    iconImage.src = `icons/${iconFiles[i]}`;
    iconImage.alt = iconFiles[i].split(".")[0]; // Remove file extension

    const copyButton = document.createElement("button");
    copyButton.classList.add("copy-btn");
    copyButton.textContent = "Copy to Clipboard";
    copyButton.addEventListener("click", function () {
      copyText(iconFiles[i].split(".")[0]); // Copy icon name without extension
    });

    slot.appendChild(iconImage);
    slot.appendChild(copyButton);

    slotContainer.appendChild(slot);
  }
});

// Function to Copy Text to Clipboard (Without Pop-up)
function copyText(text) {
  navigator.clipboard.writeText(text);
}
