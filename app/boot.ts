import {UpgradeAdapter} from '@angular/upgrade';
import {Ng2Book} from './ng2/ng2.component';

var app;
var adapter = new UpgradeAdapter();

app.directive('ng2Book', adapter.downgradeNg2Component(Ng2Book));

adapter.bootstrap(document.body, ['myApp']);
