const turkishWords = [
  "intikam","temiz","rafine","pamuk","kırılmış","gece","orman","mercan","sessiz","bahar",
  "yankı","gümüş","nehir","pusula","özgür","bulut","kıvılcım","menekşe","zümrüt","dost",
  "güneş","rüzgar","lavanta","bilge","deniz","umut","kale","şafak","kitap","serüven",
  "masal","çınar","sedef","gizem","fener","yolcu","renk","düş","nar","yıldız",
  "bahçe","uyum","kumsal","zafer","ayışığı","merak","sığınak","tutku","duru","evren",
  "akarsu","anlam","arzu","asalet","ateş","ayva","bilim","ceviz","çağlayan","çiçek",
  "doğa","elmas","esinti","fırtına","gökkuşağı","gölge","huzur","incir","ışık","kavşak",
  "köprü","lale","leylek","mavi","meşe","mutluluk","orman","rüya","sabah","sarmaşık",
  "şeker","şelale","toprak","ufuk","uyanış","verim","yağmur","zeytin","zirve",
  "ağaç","akıl","alev","altın","anahtar","ayna","aslan","avlu","azim","badem",
  "balık","barış","başarı","baykuş","bereket","beşik","beyaz","bıçak","bulmaca","çakıl",
  "çayır","çember","çevre","çocuk","dağ","damla","davul","değer","defter","demir",
  "destan","diken","dostluk","duvar","dünya","edebiyat","efsane","ekmek","elçi","endişe",
  "erik","eski","fidan","fikir","filiz","fincan","fıstık","geçit","gelenek","gök",
  "gökçe","göl","gül","güven","hazine","hayal","hayat","hız","ıhlamur","ırmak",
  "iz","kader","kalem","kapı","kar","karınca","kartal","kavak","kayalık","kedi",
  "kelebek","keman","kemer","kervan","kestane","kilit","kiraz","kıyı","koku","konak",
  "koy","kral","kum","kurt","küre","küçük","liman","mektup","merdiven","misafir",
  "mor","mum","narenciye","nefes","nehir","nota","okyanus","okul","oyuncak","papatya",
  "parıltı","pazar","pencere","perde","renkli","rüzgar","sabır","sahil","sakin","sanat",
  "sedef","sevgi","sincap","sis","sofra","sonsuz","söğüt","su","süre","taş",
  "taç","tarçın","tepe","terazi","tohum","turna","umutlu","uzay","üzüm","vadi",
  "vapur","yaprak","yarın","yaz","yelken","yemiş","yol","yorgan","yürek","zafer"
];
const englishWords = [
  "revenge","clean","refined","cotton","broken","night","forest","coral","silent","spring",
  "echo","silver","river","compass","free","cloud","spark","violet","emerald","friend",
  "sunshine","breeze","lavender","wise","ocean","hope","castle","dawn","book","adventure",
  "story","oak","pearl","mystery","lantern","traveler","color","dream","pomegranate","star",
  "garden","harmony","shore","victory","moonlight","curious","shelter","passion","pure","universe",
  "amber","apple","aurora","balance","brave","breeze","candle","cedar","charm","clear",
  "crystal","daring","ember","flame","glow","grace","harbor","island","jade","journey",
  "kindness","meadow","morning","nest","orchard","peace","rain","sapphire","season","secret",
  "summit","thunder","timber","valley","wander","whisper","winter","wonder","zenith","zephyr",
  "anchor","animal","answer","apricot","arrow","artist","autumn","bamboo","beacon","beauty",
  "berry","bird","blossom","blue","boulder","bridge","brook","butterfly","canyon","captain",
  "caramel","carpet","cedar","celestial","century","circle","clover","coast","coffee","comet",
  "coral","courage","crown","daylight","desert","diamond","dolphin","dragon","eagle","earth",
  "eclipse","energy","engine","evening","evergreen","feather","field","firefly","forest","fortune",
  "freedom","friendship","galaxy","gem","gentle","glacier","golden","grape","horizon","hummingbird",
  "iceberg","infinite","inspiration","ivory","jasmine","jewel","keeper","kingdom","kite","knight",
  "lake","lemon","liberty","lighthouse","lightning","lily","lotus","maple","marble","marsh",
  "merit","meteor","mist","monarch","mountain","music","nebula","novel","oak","olive",
  "opal","orbit","origin","panda","paradise","path","pebble","phoenix","piano","pine",
  "planet","plum","poetry","polar","prism","rainbow","raven","relic","ripple","rocket",
  "rose","sailor","shadow","shell","signal","skylark","snowflake","solstice","spirit","springtime",
  "starlight","stone","stream","sunrise","sunset","swallow","swan","sword","tangerine","temple",
  "thistle","thunderbolt","tiger","tulip","twilight","unicorn","unity","violet","waterfall","willow"
];
let wordList = turkishWords;
const specialCharacters = "!@#$%^&*()_+-=[]{};:,.?/";
const usedPasswords = new Set();
let currentType = "memorable";
let currentLanguage = localStorage.getItem("mash-language") || "tr";
let currentTheme = localStorage.getItem("mash-theme") || "dark";
const generatedHistory = [];
const translations = {
  tr: {
    sessionOnly: "Yalnızca bu oturumda saklanır", eyebrow: "Güvenliğini güçlendir", heroFirst: "Şifreni oluştur.", heroSecond: "Kontrol sende.",
    heroDescription: "İhtiyacına uygun, güçlü ve benzersiz şifreler üret. Hiçbir şifre cihazından ayrılmaz.", memorableTab: "Hatırlanabilir şifre oluştur", memorableHint: "Kelimelerle akılda kalır", randomTab: "Rastgele şifre oluştur", randomHint: "Maksimum karmaşıklık",
    settings: "AYARLAR", choosePreferences: "Tercihlerini seç", wordCount: "Kelime sayısı", separator: "Kelime ayırıcı", dash: "Çizgi (-)", comma: "Virgül (,)", numbers: "Sayılar", numberSymbol: "Sayılar ve semboller", dot: "Nokta (.)", space: "Boşluk", underscore: "Alt çizgi (_)", darkTheme: "Koyu", lightTheme: "Açık",
    uppercase: "Büyük harf", wordUppercaseHint: "Her kelime büyük harfle başlasın", containsNumbers: "Sayı içerir", wordNumbersHint: "Kelimelerin sonuna rakam ekle", characterLength: "Karakter uzunluğu", uppercaseHint: "A–Z karakterlerini dahil et", numbersHint: "0–9 karakterlerini dahil et", specialCharacters: "Özel karakterler", specialHint: "! @ # $ % gibi semboller",
    generate: "Yeni şifre oluştur", generatedPassword: "OLUŞTURULAN ŞİFRE", copy: "Kopyala", securityLevel: "GÜVENLİK SEVİYESİ", length: "UZUNLUK", tip: "İpucu", tipText: "Uzun ve benzersiz şifreler hesaplarını korumanın en kolay yoludur.", footer: "Şifrelerin cihazından ayrılmaz · Güvenli üretim", copied: "Şifre panoya kopyalandı", word: "kelime", character: "karakter", produced: "şifre üretildi", historyTitle: "ŞİFRE GEÇMİŞİ", noHistory: "Henüz şifre oluşturulmadı.", strong: "Güçlü", weak: "Zayıf", vulnerable: "Savunmasız", unused: "Bu şifre daha önce kullanılmadı.", repeated: "Önceki şifre tekrarlandı, yeni bir kombinasyon üretildi."
  },
  en: {
    sessionOnly: "Stored only during this session", eyebrow: "Strengthen your security", heroFirst: "Create your password.", heroSecond: "Stay in control.",
    heroDescription: "Generate strong, unique passwords for your needs. Your passwords never leave this device.", memorableTab: "Create memorable password", memorableHint: "Easy to remember with words", randomTab: "Create random password", randomHint: "Maximum complexity",
    settings: "SETTINGS", choosePreferences: "Choose your preferences", wordCount: "Word count", separator: "Word separator", dash: "Hyphens (-)", comma: "Commas (,)", numbers: "Numbers", numberSymbol: "Numbers and symbols", dot: "Periods (.)", space: "Space", underscore: "Underscores (_)", darkTheme: "Dark", lightTheme: "Light",
    uppercase: "Uppercase", wordUppercaseHint: "Start each word with uppercase", containsNumbers: "Include numbers", wordNumbersHint: "Add a digit to each word", characterLength: "Character length", uppercaseHint: "Include A–Z characters", numbersHint: "Include 0–9 characters", specialCharacters: "Special characters", specialHint: "Symbols like ! @ # $ %",
    generate: "Generate new password", generatedPassword: "GENERATED PASSWORD", copy: "Copy", securityLevel: "SECURITY LEVEL", length: "LENGTH", tip: "Tip", tipText: "Long, unique passwords are the easiest way to protect your accounts.", footer: "Your passwords never leave this device · Secure generation", copied: "Password copied to clipboard", word: "words", character: "characters", produced: "passwords generated", historyTitle: "PASSWORD HISTORY", noHistory: "No passwords generated yet.", strong: "Strong", weak: "Weak", vulnerable: "Vulnerable", unused: "This password has not been used before.", repeated: "The previous password was repeated, so a new combination was generated."
  }
};

