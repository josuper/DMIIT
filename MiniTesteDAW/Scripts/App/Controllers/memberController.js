angular
    .module('MyApp.ctrl.crud',[])
    .controller('memberController', [
        '$scope',

        function ($scope) {

            $scope.emplist = [];

            $scope.load = function () {
                $.ajax({
                    type: 'GET',
                    contentType: 'application/json; charset=utf-8',
                    url: '/Member/getList',
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
                name: '',
                username: '',
                password: ''
            }

            $scope.clear = function () {
                $scope.emp.id = '';
                $scope.emp.name = '';
                $scope.emp.username = '';
                $scope.emp.password = '';
            }

            $scope.save = function () {
                $.ajax({
                    type: 'POST',
                    contentType: 'application/json; charset=utf-8',
                    data: JSON.stringify($scope.emp),
                    url: '/Member/save',
                    success: function (data, status) {
                        $scope.clear();
                        $scope.load();
                    },
                    error: function (status) { }
                });
            };

            $scope.edit = function (index) {
                $scope.emp.id = index.id;
                $scope.emp.name = index.name;
                $scope.emp.username = index.username;
                $scope.emp.password = index.password;
            };

            $scope.update = function () {
                $.ajax({
                    type: 'POST',
                    contentType: 'application/json; charset=utf-8',
                    data: JSON.stringify($scope.emp),
                    url: '/Member/update',
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
                        url: '/Member/delete',
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