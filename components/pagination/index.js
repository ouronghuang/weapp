Component({
  options: {
    addGlobalClass: true
  },
  properties: {
    current: Number,
    end: Number
  },
  data: {
    start: 1
  },
  methods: {
    _prev() {
      if (this.data.current <= this.data.start) {
        return;
      }

      this._handleChange(this.data.current - 1);
    },
    _next() {
      if (this.data.current >= this.data.end) {
        return;
      }

      this._handleChange(this.data.current + 1);
    },
    _handleChange(page) {
      this.triggerEvent('change', page);
    }
  }
});
