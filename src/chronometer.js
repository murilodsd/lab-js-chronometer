class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // cuidado com o this dentro do setInterval e setTimeOut,
    // e apontar para o objeto global para isso nao acontecer
    // usamos arrow functoion
    this.intervalId = setInterval(() => {
      this.currentTime = this.currentTime + 1;
      if (printTimeCallback) printTimeCallback();
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    //Para usar toString() direto em um number, precisamos por o numero entre parenteses
    if (value.toString().length < 2) {
      return ("0" + value.toString()).slice(-2);
    } else return value.toString();

    //return value.toString().padStart(2,'0')
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes(this.currentTime));
    let seconds = this.computeTwoDigitNumber(this.getSeconds(this.currentTime));
    return minutes + ':' + seconds
  }
}
