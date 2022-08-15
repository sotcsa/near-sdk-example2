import { NearBindgen, NearContract, near, call, view } from "near-sdk-js";

@NearBindgen
class Counter extends NearContract {

  count: number;

  constructor({ initial = 0 }) {
    super();
    this.count = initial;
  }

  default() {
    return new Counter({ initial: 100 });
  }

  @call
  increase( num: 1): void {
    this.count += num;
    near.log(`Counter increased to ${this.count}`);
  }

  @call
  decrease( num: 1): void {
    this.count -= num;
    near.log(`Counter decreased to ${this.count}`);
  }

  @view
  get(): number {
    near.log(`The counter value is ${this.count}`);
    return this.count;
  }
}
