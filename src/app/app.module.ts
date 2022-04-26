import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SampleModule } from './sample.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SampleModule.provide(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
