/*@ngInject*/
module.exports = function($rootScope, $uibModal, $state) {
  'use strict';

  $rootScope.$on('$stateChangeStart', onStateChangeStart);

  /////

  function onStateChangeStart(event, toState, toParams, fromState, fromParams) {
    if (!toState.isModal) return;

    event.preventDefault();

    $uibModal
      .open({
        template: toState.template
      })
      .result
      .finally(function() {
        $state.go(fromState.name);
      });
  }
}