const $ = (id) => document.getElementById(id);
const randomIndex = (max) => {
  const values = new Uint32Array(1);
  crypto.getRandomValues(values);
  return values[0] % max;
};
const randomChar = (source) => source[randomIndex(source.length)];
const capitalize = (word) => word.charAt(0).toLocaleUpperCase("tr-TR") + word.slice(1);

function randomDigits(count) {
  return Array.from({ length: count }, () => randomChar("0123456789")).join("");
}

function separatorValue(kind) {
  if (kind === "comma") return ",";
  if (kind === "numbers") return randomDigits(2);
  if (kind === "number-symbol") return randomDigits(1) + randomChar("^~+=!?@#");
  if (kind === "dot") return ".";
  if (kind === "space") return " ";
  if (kind === "underscore") return "_";
  return "-";
}

function createMemorable() {
  const count = Number($("word-count").value);
  const separator = $("separator").value;
  const hasDigits = $("mem-digits").checked && !["numbers", "number-symbol"].includes(separator);
  const uppercase = $("mem-uppercase").checked;
  const words = [];
  for (let index = 0; index < count; index += 1) {
    let word = wordList[randomIndex(wordList.length)];
    if (uppercase) word = capitalize(word);
    if (hasDigits) word += randomDigits(1);
    words.push(word);
  }
  return words.map((word, index) => index === 0 ? word : separatorValue(separator) + word).join("");
}

