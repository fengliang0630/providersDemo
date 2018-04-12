import { Injectable } from '@angular/core';


@Injectable()
export class UseClassDemoService {

    constructor() {
        console.log('UseClassDemoService constructor is running。。。');
    }

    test() {
        console.log('UseClassDemoService test is running。。。');
    }

}
