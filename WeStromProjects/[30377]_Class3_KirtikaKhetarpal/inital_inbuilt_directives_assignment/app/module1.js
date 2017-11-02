/**
 * Created by viveksh2 on 6/29/16.
 */

angular.module('module1',['module2','module3'])
    .controller('module1Ctrl', function ($scope, $http,myFactoryAsService) {
        $scope.getDataFromServer = function () {
            myFactoryAsService.getData().then(
                function(res){
                    console.log(res.data);
                    $scope.flights = res.data;
                }
                ,function (err) {
                    console.log(err.message);
            })
        };

        $scope.getDataFromServer();
        $scope.toggleTemplate = function () {
                return $scope.table? "templates/tableViewTemplate1.html":"templates/listViewTable.html";
        };
        $scope.cssMsg="Change Css :"
        $scope.tableTemplateMessage="Table Template ";

    });

