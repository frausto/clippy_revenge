var current = 'inactive';

function updateIcon() {
  if (current == "inactive"){ 
    current = "active";
    chrome.tabs.getAllInWindow(null, function(tabs){
      for (var i = 0; i < tabs.length; i++) {
        chrome.tabs.executeScript(tabs[i].id,
          {code:"clippy.show();"}
        );
      }
    });
    
  }else{
    current = "inactive";
    chrome.tabs.getAllInWindow(null, function(tabs){
      for (var i = 0; i < tabs.length; i++) {
        chrome.tabs.executeScript(tabs[i].id,
          {code:"clippy.hide();"}
        );
      }
    });
  }

  chrome.browserAction.setIcon({path:"icon-" + current + ".png"});
}

function initClippy() {
  if (current == "inactive"){
    chrome.tabs.executeScript(null,
      {code:"clippy.hide();"}
    );
  }else{
    chrome.tabs.executeScript(null,
      {code:"clippy.show();"}
    );
  }
  chrome.browserAction.setIcon({path:"icon-" + current + ".png"});
}

chrome.browserAction.onClicked.addListener(updateIcon);
chrome.tabs.onUpdated.addListener(initClippy);
chrome.tabs.onCreated.addListener(initClippy);