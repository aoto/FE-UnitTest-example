class Hello {
  constructor() {
    this.name = 'hi';
    console.log('Hello init');
  }

  hi() {
    return 'hi';
  }
}

export default Hello;


// module hot replacement
if(module.hot) {
  module.hot.accept();
}