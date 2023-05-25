
function translate(sl, tl) {
  async function f(text) {
    let args = {client: "gtx", hl: 'en', sl, tl, q: text, dj: 1}
    let query = new URLSearchParams(args)
    let url = "https://translate.googleapis.com/translate_a/single?dt=t&dt=bd&dt=qc&dt=rm&dt=ex&" + query.toString()
    let res = await fetch(url, {
      method: "GET",
      headers: { Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8" }
    })
    let t = await res.json()
    return t.sentences.map((s) => s.trans).join('')
  }
  return f
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
  chrome.storage.sync.get({targetLanguage: 'en'}, function({targetLanguage}) {
    forTextBox(document.activeElement, translate('auto', targetLanguage))
  })
})
