# 观察者模式

## 介绍

> 观察者模式包含观察目标和观察者两类对象,一个目标可以有任意数目的与之相依赖的观察者,—旦观察目标的状态发生改变，所有的观察者都将得到通知。

当一个对象的状态发生改变时，所有依赖于它的对象都得到通知并被自动更新，解决了主体对象与观察者之间功能的耦合，即一个对象状态改变给其他对象通知的问题。

## 编码实现

```js
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
```

## 优势

目标者与观察者，功能耦合度降低，专注自身功能逻辑；观察者被动接收更新，时间上解耦，实时接收目标者更新状态。

## 缺点

观察者模式虽然实现了对象间依赖关系的低耦合，但却不能对事件通知进行细分管控，如“筛选通知”，“指定主题事件通知”。
