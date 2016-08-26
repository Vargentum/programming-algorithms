// 1. Создайте функцию closure, которая при своем вызове возвращает количество своих вызовов.
function closureFactory() {
  var totalCalls = 0
  return function() {
    return ++totalCalls
  }
} 
var closure = closureFactory()
closure() // 1
closure() // 2


// 2. Перепешите данную функцию, чтобы получить в консоли "Hello, GoIT"

Function.prototype.bind = function(context) {
  var fn = this
  return function() {
    return fn.apply(context, fn.arguments)
  }
}

var HelloPage = {
   name: 'GoIT',
   init: function() {
      console.log('Hello, ' + this.name);
   }
}

window.onload = HelloPage.init.bind(HelloPage);
 

// 3. У вас есть массив ссылок, и ваша задача переписать данный код таким образом, чтобы при клике на каждую выводился ее порядковый номер.
for (var i = 0; i < links.length; i++) {
  (function(i) {
    links[i].onclick = function() {
      console.log(i);
    }
  })(i)
}
