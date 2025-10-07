jest.mock('react-native-svg');

// Mock React Native modules that use Flow types incompatible with Jest
jest.mock('react-native/Libraries/vendor/emitter/EventEmitter', () => {
  return class EventEmitter {
    constructor() {
      this.listeners = {};
    }
    
    addListener(event, listener) {
      if (!this.listeners[event]) {
        this.listeners[event] = [];
      }
      this.listeners[event].push(listener);
      return {
        remove: () => {
          const index = this.listeners[event].indexOf(listener);
          if (index > -1) {
            this.listeners[event].splice(index, 1);
          }
        }
      };
    }
    
    emit(event, ...args) {
      if (this.listeners[event]) {
        this.listeners[event].forEach(listener => listener(...args));
      }
    }
    
    removeAllListeners(event) {
      if (event) {
        delete this.listeners[event];
      } else {
        this.listeners = {};
      }
    }
  };
});

// Mock NativeWind cssInterop to avoid native module calls
jest.mock('nativewind', () => ({
  cssInterop: () => {},
  styled: (component) => component
}));