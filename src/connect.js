export default function(connector) {
  return class extends Container {
    constructor() {
      super();

      this.on('added', () => {});
      this.on('removed', () => {});
    }
  }
};
