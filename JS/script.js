let data0 = {
  photo: `Kepek/photo0.jpg`,
  title: `A mese`,
  description: `"A mesék azt mondják, hogy a virágtündér így működik. Ha beteg a rózsa, odarebben fölé, elfelejti, hogy tündér, belebújik a rózsába, és rózsává válik. Így aztán átéli, hogy mi bántja, mitől beteg, s meg is tudja gyógyítani. Az igazi megismerésben van valami tündérszerűség." (Müller Péter)`
};
let data1 = {
  photo: `Kepek/photo1.jpg`,
  title: `A túlélés`,
  description: `"Kevés mámorítóbb érzés van annál, mint amikor az ember megtapasztalja, milyen a verem mélyéről egyedül, segítség nélkül kikapaszkodni. Mert igenis, néhány kék-zöld folt, karcolás árán, de ki lehet jönni a legmélyebb gödörből is. És aki kijött, megtanulja egy életre: képes kilátástalannak tűnő helyzeteket is túlélni és megoldhatatlannak látszó problémákat orvosolni. Egyedül. Segítség nélkül." (Szigeti Ildikó)`
};

let data2 = {
  photo: `Kepek/photo2.jpg`,
  title: `Az aggódás`,
  description: `"A világról alkotott gondolatainknak köszönhetően emelkedtünk ki az állatvilágból, ám ennek ára van. Olyan dolgok miatt is tönkretehetjük magunkat a folyamatos aggodalmaskodással, amelyek már megtörténtek, nem történtek meg, és nem is történnek meg soha. Úgy tűnik, hogy a tudatos jelenlét még feljebb emel minket. Lehetnek gondolataink, de nem kell, hogy uralkodjanak felettünk." (Jo Marchant)`
};

let data3 = {
  photo: `Kepek/photo3.jpg`,
  title: `A hit`,
  description: `"A hit a madár, amely megérzi a fényt, amikor még homályos az ég." (Valós halál c.film)`
};

let data4 = {
  photo: `Kepek/photo4.jpg`,
  title: `A test`,
  description: `"A test sohasem hazudik. Az elme mindenféle trükköt ismer, de a test mindig elárulja, hogyan érezzük magunkat. Fontos, hogy odafigyeljünk rá. A betegség például üzenet - sokszor ébresztő, hogy meglássuk végre, mi zajlik az elménkben." (Gelong Thubten)`
};

let data5 = {
  photo: `Kepek/photo5.jpg`,
  title: `A félelem`,
  description: `"Sok állat képes felidézni, mi veszélyes és mi nem, de az állatok ilyesmi miatt nem aggódnak. Az egér nyilván emlékszik arra, hogy a macska halálos veszélyt jelent számára, és ha találkozik vele, eliszkol. De nem aggódik emiatt, nem hánykolódik egész éjszaka azon rágódva, hogy ez akár másnap is előfordulhat, hanem egyszerűen elpucol. Az egér jól csinálja. Mi nem." (Ruby Wax)`
};

let data6 = {
  photo: `Kepek/photo6.jpg`,
  title: `A türelem`,
  description: `"Erő kell ahhoz, hogy tudj várni. Az pedig a gyengeség vagy a gyávaság jele, hogy lépünk, amikor nem kéne." (A zöld íjász c.film)`
};

let data7 = {
  photo: `Kepek/photo7.jpg`,
  title: `A stressz`,
  description: `"Az az elméletem, hogy a stresszt csak a nyelv kialakulása után ismertük meg. Amikor már szavakkal gondolkodtunk, és nemcsak elhajítottuk a lándzsát, hanem ki is elemeztük magunkban, hogy jól vagy rosszul hajítottuk-e el. Általában arra jutottunk, hogy rosszul." (Ruby Wax)`
};

let imagesData = [data0, data1, data2, data3, data4, data5, data6, data7];
let currentPhoto = 0;

let loadPhoto = (photoNumber) => {

  $("#photo").attr("src", imagesData[photoNumber].photo);
  $("#photo-title").html("<h3>" + imagesData[photoNumber].title + "</h3>");
  $("#photo-description").html("<p>" + imagesData[photoNumber].description + "</p>");
  
  let a = `photo` + photoNumber;
  $(".thumbnail").removeClass("highlight");
  $(document.getElementById(a)).addClass("highlight");
}

loadPhoto(currentPhoto);

$("#right").click(() => {
  currentPhoto++;
  if (currentPhoto == 8) {
    currentPhoto = 0;
    loadPhoto(currentPhoto);
  } else {
    loadPhoto(currentPhoto);
  }
  
});

$("#left").click(() => {
  currentPhoto--;
  if (currentPhoto == -1) {
    currentPhoto = 7;
    loadPhoto(currentPhoto);
  } else {
    loadPhoto(currentPhoto);
  }
});

for (let i = 0; i < imagesData.length; i++) {
    
    let itemId = "photo" + i;

  $("#container").append($('<img />').attr("id", itemId).attr("class", "thumbnail").attr("data-number", i).attr({ src: "Kepek/" + itemId + ".jpg" }));
  $("#container").append($('<h5>' + imagesData[i].title + '</h5>').attr("class", "img-title"));
};

$(document.getElementById('photo0')).addClass("highlight");

$(".thumbnail").click(() =>{ 
  let targetImage = $(event.target);
  
  $(".thumbnail").removeClass("highlight");
  $(targetImage).addClass("highlight");
  loadPhoto($(event.target).attr('data-number'));
  
});

$(".img-title").click(() => {
  let targetImage = $(event.target);

  $(".thumbnail").removeClass("highlight");
  $(targetImage).addClass("highlight");
  loadPhoto($(event.target).attr('data-number'));

});
