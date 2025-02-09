document.addEventListener("DOMContentLoaded", function () {
  const slotContainer = document.getElementById("slotContainer");

  // Generate 3x5 = 15 slots dynamically
  for (let i = 1; i <= 15; i++) {
    const slot = document.createElement("div");
    slot.classList.add("slot");

    const iconImage = document.createElement("img");
    iconImage.classList.add("icon-image");
    iconImage.src = `icons/icon${i}.png`; // Assumes icon files are named icon1.png, icon2.png, etc.
    iconImage.alt = `Icon ${i}`;

    const copyButton = document.createElement("button");
    copyButton.classList.add("copy-btn");
    copyButton.textContent = "Copy to Clipboard";
    copyButton.addEventListener("click", function () {
      copyText(`Icon ${i}`);
    });

    slot.appendChild(iconImage);
    slot.appendChild(copyButton);

    slotContainer.appendChild(slot);
  }
});

// Copy text to clipboard function
function copyText(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert(`Copied: ${text}`);
  });
}
