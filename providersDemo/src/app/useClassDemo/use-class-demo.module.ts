import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ValueProvider } from '@angular/core/src/di/provider';
import { UseClassDemoComponent } from './use-class-demo.component';
import { UseClassDemo1Service } from './use-class-demo1.service';
import { UseClassDemoService } from './use-class-demo.service';
import { UseClassDemo2Service } from './use-class-demo2.service';
import { UseClassDemo3Service } from './use-class-demo3.service';

const loggerValue = {
  logs: ['Hello', 'World'],
  test: (msg) => {
      console.warn('From values: ' + msg);
  },

  hello: () => {
    console.warn('hello world');
  }
};

const UseClassDemo3ServiceProvider = () => {
  return new UseClassDemo3Service();
};

@NgModule({
  declarations: [
    UseClassDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    UseClassDemo2Service,
    // [{provide: UseClassDemoService, useClass: UseClassDemo2Service}]
    [{provide: UseClassDemoService, useExisting: UseClassDemo2Service}],
    [{provide: UseClassDemo1Service, useValue: loggerValue}],
    {
      provide: UseClassDemo3Service,
      useFactory: UseClassDemo3ServiceProvider,
      deps: [] // UseClassDemo3Service里面的依赖
  }
  ],
  bootstrap: [UseClassDemoComponent],
  exports: [
    UseClassDemoComponent
  ]
})
export class UseClassDemoModule { }