function createRandom() {
  const length = Number($("char-count").value);
  let pool = "abcdefghijklmnopqrstuvwxyz";
  if ($("random-uppercase").checked) pool += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if ($("random-digits").checked) pool += "0123456789";
  if ($("random-special").checked) pool += specialCharacters;
  return Array.from({ length }, () => randomChar(pool)).join("");
}

function createUnique() {
  let password = "";
  do {
    password = currentType === "memorable" ? createMemorable() : createRandom();
  } while (usedPasswords.has(password));
  usedPasswords.add(password);
  generatedHistory.unshift(password);
  if (generatedHistory.length > 8) generatedHistory.pop();
  return password;
}

function setStrength() {
  const value = currentType === "memorable" ? Number($("word-count").value) : Number($("char-count").value);
  const isStrong = currentType === "memorable" ? value >= 4 : value >= 15;
  const isWeak = currentType === "memorable" ? value === 3 : value >= 10;
  const text = $("strength-text");
  const t = translations[currentLanguage];
  text.textContent = isStrong ? t.strong : isWeak ? t.weak : t.vulnerable;
  text.className = `strength-text ${isStrong ? "strong" : isWeak ? "weak" : "vulnerable"}`;
  [...$("strength-bars").children].forEach((bar, index) => {
    bar.className = index < (isStrong ? 4 : isWeak ? 2 : 1) ? (isStrong ? "on" : isWeak ? "warn" : "danger") : "";
  });
}

function updateRangeBackground(input) {
  const percentage = ((input.value - input.min) / (input.max - input.min)) * 100;
  input.style.background = `linear-gradient(90deg, var(--teal) 0 ${percentage}%, #293b56 ${percentage}% 100%)`;
}

function updateLabels() {
  const t = translations[currentLanguage];
  $("word-count-value").textContent = `${$("word-count").value} ${t.word}`;
  $("char-count-value").textContent = `${$("char-count").value} ${t.character}`;
  updateRangeBackground($("word-count"));
  updateRangeBackground($("char-count"));
  setStrength();
}

function handleRangeInput(input) {
  updateLabels();
  const isActiveRange = currentType === "memorable" ? input.id === "word-count" : input.id === "char-count";
  if (isActiveRange) generate();
}

