import { Optional } from "@angular/core";

export class SampleService {
  public constructor(
    @Optional() private readonly msg: string = "HI!"
  ) {}

  public sayHi() {
    return this.msg;
  }
}
