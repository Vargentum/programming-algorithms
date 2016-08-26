/*
Используя IIFE создать таймер, таймер умеет отсчитывать минуты и секунды, выводить информацию на странице, с постоянным автообновлением, использовать патерн module.
У таймера реализовать публичные методы:
init (Пример использования timer.init(element)), данный метод нужен для первоначальной инициализации таймера, принимает 1 параметр DOM элемент, в котором выводится результат
start (Пример использования timer.start()), данный метод нужен для изменения времени
stop (Пример использования timer.stop()), останавливает счетчик
clear (Пример использования timer.clear()), сбрасывает значение в 0
Реализовать закрытый метод render, для вставки и изменения информации на странице html.
Создать кнопочки для управления таймером (Старт, Стоп, Очистить)
*/

const Timer = (function() {
  const state = {
    counter: 0
  }
  const publicAPI = {
    init(element) {
      element.appendChild(render()) 
    },
    start() {
      state.counter++
      syncStateWithMarkup()
      this.timerId = setTimeout(this.start.bind(this), 1000)
    },
    stop() {
      clearInterval(this.timerId)
      syncStateWithMarkup()
    },
    clear() {
      state.counter = 0
      syncStateWithMarkup()
    }
  }
  const markup = {
    wrap: document.createElement('div'),
    counter: document.createElement('h1'),
    controls: ['start', 'stop', 'clear'].map(initControlFrom)
  }
  function initControlFrom(method) {
    const b = document.createElement('button')
    b.innerHTML = method
    b.addEventListener('click', publicAPI[method].bind(publicAPI))
    return b
  }
  function syncStateWithMarkup() {
    markup.counter.innerHTML = humanize(state.counter)
  }
  function render() {
    const {wrap, controls, counter} = markup
    wrap.appendChild(counter)
    controls.forEach(function(v) {
      wrap.appendChild(v)
    })
    syncStateWithMarkup()
    return wrap
  }
  function humanize(totalSec) {
    const min = Math.round(totalSec / 60)
    const sec = totalSec % 60
    const [prettyMin, prettySec] = [min, sec].map((v) => v < 10 ? '0' + v : v)
    return `${prettyMin}:${prettySec}`
  }
  return Object.create(publicAPI)
})()


Timer.init(test)



