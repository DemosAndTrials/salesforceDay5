import {appModule} from "./app.module";
import IAngularStatic = angular.IAngularStatic;
declare const angular:IAngularStatic;

angular.bootstrap(document,[
    appModule.name
]);