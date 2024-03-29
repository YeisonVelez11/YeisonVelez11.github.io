(function(module) {
try {
  module = angular.module('docApp');
} catch (e) {
  module = angular.module('docApp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('src/main.html',
    '<div><div ng-include="\'src/navbar.html\'"></div><div class="row"><div class="col-md-12" ng-if="!docs.currentArea" ng-include="docs.partialPath"></div><div class="col-md-3" ng-if="docs.currentArea"><ul class="nav-list naked-list"><li ng-repeat="navGroup in docs.currentArea.navGroups" class="nav-index-group"><a class="nav-index-group-heading" ng-href="{{navGroup.href}}"><span>{{navGroup.name}}</span></a><ul><li ng-repeat="navItem in navGroup.navItems" ng-class="docs.navState(navItem)" class="nav-index-listing"><a ng-href="{{navItem.href}}"><span>{{navItem.name}}</span></a></li></ul></li></ul></div><div class="col-md-9" ng-if="docs.currentArea" ng-include="docs.partialPath" autoscroll="true"></div></div><hr><div class="footer"><p>With ♥ from <a href="https://github.com/BIOS">BIOS</a></p></div></div>');
}]);
})();
