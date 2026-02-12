document.getElementById('goSlashy').addEventListener('click', () => {
  chrome.tabs.create({ url: "https://slashy.com" });
  window.close();
});

document.getElementById('dismiss').addEventListener('click', () => {
  window.close();
});
