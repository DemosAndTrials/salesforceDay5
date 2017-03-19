import IComponentOptions = angular.IComponentOptions;

class AppComponent{
    name:string = 'eyal';
    addDemo(){
        this.name += '!';
    }
}

export const appComponent : IComponentOptions = {
    controller: AppComponent,
    template : `
    <div>
        <h1>Hello {{$ctrl.name}}</h1>
        <button ng-click="$ctrl.addDemo()">Add</button>
    </div>
`};