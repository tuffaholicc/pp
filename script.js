// Generate 15x4 = 60 slots dynamically
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("slots-container");

  for (let i = 1; i <= 60; i++) {
    const slot = document.createElement("div");
    slot.classList.add("slot");

    const iconPlaceholder = document.createElement("div");
    iconPlaceholder.classList.add("icon-placeholder");

    const iconName = document.createElement("div");
    iconName.classList.add("icon-name");
    iconName.innerText = `Icon ${i}`;

    const copyButton = document.createElement("button");
    copyButton.classList.add("copy-btn");
    copyButton.innerText = "Copy to Clipboard";
    copyButton.addEventListener("click", () => copyText(iconName));

    slot.appendChild(iconPlaceholder);
    slot.appendChild(iconName);
    slot.appendChild(copyButton);

    container.appendChild(slot);
  }
});

// Copy text function
function copyText(iconName) {
  navigator.clipboard.writeText(iconName.innerText).then(() => {
    alert(`Copied: ${iconName.innerText}`);
  });
}
