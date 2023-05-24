

function translate(sl, tl, text, cont) {
  $.ajax({
    url: "https://translate.googleapis.com/translate_a/single?dt=t&dt=bd&dt=qc&dt=rm&dt=ex",
    type: "GET", dataType: "json",
    headers: { Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8" },
    data: {
      client: "gtx", hl: 'en', sl,
      tl, q: text, dj: 1
    },
    success: t => {
      let r = t.sentences.map((s)=>s.trans).join('')
      cont(r)
    }, 
    error: t => {throw(t)}
  })
  return true
}

function forTextBox(element, callback){

  if (element) {
    if (element.tagName === 'INPUT' && (element.type === 'text' || element.type === 'search')) {
      return callback(element.value, function (res)  {
        element.value = res 
        element.dispatchEvent(new Event('change'));
      })
    } else if (element.tagName === 'TEXTAREA') {
      return callback(element.value, function (res) { 
        element.value = res 
        element.dispatchEvent(new Event('change'));
      })
    } else if (element.contentEditable === "true"){
      return callback(element.textContent, function (res) { 
        element.textContent = res 
        element.dispatchEvent(new Event('change'));
      })
    }
  }
  return false
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  let isTextBox = forTextBox(document.activeElement, (text, setText) =>  true)

  if(isTextBox){
    forTextBox(document.activeElement, (text, setText) =>  translate('auto', 'en', text, setText))
  }
})