function render(password, repeated = false) {
  const t = translations[currentLanguage];
  $("password-output").textContent = password;
  $("length-value").textContent = `${password.length} ${t.character}`;
  $("history-count").textContent = `${usedPasswords.size} ${t.produced}`;
  $("history-size").textContent = generatedHistory.length;
  $("history-list").replaceChildren(...generatedHistory.map((item) => {
    const entry = document.createElement("div");
    entry.className = "history-item";
    entry.title = item;
    const password = document.createElement("span");
    password.className = "history-password";
    password.textContent = item;
    const copy = document.createElement("button");
    copy.className = "history-copy";
    copy.type = "button";
    copy.dataset.password = item;
    copy.title = t.copy;
    copy.setAttribute("aria-label", t.copy);
    copy.textContent = "▣";
    entry.append(password, copy);
    return entry;
  }));
  $("notice").classList.toggle("used", repeated);
  $("notice").innerHTML = repeated
    ? `<span>↻</span><span>${t.repeated}</span>`
    : `<span>✓</span><span>${t.unused}</span>`;
  setStrength();
}

function generate() {
  const password = createUnique();
  render(password);
}

function applyLanguage(language) {
  currentLanguage = language;
  localStorage.setItem("mash-language", language);
  wordList = language === "en" ? englishWords : turkishWords;
  document.body.classList.toggle("lang-en", language === "en");
  const t = translations[language];
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t[element.dataset.i18n];
  });
  document.querySelectorAll("option[data-i18n]").forEach((option) => {
    option.textContent = t[option.dataset.i18n];
  });
  $("language-flag").textContent = language === "en" ? "🇬🇧" : "🇹🇷";
  $("language-name").textContent = language === "en" ? "English" : "Türkçe";
  document.querySelectorAll(".language-option").forEach((option) => option.classList.toggle("active", option.dataset.language === language));
  updateLabels();
  render(createUnique());
}

document.querySelectorAll(".type-tab").forEach((tab) => tab.addEventListener("click", () => {
  currentType = tab.dataset.type;
  document.querySelectorAll(".type-tab").forEach((item) => {
    const active = item === tab;
    item.classList.toggle("active", active);
    item.setAttribute("aria-selected", active);
  });
  $("memorable-settings").classList.toggle("hidden", currentType !== "memorable");
  $("random-settings").classList.toggle("hidden", currentType !== "random");
  generate();
}));
[$("word-count"), $("char-count")].forEach((input) => input.addEventListener("input", () => handleRangeInput(input)));
[$("separator"), $("mem-uppercase"), $("mem-digits"), $("random-uppercase"), $("random-digits"), $("random-special")].forEach((input) => input.addEventListener("change", generate));
$("generate-button").addEventListener("click", generate);
$("copy-button").addEventListener("click", async () => {
  await navigator.clipboard.writeText($("password-output").textContent);
  $("toast").textContent = translations[currentLanguage].copied;
  $("toast").classList.add("show");
  window.setTimeout(() => $("toast").classList.remove("show"), 1800);
});
document.querySelectorAll("[data-language]").forEach((button) => button.addEventListener("click", () => {
  applyLanguage(button.dataset.language);
}));
let historyVisible = false;
$("history-toggle").addEventListener("click", () => {
  historyVisible = !historyVisible;
  $("history-list").classList.toggle("hidden", !historyVisible);
  const label = currentLanguage === "en"
    ? (historyVisible ? "Hide password history" : "Show password history")
    : (historyVisible ? "Şifre geçmişini gizle" : "Şifre geçmişini göster");
  $("history-toggle").setAttribute("aria-label", label);
  $("history-toggle").title = label;
});
$("history-list").addEventListener("click", async (event) => {
  const button = event.target.closest(".history-copy");
  if (!button) return;
  await navigator.clipboard.writeText(button.dataset.password);
  $("toast").textContent = translations[currentLanguage].copied;
  $("toast").classList.add("show");
  window.setTimeout(() => $("toast").classList.remove("show"), 1800);
});
document.querySelectorAll("[data-theme]").forEach((button) => button.addEventListener("click", () => {
  currentTheme = button.dataset.theme;
  localStorage.setItem("mash-theme", currentTheme);
  document.body.classList.toggle("theme-light", currentTheme === "light");
  document.querySelectorAll("[data-theme]").forEach((item) => item.classList.toggle("active", item.dataset.theme === currentTheme));
}));
document.body.classList.toggle("theme-light", currentTheme === "light");
document.querySelectorAll("[data-theme]").forEach((item) => item.classList.toggle("active", item.dataset.theme === currentTheme));
applyLanguage(currentLanguage);
