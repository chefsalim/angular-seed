import {UpgradeAdapter} from '@angular/upgrade';
import {Ng2Book} from './ng2/ng2.component';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', []);

var adapter = new UpgradeAdapter();

app.directive('ng2Book', adapter.downgradeNg2Component(Ng2Book));
console.log("Bootstrapping");

adapter.bootstrap(document.body, ['myApp']);
