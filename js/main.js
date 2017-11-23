$(document).ready( function () {

// list of people
// ["img/","","",""],

var PPL = [
  ["img/ada.png","Ada Lovelace","Often said to be the first computer programmer, she published notes on the proposed Analytical Engine in 1848 which became a critical document inspiring the first modern computers.","https://en.wikipedia.org/wiki/Ada_Lovelace", ""],
  ["img/grace.png","Grace Hopper","The &apos;Queen of Software&apos;, Grace worked on the first commercial computer in the US, created the first compiler and invented the first programming language to use English, rather than mathematical notation.","https://en.wikipedia.org/wiki/Grace_Hopper", ""],
  // ["img/edith.png","Edith Clarke","Edith was the first woman to be awarded an MSc in electrical engineering by MIT in 1912 and later went on to become the first professionally employed electrical engineer in the US.","https://en.wikipedia.org/wiki/Edith_Clarke", ""],
  ["img/dorothy.png","Dorothy Vaughan","Recently immortalised in the film &apos;Hidden Figures&apos;, Dorothy was the first African-American woman to supervise a group of staff at NACA (predecessor of NASA). She prepared for the introduction of computers by teaching her and her staff FORTRAN.","https://en.wikipedia.org/wiki/Dorothy_Vaughan", ""],
  // ["img/mary.png","Mary Kenneth Keller","Mary became the first woman to gain a PhD in computer science in 1965 and played a key role in developing the BASIC programming language.","https://en.wikipedia.org/wiki/Mary_Kenneth_Keller", ""],
  ["img/hedy.png","Hedy Lamarr","Not only a Hollywood superstar, Hedy invented spread-spectrum radio, the technology that makes Wi-Fi, Bluetooth and GPS systems possible.","https://en.wikipedia.org/wiki/Hedy_Lamarr#Inventor", ""],
  ["img/rosza.png","Rósza Péter","Rósa was a mathematician and founder of recursive function theory, which she applied to computers from the mid-1950s on.","https://en.wikipedia.org/wiki/R%C3%B3zsa_P%C3%A9ter", ""],
];

function randomItem(arr) {

  var index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

function constructor(person, i) {
  // zero-based counting aye haha
  i++;

  var fullName = person[1];
  var indexy = fullName.indexOf(' ');
  var firstName = fullName.slice(0, indexy);

  $(".js-name-" + i).text(firstName);

  var tops = [
    "top-0",
    "top-1",
    "top-2",
    "top--1",
    "top--2"
  ];

  var sides = [
    "left-0",
    "left-1",
    "left-2",
    "left--1",
    "left--2",
    "right-0",
    "right-1",
    "right-2",
    "right--1",
    "right--2",
  ];

  var div =
  "<div class='ba b--purple js-person h6 mw5dot5-ns w-100 bg-dark-green" +
  " ma4 cover bg-center'><ul class='js-list list relative " +
  randomItem(tops) + " " + randomItem(sides) + " " +
  "list bg-white inconsolata f4 tl ma3 tc pa2 bg-white ba b--purple'>" +
  "<li class='js-name prociono ma3'><a name='p"+ i +"' class='link'>" + person[1] + "</a></li><li class='js-info dn'>" + person[2]
  + "<a href='" + person[3] + "' class='db purple hover-dark-green'>More on wiki&nearr;</a></li>" +
  "<li class='trans-soft js-triangle'><img class='center db' src='img/triangle.svg' alt='More?'></li></ul></div>"

  $(".js-people").append(div);
  $(".js-person:last").css("backgroundImage", "url(" + person[0] + ")");

}

function pickPeople(n) {
  var clipboard = PPL.slice(0);
  for (var i = 0; i < n; i++) {

    // repeats only if clipboard is empty
    if (clipboard.length < 1) {
      clipboard = PPL.slice(0);
    }

    var index = Math.floor(Math.random() * clipboard.length);
    var person = clipboard[index];
    clipboard.splice(index, 1);
    constructor(person, i);
  }
}

function appendMe() {

  var me =
  "<div class='ba b--purple h6 mw5dot5-ns w-100 bg-dark-green ma4 cover bg-center' style='background-image: url(img/me.png)'>" +
  "<ul class='js-list list relative top-3 left--2 list bg-white inconsolata f4 tl mw5-ns ma3 tc pa2 bg-white ba b--purple'>" +
  "<li class='js-name prociono ma3'><a name='pme' class='link'>... me?</a></li>" +
  "<li class='mb3'>You are a designer, rebel, disruptor, engineer, programmer, technologist, strategist, inspiration, researcher, facilitator, advocate, <span class='b i'>role model.</span></li>" +
  "</div>"

  $(".js-people").append(me);
}

function sliders() {
  // UI functionality
  $(".js-list").click(function () {
    $(this).children(".js-info").slideToggle();
    $(this).children(".js-triangle").toggleClass("flip-h");
  });
}


pickPeople(3);
appendMe();
sliders();
});
