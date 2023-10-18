function LocalizarWhatsapp(element) {

  var perfil = element.getAttribute("data-profile");

  var whatsappMayi = +5353515357;
  var whatsappEli = +5353515357;
  var whatsappDavid = +5353515357;

  /*Whatsapp*/
  if (perfil === "mayi") {
    window.open('https://wa.me/' + whatsappMayi, '_blank');
  } else if (perfil === "eli") {
    window.open('https://wa.me/' + whatsappEli, '_blank');
  } else if (perfil === "david") {
    window.open('https://wa.me/' + whatsappDavid, '_blank');
  }
}
function LocalizarInstagram(element) {

  var perfil = element.getAttribute("data-profile");

  var instagramMayi = enlace1;
  var instagramEli = enlace2;
  var instagramDavid = enlace3;

  /*Whatsapp*/
  if (perfil === "mayi") {
    window.open(instagramMayi, '_blank');
  } else if (perfil === "eli") {
    window.open(instagramEli, '_blank');
  } else if (perfil === "david") {
    window.open(instagramDavid, '_blank');
  }
}