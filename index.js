function theBeatlesPlay(artists, instruments) {
  var newSent = []
  for (var i = 0; i < artists.length; i++) {
    newSent.push(`${artists[i]} plays ${instruments[i]}`)
  }
  return newSent
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
function johnLennonFacts(facts1) {
  var i = 0
  while (i < facts1.length) {
    facts1[i] = facts1[i] + "!!!"
    i += 1
  }
  return facts1
}

function iLoveTheBeatles(num) {
  var iLove = []
  return iLove
//  var loveDecl = ["foobar"]
//  num = 15
//  var i = 7
  /*do {
    loveDecl.push("I love the Beatles!")
  } while (i < 15) {

    loveDecl.push("I love the Beatles!")
    i += 1
  }*/
//  return loveDecl
}
