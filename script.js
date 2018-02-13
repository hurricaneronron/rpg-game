$(document).ready( function ( ) {
// array of char obj
var charArr = [
  {
    name: "Belle",
    hp: 140,
    attack: 5,
    counter: 23,
    image: "./assets/images/belle.jpeg"
  },
  {
    name: "Cinderella",
    hp: 120,
    attack: 4,
    counter: 24,
    image: "./assets/images/cinderella.jpeg"
  },
  {
    name: "Jasmine",
    hp: 150,
    attack: 6,
    counter: 22,
    image: "./assets/images/jasmine.jpeg"
  },
  {
    name: "Merida",
    hp: 100,
    attack: 7,
    counter: 21,
    image: "./assets/images/merida.jpeg"
  },
  {
    name: "Mulan",
    hp: 110,
    attack: 8,
    counter: 20,
    image: "./assets/images/mulan.jpeg"
  },
  {
    name: "Snow White",
    hp: 130,
    attack: 3,
    counter: 25,
    image: "./assets/images/snow-white.jpeg"
  },
]
// chosen hero obj
var chosenHero
// is hero chosen bool
var isHeroChosen
// chosen enemy obj
var chosenEnemy
// is enemy chosen bool
var isEnemyChosen

var heroHeatlh
var enemyHealth = 0
var heroAttack = 0
var enemiesLeft = 5

// init game function
function initGame ( ) {
  isHeroChosen = false
  isEnemyChosen = false
  var num = Math.floor( 12 / charArr.length )
  for ( var i = 0 ; i < charArr.length ; i++ ) {
    var charThing = $("<div id='character-"+i+"' class='char col-md-"+num+"' value='"+i+"'></div>")
    charThing.html(
      "<img src='"+charArr[i].image+"' style='width:125px; height=175px; border: 10px solid purple;'/><h3 style='text-align:center'>"+charArr[i].name+"</h3><h5 style='text-align:center'>Health: "+charArr[i].hp+"<h5 style='text-align:center'>Attack: "+charArr[i].attack+"</h5><h5 style='text-align:center'>Counter-Attack: "+charArr[i].counter+"</h5>"
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
  isHeroAlive = true
  $(".myHero").append($(this))
  heroHealth = chosenHero.hp
  }

  else if( !isEnemyChosen ) {
  chosenEnemy = charArr[$(this).attr("value")]
  console.log(chosenEnemy)
  isEnemyChosen = true
  isEnemyAlive = true
  $(".myEnemy").append($(this))
  $(".characters").hide( )
  fillStats( )
  $(".heading").html("<h1>Let's Fight!</h1>")
  enemiesLeft--
  }
})

function fillStats ( ) {
  var attackButton = $("<button type='button' class='btn btn-danger btn-lg'>ATTACK!</button>")
  $(".stats").empty( )
  
  $(".stats").append("<h4 id='hh'>Hero Health: "+heroHealth+"</h4>")
  enemyHealth = chosenEnemy.hp
  $(".stats").append("<h4 id='eh'>Enemy Health: "+enemyHealth+"</h4><br><br>")
  $(".stats").append(attackButton)
  $(".stats").append("<br><br><h4 id='gameText'></h4>")
}

// attack function
$(document).on("click", ".btn-danger", function ( ) {
  attackFunction( )
})

function attackFunction ( ) {  
  
  var enemyAttack = chosenEnemy.counter

  if( (isHeroChosen = true) && (isEnemyChosen = true) ) {
    for( i = 0; i < chosenHero.attack; i++ ) {
      if ( i === 1 ) {break;}
      heroAttack = heroAttack + chosenHero.attack
      console.log(heroAttack)
    }
    $("#gameText").html("<p>"+chosenHero.name+" attacked for "+heroAttack+" points.</p><p>"+chosenEnemy.name+" counter-attacked for "+enemyAttack+" points.</p>")
    heroHealth = (heroHealth - enemyAttack)
    $("#hh").html("Hero Health: "+heroHealth+"")
    enemyHealth = (enemyHealth - heroAttack)
    $("#eh").html("Enemy Health: "+enemyHealth+"")
  }
  
  // end game
  var resetButton = $("<button type='button' class='btn btn-primary btn-lg'>Reset</button>")

  if( heroHealth <= 0 ) {
    $("#hh").html("Hero Health: 0")
    $(".heading").html("<h1>Oh no! Your hero has died. Try again.</h1>")
    $(".btn-danger").hide( )
    $(".stats").append(resetButton)
  }
  
  if( enemyHealth <= 0 ) {
    $(".myEnemy").empty( )
    $(".btn-danger").hide( )
    continuePlay ( )
  }
  
  function continuePlay ( ) {
    $(".characters").show( )
    isEnemyChosen = false
    $("#eh").empty( )
    $(".heading").html("<h1>Congratulations! You defeated your enemy!</h1><h1>Choose a new one!</h1>")
      if (enemiesLeft === 0) {
        $(".heading").html("<h1>You win! You have defeated all the enemies.")
        $(".gameText").empty( )
      }
  }
  $(document).on("click", ".btn-primary", function ( ) {
    location.reload( )
  })
}
})