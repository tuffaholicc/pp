document.addEventListener("DOMContentLoaded", function () {
  const slotContainer = document.getElementById("slotContainer");

  // Generate 3x20 = 60 slots dynamically
  for (let i = 1; i <= 60; i++) {
    const slot = document.createElement("div");
    slot.classList.add("slot");

    const iconImage = document.createElement("img");
    iconImage.classList.add("icon-image");
    iconImage.src = `icons/icon${i}.png`; // Icons should be named as icon1.png, icon2.png, etc.
    iconImage.alt = `Icon ${i}`;

    const iconName = document.createElement("div");
    iconName.classList.add("icon-name");
    iconName.textContent = `Icon ${i}`;

    const copyButton = document.createElement("button");
    copyButton.classList.add("copy-btn");
    copyButton.textContent = "Copy to Clipboard";
    copyButton.addEventListener("click", function () {
      copyText(iconName);
    });

    slot.appendChild(iconImage);
    slot.appendChild(iconName);
    slot.appendChild(copyButton);

    slotContainer.appendChild(slot);
  }
});

// Copy text to clipboard function
function copyText(iconElement) {
  const text = iconElement.textContent;
  navigator.clipboard.writeText(text).then(() => {
    alert(`Copied: ${text}`);
  });
}
