

let targetSelect = document.getElementById("targetSelect")

chrome.storage.sync.get({targetLanguage: 'en'}, function({targetLanguage}) {
  targetSelect.value = targetLanguage
})

targetSelect.onchange = () => {
  chrome.storage.sync.set({targetLanguage: targetSelect.value})
}