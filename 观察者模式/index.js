/**
 * 观察者模式
 */
// 观察目标对象
class Subject {
  constructor() {
    this.observers = []
  }
  addObserver(observers) {
    if (observers instanceof Array) {
      this.observers.push(...observers)
    } else {
      this.observers.push(observers)
    }
  }
  notify(data) {
    console.log(this.observers, "observers")
    this.observers.forEach((item) => {
      item.update(data)
    })
  }
  removeObserver(observer) {
    this.observers = this.observers.filter((item) => item !== observer)
  }
}

// 观察者
class Observer {
  constructor(name) {
    this.name = name
  }
  update(data) {
    console.log(`目标被更新了,newVal=${data}`, this.name)
  }
}

// 以下为测试代码
let subject = new Subject()
let observer1 = new Observer("观察者1号")
let observer2 = new Observer("观察者2号")
subject.addObserver([observer1, observer2])
subject.notify("张三")
