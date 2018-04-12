/**
   *    UseClassDemoService 实际上注入的是 UseClassDemo2Service   看module的配置  useClass,useExisting
   *    useClass  会实例化一个新的对象  调用UseClassDemo2Service的构造器
   *    useExisting  不会实例化新的对象   不调用UseClassDemo2Service的构造器  用已经注册进来的对象
   *    useValue   UseClassDemo1Service不会实例化   实际上是使用的loggerValue这个个对象的东西
   *    UseClassDemo3Service  是useFactory构造的实例
   */