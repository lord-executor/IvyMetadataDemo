import { InjectionToken, ModuleWithProviders, NgModule, Type } from '@angular/core';

import { Rng } from './rng.service';
import { SampleService } from './sample.service';
import { Sample1 } from './sample1/sample1.component';

export const AppNameToken = new InjectionToken<string>("AppNameToken");

/**
 * This one fails with the error:
 * - Unable to evaluate this expression statically.
 */
function declarations(): Type<any>[] {
  return [Sample1].filter(x => x !== null);
}

/**
 * This one fails with the error:
 * - Unable to evaluate this expression statically.
 * - Unable to evaluate function call of complex function. A function must have exactly one return statement.
 */
function declarations2(): Type<any>[] {
  if (Rng.flip()) {
    return [Sample1];
  }
  return [];
}

const [firstType, secondType] = [Sample1, Sample1];

@NgModule({
  declarations: [
    Sample1,
    //...declarations(),
    //...declarations2(),
    firstType,
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
export class SampleModule {
  public static provide(): ModuleWithProviders<SampleModule> {
    return {
      ngModule: SampleModule,
      providers: [
        {
          provide: AppNameToken,
          deps: [SampleService],
          useFactory: (sampleService: SampleService) => {
            return `SampleService says ${sampleService.sayHi()}`;
          }
        }
      ]
    }
  }
}
