/* -----------------------------
  Part 1: Rewrite timer from hw-10 with es6 classes.
  Look here for practical example: https://jsbin.com/pewamew/edit?js,console,output
  P.S In this case there isn't trully private data :(
----------------------------- */
class Timer {
  static humanize(totalSec) {
    const min = Math.round(totalSec / 60)
    const sec = totalSec % 60
    const [prettyMin, prettySec] = [min, sec].map((v) => v < 10 ? '0' + v : v)
    return `${prettyMin}:${prettySec}`
  }
  constructor(args) {
    this._initMarkup()
    this._initCounter()
  }
  _initMarkup() {
    this._markup = {
      wrap: document.createElement('div'),
      counter: document.createElement('h1'),
      controls: ['start', 'stop', 'clear'].map(this._initControlFrom.bind(this))
    }
  }
  _initCounter() {
    this._counter = 0
  }
  _initControlFrom(method) {
    const b = document.createElement('button')
    b.innerHTML = method
    b.addEventListener('click', this[method].bind(this))
    return b
  }
  _syncStateWithMarkup() {
    this._markup.counter.innerHTML = Timer.humanize(this._counter)
  }
  _render() {
    const {wrap, controls, counter} = this._markup
    wrap.appendChild(counter)
    controls.forEach(function(v) {
      wrap.appendChild(v)
    })
    this._syncStateWithMarkup()
    return wrap
  }
  // public API
  init(element) {
    element.appendChild(this._render())
  }
  start() {
    this._counter++
    this._syncStateWithMarkup()
    this._timerId = setTimeout(this.start.bind(this), 1000)
  }
  stop() {
    clearInterval(this._timerId)
    this._syncStateWithMarkup()
  }
  clear() {
    this._counter = 0
    this._syncStateWithMarkup()
  }
}

// const t = new Timer
// t.init(test)


/* -----------------------------
  Part 2: rewrite animal factory from hw-12
----------------------------- */
class Factory {
  static animals = ['dog', 'cat']
  init(type) {
    if (Factory.animals.include(type)) {
      /*
      Seems like a Problem:
        - to extend Dog and Cat with Factory, you should define it AFTER
        - to use Dog or Cat here, they should be defined BEFORE
      */
    }
  }
}

class Dog extends Factory {
  say() {
    return 'I am a dog'
  }
}
class Cat extends Factory {
  say() {
    return 'I am a cat'
  }
}

