function playSound() {
  let url = chrome.runtime.getURL("audio.html");
  url += "?volume=0.5&src=sounds/complete.mp3&length=10000";

  chrome.windows.create({
    type: "popup",
    focused: false,
    top: 1,
    left: 1,
    height: 1,
    width: 1,
    url,
  });
}

chrome.runtime.onMessage.addListener(playSound);
