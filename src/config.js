import angular from 'angular';
import uiRouter from 'angular-ui-router';
import skillsController from 'skills/skills'

const app = angular.module('app', [uiRouter]);
  //config for uiRouter.  applied during bootstrap process
  app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {

    //undefined routes go to base
    $urlRouterProvider.otherwise('/');

    //define routes
    $stateProvider
      .state('skills', {
        url: '/',
        template: require('skills/skills.html'),
        controller: skillsController
      })
      .state('about', {
        url: '/about',
        template: require('about/about.html')
      })

    //make clean urls
    $locationProvider.html5Mode(true);
  });

  export default app;