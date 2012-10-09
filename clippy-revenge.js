var current = "inactive"

function updateIcon() {
  if (current == "inactive"){ current = "active";}else{current = "inactive";}

  chrome.browserAction.setIcon({path:"icon-" + current + ".png"});
}

chrome.browserAction.onClicked.addListener(updateIcon);
updateIcon();