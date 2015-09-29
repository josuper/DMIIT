angular
    .module('MyApp.ctrl.crud', [])
    .controller('officeController', [
        '$scope',

        function ($scope) {

            $scope.emplist = [];

            $scope.load = function () {
                $.ajax({
                    type: 'GET',
                    contentType: 'application/json; charset=utf-8',
                    url: '/Office/getList',
                    success: function (data) {
                        $scope.emplist = data;
                        $scope.$apply();
                        console.log($scope.emplist);
                    }
                });
            }

            $scope.load();

            $scope.emp = {
                id: '',
                designation: '',
                description: ''
            }

            $scope.clear = function () {
                $scope.emp.id = '';
                $scope.emp.designation = '';
                $scope.emp.description = '';
            }

            $scope.save = function () {
                $.ajax({
                    type: 'POST',
                    contentType: 'application/json; charset=utf-8',
                    data: JSON.stringify($scope.emp),
                    url: '/Office/save',
                    success: function (data, status) {
                        $scope.clear();
                        $scope.load();
                    },
                    error: function (status) { }
                });
            };

            $scope.edit = function (index) {
                $scope.emp.id = index.id;
                $scope.emp.designation = index.designation;
                $scope.emp.description = index.description;
            };

            $scope.update = function () {
                $.ajax({
                    type: 'POST',
                    contentType: 'application/json; charset=utf-8',
                    data: JSON.stringify($scope.emp),
                    url: '/Office/update',
                    success: function (data, status) {
                        console.log(data)
                        $scope.clear();
                        $scope.load();
                    },
                    error: function (status) { }
                });
            };

            $scope.delete = function (data) {
                var state = confirm("Deseja mesmo apagar esse registo");
                if (state == true) {
                    $.ajax({
                        type: 'POST',
                        contentType: 'application/json; charset=utf-8',
                        //data: "{ id: "+data.id+" }",
                        data: JSON.stringify(data),
                        url: '/Office/delete',
                        success: function (status) {
                            console.log(status)
                            $scope.load();
                        },
                        error: function (status) { }
                    });
                }
            }
        }
    ]);