//entry point for application

import angular from 'angular';
import appModule from 'config';
import 'css/master.scss';

//attaches angular module to the document html
angular.bootstrap(document, [appModule.name]);