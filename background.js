

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "translateAndReplace",
    title: "translate and replace",
    contexts: ["editable"],
  })
})

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "translateAndReplace") {
    chrome.tabs.sendMessage(tab.id, {})
  }
})

chrome.commands.onCommand.addListener((command, tab) => {
  if(command === "run-translate"){
    chrome.tabs.sendMessage(tab.id, {})
  }
})