type Event = (value?) => void;

class Emitter {
  events = Object.create(null);
  on(type: string, handler: Event) {
    (this.events[type] || (this.events[type] = [])).push(handler);
  }
  off(type: string, handler: Event) {
    this.events[type] &&
      this.events[type].splice(this.events[type].indexOf(handler) >>> 0, 1);
  }
  emit(type: string, ...args) {
    (this.events[type] || []).forEach(handler => handler(args));
  }
}

export default Emitter;
