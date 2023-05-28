
async function googleTranslate(sl, tl, text) {
  let args = {client: "gtx", hl: tl, sl, tl, q: text, dj: 1}
  let query = new URLSearchParams(args)
  let url = "https://translate.googleapis.com/translate_a/single?dt=t&dt=bd&dt=qc&dt=rm&dt=ex&" + query.toString()
  let res = await fetch(url, {
    method: "GET",
    headers: { Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8" }
  })
  let t = await res.json()
  return t.sentences.map((s) => s.trans).join('')
}

async function youdaoTranslate(sl, tl, text) {
  let args = {
    client: "deskdict",
    keyfrom: "chrome.extension",
    xmlVersion: "0.1",
    dogVersion: "1.0",
    ue: "utf8",
    i: text,
    doctype: "json",
  }
  let query = new URLSearchParams(args)
  let url = "http://fanyi.youdao.com/translate?" + query.toString()
  let res = await fetch(url, {
    method: "GET",
    headers: { Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8" }
  })
  let t = await res.json()
  return t.translateResult.map((ts)=>ts.map(({tgt})=>tgt).join('')).join('')
}

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

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if(request.kind === 'translate'){
    chrome.storage.sync.get({targetLanguage: 'en'}, async function({targetLanguage}) {
      console.log(request.text)
      let res = await youdaoTranslate('auto', targetLanguage, request.text)
      // let res = await googleTranslate('auto', targetLanguage, request.text)
      console.log(res)
      sendResponse(res)
    })
  }
  return true
})
