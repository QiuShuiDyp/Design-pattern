/**
 * 发布订阅模式
 */
const PubSub = {
  subs: {},
  // 收集订阅者
  subscribe(topic, cb) {
    if (this.subs[topic]) {
      this.subs[topic].push(cb)
    } else {
      this.subs[topic] = [cb]
    }
  },
  // 取消订阅,如果没有传cb，则取消该topic下所有订阅
  unSubscribe(topic, cb) {
    if (!this.subs[topic]) return
    if (cb) {
      this.subs[topic] = this.subs[topic].filter((item) => item !== cb)
    } else {
      this.subs[topic].length = 0
    }
  },
  // 发布消息
  publish(topic, data) {
    if (this.subs[topic]) {
      this.subs[topic].forEach((element) => {
        element(data)
      })
    }
  },
}

// 测试代码
function testA(data) {
  console.log("testA", data)
}
function testB(data) {
  console.log("testB", data)
}

PubSub.subscribe("a", testA)
PubSub.subscribe("a", testB)
PubSub.subscribe("b", testB)

PubSub.publish("a", "a被触发")
PubSub.unSubscribe("a")
PubSub.publish("a", "a被触发")
PubSub.publish("b", "b被触发")
