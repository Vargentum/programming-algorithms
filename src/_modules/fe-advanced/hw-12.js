var Factory = (function(){
  var animals = ['dog', 'cat']
  var publicAPI = {
    init(type){
      var idx = animals.indexOf(type)
      if(idx === -1) return
      else return Object.create(animalPrototypes[idx])
    }
  }
  var animalPrototypes = animals.map(createProtoFrom)
  function createProtoFrom(type) {
    return Object.create(publicAPI, {
      'say': {
        value: function() {
          return 'I am a ' + type
        }
      }
    })
  }
  return Object.create(publicAPI)
})()


var d1 = Factory.init('dog')
console.log(d1.say())
console.log(d1.init)
var c1 = Factory.init('cat')
console.log(c1.say())
console.log(c1.init)
