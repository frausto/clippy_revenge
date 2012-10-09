var current = "inactive"

function updateIcon() {
  if (current == "inactive"){ 
    current = "active";
    chrome.tabs.executeScript(null,
      {code:"clippy.show();"}
    );
  }else{
    current = "inactive";
    chrome.tabs.executeScript(null,
      {code:"clippy.hide();"}
    );
  }

  chrome.browserAction.setIcon({path:"icon-" + current + ".png"});
}

chrome.browserAction.onClicked.addListener(updateIcon);
updateIcon();