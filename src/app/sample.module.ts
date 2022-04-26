import { NgModule } from '@angular/core';

import { Rng } from './rng.service';
import { SampleService } from './sample.service';
import { Sample1 } from './sample1/sample1.component';

@NgModule({
  declarations: [
    Sample1
  ],
  exports: [
    Sample1
  ],
  providers: [
    {
      provide: SampleService,
      useValue: (() => {
        if (Rng.flip()) {
          return new SampleService("Heads");
        } else {
          return new SampleService("Tails");
        }
      })()
    }
  ]
})
export class SampleModule { }
