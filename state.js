class State {
  immediatePay = false;
  choicenPaymentMethod = 0;

  toggleImmediatePay() {
    this.immediatePay = !this.immediatePay;
  }

  getImmediatePay() {
    return this.immediatePay;
  }

  setPaymentMethod(index) {
    this.choicenPaymentMethod = index;
  }

  getPaymentMethod() {
    return this.choicenPaymentMethod;
  }
}

export default new State();
