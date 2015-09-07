/**
 *
 *
 * Created by hongboing on 9/7/15.
 */
angular
    .module('myApp')
    .controller('ParamController', ParamController);
function ParamController($routeParams) {
    var vm = this;
    vm.param = $routeParams.itemId;
}
