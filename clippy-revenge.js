
function initClippy() {
  chrome.tabs.executeScript(null,
    {code:"clippy.show();"}
  );
}

chrome.tabs.onUpdated.addListener(initClippy);
chrome.tabs.onCreated.addListener(initClippy);
