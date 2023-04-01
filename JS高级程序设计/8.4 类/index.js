const a = {
  // name: {
  //   set(val) {
  //     this.name = val + '后缀';
  //   },
  //   get() {
  //     return this.name;
  //   }
  // },
  set name(val) {
    this.name_ = val + '后缀';
  },
  get name() {
    return this.name_;
  }
};

a.name = 'zhangli';
console.log(a.name);
