"use strict";
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'eyal';
    }
    AppComponent.prototype.addDemo = function () {
        this.name += '!';
    };
    return AppComponent;
}());
exports.appComponent = {
    controller: AppComponent,
    template: "\n    <div>\n        <h1>Hello {{$ctrl.name}}</h1>\n        <button ng-click=\"$ctrl.addDemo()\">Add</button>\n    </div>\n" };
//# sourceMappingURL=app.component.js.map