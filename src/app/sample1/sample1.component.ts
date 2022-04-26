import { Component, Inject, InjectionToken } from '@angular/core';
import { Rng } from '../rng.service';
import { SampleService } from '../sample.service';

export const TitleToken = new InjectionToken("TitleToken");

@Component({
  selector: 'app-sample1',
  template: 'sample1: {{ title }} | SampleService.sayHi &gt; {{ sampleService.sayHi() }}',
  providers: [
    {
      provide: TitleToken,
      useFactory: () => {
        return `Created by factory #${Rng.generate(100)}`
      }
    }
  ]
})
export class Sample1 {
  public constructor(
    @Inject(TitleToken) public readonly title: string,
    public readonly sampleService: SampleService
  ) {}
}
