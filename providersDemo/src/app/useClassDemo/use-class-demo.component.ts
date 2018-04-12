
import { Component } from '@angular/core';
import { UseClassDemoService } from './use-class-demo.service';
import { UseClassDemo2Service } from './use-class-demo2.service';
import { UseClassDemo1Service } from './use-class-demo1.service';
import { UseClassDemo3Service } from './use-class-demo3.service';

@Component({
  selector: 'class-demo',
  template: `
  <div>asd</div>
  `
})
export class UseClassDemoComponent {

  /**
   *    UseClassDemoService 实际上注入的是 UseClassDemo2Service   看module的配置  useClass,useExisting
   *    useClass  会实例化一个新的对象  调用UseClassDemo2Service的构造器
   *    useExisting  不会实例化新的对象   不调用UseClassDemo2Service的构造器  用已经注册进来的对象
   *    useValue   UseClassDemo1Service不会实例化   实际上是使用的loggerValue这个个对象的东西
   *    UseClassDemo3Service  是useFactory构造的实例
   */
  constructor(
    private useClassDemoService: UseClassDemoService,
    private useClassDemo2Service: UseClassDemo2Service,
    private useClassDemo1Service: UseClassDemo1Service,
    private useClassDemo3Service: UseClassDemo3Service

  ) {
    // 调用的useClassDemo2Service的test方法
    this.useClassDemoService.test();

    // 调用的useClassDemo2Service的test方法
    this.useClassDemo2Service.test();

    // 调用的loggerValue的test方法
    this.useClassDemo1Service.test();

    // 输出的loggerValue的logs属性
    console.log(this.useClassDemo1Service['logs']);

    // 调用的loggerValue的hello方法
    this.useClassDemo1Service['hello']();

    // 调用的useClassDemo3Service的test方法
    this.useClassDemo3Service.test();
  }
}
