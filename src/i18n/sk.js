// ParsleyConfig definition if not already set
window.ParsleyConfig = window.ParsleyConfig || {};
window.ParsleyConfig.i18n = window.ParsleyConfig.i18n || {};

// Define then the messages
window.ParsleyConfig.i18n.sk = $.extend(window.ParsleyConfig.i18n.sk || {}, {
  defaultMessage: "Hodnota je nesprávna.",
  type: {
    email:        "Hodnota musí byť email v správnom tvare.",
    url:          "Hodnota musí byť URL v správnom tvare.",
    number:       "Hodnota musí byť číslo.",
    integer:      "Hodnota musí byť celé číslo.",
    digits:       "Povolené iba číslice.",
    alphanum:     "Povolené iba alfanumerické znaky."
  },
  notblank:       "Hodnota nemôže byť prázdna.",
  required:       "Hodnota je povinná.",
  pattern:        "Hodnota je nesprávna.",
  min:            "Hodnota musí byť väčšia ako %s.",
  max:            "Hodnota musí byť menšia alebo rovná ako %s.",
  range:          "Hodnota musí byť v rozsahu od %s do %s.",
  minlength:      "Hodnota je príliž krátka, musí obsahovať najmenej %s znakov.",
  maxlength:      "Hodnota je príliž dlhá. Musí obsahovať najviac %s znakov.",
  length:         "Nesprávna dĺžka hodnoty, musí byť v rozsahu od %s do %s znakov.",
  mincheck:       "Musí byť vybratých najmenej %s možnosti.",
  maxcheck:       "Musí byť vybratých najviac %s možnosti.",
  check:          "Musí byť vybratých od %s do %s možnosti.",
  equalto:        "Hodnota musí byť rovnaká."
});

// If file is loaded after Parsley main file, auto-load locale
if ('undefined' !== typeof window.ParsleyValidator)
  window.ParsleyValidator.addCatalog('en', window.ParsleyConfig.i18n.en, true);
