import IAngularStatic = angular.IAngularStatic;
import {appComponent} from "./app.component";
declare const angular:IAngularStatic;

export const appModule = angular
    .module('app.module',[])
    .component('myApp',appComponent);