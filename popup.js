
let translatorSelect = document.getElementById("translatorSelect")
let languageSelect = document.getElementById("languageSelect")

let languages = {
  youdao: [{value: 'en', name: 'English'}],
  google: [
    {value: 'af', name: 'Afrikaans'},
    {value: 'sq', name: 'Albanian'},
    {value: 'am', name: 'Amharic'},
    {value: 'ar', name: 'Arabic'},
    {value: 'hy', name: 'Armenian'},
    {value: 'as', name: 'Assamese'},
    {value: 'ay', name: 'Aymara'},
    {value: 'az', name: 'Azerbaijani'},
    {value: 'bm', name: 'Bambara'},
    {value: 'eu', name: 'Basque'},
    {value: 'be', name: 'Belarusian'},
    {value: 'bn', name: 'Bengali'},
    {value: 'bho', name: 'Bhojpuri'},
    {value: 'bs', name: 'Bosnian'},
    {value: 'bg', name: 'Bulgarian'},
    {value: 'ca', name: 'Catalan'},
    {value: 'ceb', name: 'Cebuano'},
    {value: 'ny', name: 'Chichewa'},
    {value: 'zh-CN', name: 'Chinese (Simplified)'},
    {value: 'zh-TW', name: 'Chinese (Traditional)'},
    {value: 'co', name: 'Corsican'},
    {value: 'hr', name: 'Croatian'},
    {value: 'cs', name: 'Czech'},
    {value: 'da', name: 'Danish'},
    {value: 'dv', name: 'Dhivehi'},
    {value: 'doi', name: 'Dogri'},
    {value: 'nl', name: 'Dutch'},
    {value: 'en', name: 'English'},
    {value: 'eo', name: 'Esperanto'},
    {value: 'et', name: 'Estonian'},
    {value: 'ee', name: 'Ewe'},
    {value: 'tl', name: 'Filipino'},
    {value: 'fi', name: 'Finnish'},
    {value: 'fr', name: 'French'},
    {value: 'fy', name: 'Frisian'},
    {value: 'gl', name: 'Galician'},
    {value: 'ka', name: 'Georgian'},
    {value: 'de', name: 'German'},
    {value: 'el', name: 'Greek'},
    {value: 'gn', name: 'Guarani'},
    {value: 'gu', name: 'Gujarati'},
    {value: 'ht', name: 'Haitian Creole'},
    {value: 'ha', name: 'Hausa'},
    {value: 'haw', name: 'Hawaiian'},
    {value: 'iw', name: 'Hebrew'},
    {value: 'hi', name: 'Hindi'},
    {value: 'hmn', name: 'Hmong'},
    {value: 'hu', name: 'Hungarian'},
    {value: 'is', name: 'Icelandic'},
    {value: 'ig', name: 'Igbo'},
    {value: 'ilo', name: 'Ilocano'},
    {value: 'id', name: 'Indonesian'},
    {value: 'ga', name: 'Irish'},
    {value: 'it', name: 'Italian'},
    {value: 'ja', name: 'Japanese'},
    {value: 'jw', name: 'Javanese'},
    {value: 'kn', name: 'Kannada'},
    {value: 'kk', name: 'Kazakh'},
    {value: 'km', name: 'Khmer'},
    {value: 'rw', name: 'Kinyarwanda'},
    {value: 'gom', name: 'Konkani'},
    {value: 'ko', name: 'Korean'},
    {value: 'kri', name: 'Krio'},
    {value: 'ku', name: 'Kurdish (Kurmanji)'},
    {value: 'ckb', name: 'Kurdish (Sorani)'},
    {value: 'ky', name: 'Kyrgyz'},
    {value: 'lo', name: 'Lao'},
    {value: 'la', name: 'Latin'},
    {value: 'lv', name: 'Latvian'},
    {value: 'ln', name: 'Lingala'},
    {value: 'lt', name: 'Lithuanian'},
    {value: 'lg', name: 'Luganda'},
    {value: 'lb', name: 'Luxembourgish'},
    {value: 'mk', name: 'Macedonian'},
    {value: 'mai', name: 'Maithili'},
    {value: 'mg', name: 'Malagasy'},
    {value: 'ms', name: 'Malay'},
    {value: 'ml', name: 'Malayalam'},
    {value: 'mt', name: 'Maltese'},
    {value: 'mi', name: 'Maori'},
    {value: 'mr', name: 'Marathi'},
    {value: 'mni-Mtei', name: 'Meiteilon (Manipuri)'},
    {value: 'lus', name: 'Mizo'},
    {value: 'mn', name: 'Mongolian'},
    {value: 'my', name: 'Myanmar (Burmese)'},
    {value: 'ne', name: 'Nepali'},
    {value: 'no', name: 'Norwegian'},
    {value: 'or', name: 'Odia (Oriya)'},
    {value: 'om', name: 'Oromo'},
    {value: 'ps', name: 'Pashto'},
    {value: 'fa', name: 'Persian'},
    {value: 'pl', name: 'Polish'},
    {value: 'pt', name: 'Portuguese'},
    {value: 'pa', name: 'Punjabi'},
    {value: 'qu', name: 'Quechua'},
    {value: 'ro', name: 'Romanian'},
    {value: 'ru', name: 'Russian'},
    {value: 'sm', name: 'Samoan'},
    {value: 'sa', name: 'Sanskrit'},
    {value: 'gd', name: 'Scots Gaelic'},
    {value: 'nso', name: 'Sepedi'},
    {value: 'sr', name: 'Serbian'},
    {value: 'st', name: 'Sesotho'},
    {value: 'sn', name: 'Shona'},
    {value: 'sd', name: 'Sindhi'},
    {value: 'si', name: 'Sinhala'},
    {value: 'sk', name: 'Slovak'},
    {value: 'sl', name: 'Slovenian'},
    {value: 'so', name: 'Somali'},
    {value: 'es', name: 'Spanish'},
    {value: 'su', name: 'Sundanese'},
    {value: 'sw', name: 'Swahili'},
    {value: 'sv', name: 'Swedish'},
    {value: 'tg', name: 'Tajik'},
    {value: 'ta', name: 'Tamil'},
    {value: 'tt', name: 'Tatar'},
    {value: 'te', name: 'Telugu'},
    {value: 'th', name: 'Thai'},
    {value: 'ti', name: 'Tigrinya'},
    {value: 'ts', name: 'Tsonga'},
    {value: 'tr', name: 'Turkish'},
    {value: 'tk', name: 'Turkmen'},
    {value: 'ak', name: 'Twi'},
    {value: 'uk', name: 'Ukrainian'},
    {value: 'ur', name: 'Urdu'},
    {value: 'ug', name: 'Uyghur'},
    {value: 'uz', name: 'Uzbek'},
    {value: 'vi', name: 'Vietnamese'},
    {value: 'cy', name: 'Welsh'},
    {value: 'xh', name: 'Xhosa'},
    {value: 'yi', name: 'Yiddish'},
    {value: 'yo', name: 'Yoruba'},
    {value: 'zu', name: 'Zulu'}
  ]
}

function update({translator, language}) {
  console.log(translator, language)
  translatorSelect.value = translator
  let children = []
  let hasLanguage = false
  
  for(let item of languages[translator]){
    let option = document.createElement('option')
    option.value = item.value
    option.textContent = item.name
    children.push(option)
    if(item.value === language) hasLanguage = true
  }
  languageSelect.replaceChildren(...children)
  console.log(children)
  if(hasLanguage){
    languageSelect.value = language
  } else {
    languageSelect.value = 'en'
    chrome.storage.sync.set({translator, language: 'en'})
  }
}

chrome.storage.sync.get({translator: 'google', language: 'en'}, update)

translatorSelect.onchange = () => {
  let config = {
    translator: translatorSelect.value,
    language: languageSelect.value
  }
  chrome.storage.sync.set(config)
  update(config)
}

languageSelect.onchange = () => {
  let config = {
    translator: translatorSelect.value,
    language: languageSelect.value
  }
  chrome.storage.sync.set(config)
}