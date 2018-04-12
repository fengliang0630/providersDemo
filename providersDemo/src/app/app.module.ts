import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UseClassDemoService } from './useClassDemo/use-class-demo.service';
import { ValueProvider } from '@angular/core/src/di/provider';
import { UseClassDemoModule } from './useClassDemo/use-class-demo.module';

const provider: ValueProvider = {provide: 'someToken', useValue: 'someValue'};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UseClassDemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
