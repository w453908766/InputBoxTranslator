
function translate(text) {
  return new Promise((resolve, reject) =>
    chrome.runtime.sendMessage({kind:'translate', text}, resolve)
  )
}

async function forInput(element, callback) {
  let start = element.selectionStart
  let end = element.selectionEnd
  let text = element.value
  if (start === end) {
    let res = await callback(text)
    element.value = res
  } else {
    let prefix = text.substring(0, start)
    let selected = text.substring(start, end)
    let suffix = text.substring(end, text.length)
    let res = await callback(selected)
    element.value = prefix + res + suffix
  }
  element.dispatchEvent(new Event('input'))
  element.dispatchEvent(new Event('change'));
}

async function forEditable(element, callback) {
  let res = await callback(element.textContent) 
  element.textContent = res
  element.dispatchEvent(new Event('input'))
}

function forTextBox(element, callback) {
  if (element) {
    if (element.tagName === 'INPUT' && (element.type === 'text' || element.type === 'search')) {
      forInput(element, callback)
    } else if (element.tagName === 'TEXTAREA') {
      forInput(element, callback)
    } else if (element.contentEditable === "true") {
      forEditable(element, callback)
    }
  }
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  forTextBox(document.activeElement, translate)
})
