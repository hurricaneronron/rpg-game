$(document).ready( function ( ) {
// array of char obj
var charArr = [
  {
    name: "Belle",
    hp: 50,
    image: "./assets/images/belle.jpeg"
  },
  {
    name: "Cinderella",
    hp: 50,
    image: "./assets/images/cinderella.jpeg"
  },
  {
    name: "Jasmine",
    hp: 50,
    image: "./assets/images/jasmine.jpeg"
  },
  {
    name: "Merida",
    hp: 50,
    image: "./assets/images/merida.jpeg"
  },
  {
    name: "Mulan",
    hp: 50,
    image: "./assets/images/mulan.jpeg"
  },
  {
    name: "Snow White",
    hp: 50,
    image: "./assets/images/snow-white.jpeg"
  },
]
// chosen hero obj
var chosenHero
// is hero chosen bool
var isHeroChosen
// is hero alive bool
var isHeroAlive
// chosen enemy obj
var chosenEnemy
// is enemy chosen bool
var isEnemyChosen
// is enemy alive bool
var isEnemyAlive
// init game function
function initGame ( ) {
  isHeroChosen = false
  isEnemyChosen = false
  var num = Math.floor( 12 / charArr.length )
  for ( var i = 0 ; i < charArr.length ; i++ ) {
    var charThing = $("<div id='character-"+i+"' class='char col-md-"+num+"' value='"+i+"'></div>")
    charThing.html(
      "<img src='"+charArr[i].image+"' style='width:100px; height=150px; border: 2px solid purple'/><h3>"+charArr[i].name+"</h3>"
    )
    $(".characters").append(charThing)
  }
}

initGame( )

$(document).on("click", ".char", function ( ) {
  if( !isHeroChosen ) {
  chosenHero = charArr[$(this).attr("value")]
  console.log(chosenHero)
  isHeroChosen = true
  // $(this).addClass("fader")
  $(".myHero").append($(this))
  }

  else if( !isEnemyChosen ) {
  chosenEnemy = charArr[$(this).attr("value")]
  console.log(chosenEnemy)
  isEnemyChosen = true
  // $(this).addClass("fader")
  $(".myEnemy").append($(this))
  $(".characters").hide( )
  fillStats( )
  }
})

function fillStats ( ) {
  var attackButton = $("<button type='button' class='btn btn-danger'>ATTACK!</button>")
  $(".stats").append("<h4>Hero Health: </h4>")
  $(".stats").append("<h4>Enemy Health: </h4>")
  $(".stats").append("<h5></h5>")
  $(".stats").append(attackButton)
}



// attack function
// while( isHeroAlive = true ) {

// }
// consider using a time delay

// reset game function
// var resetButton = $("<button type='button' class='btn btn-primary'>Reset</button>")

// if( isHeroAlive = false ) {
//   $(".stats").html(resetButton)
// }

// function resetGame ( ) {
//   $(".characters").display( )
//   isHeroChosen = false
//   isEnemyChosen = false
//   $(".gameplay").empty( )
// }

// $(resetButton).on("click", resetGame ( ))

})