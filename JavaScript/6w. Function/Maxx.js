// 다음 코드를 올바르게 수정하시오. (1초 후에 강아지의 이름을 출력)
const dog = {
  name: 'Maxx',
  showMyName() {
    console.log(`My name is ${this.name}.`);
  },
  // 이 부분을 수정할 것!
  // whatsYourName() {
  //   setTimeout(this.showMyName, 1000);
  // }
  whatsYourName() {
    setTimeout(() => this.showMyName(), 1000); // 화살표 함수로 바인딩
  }
};

dog.whatsYourName(); // My name is undefined. => My name is Maxx.가 출력되도록 수정할 것.