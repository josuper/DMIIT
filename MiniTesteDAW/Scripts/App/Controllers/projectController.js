angular
    .module('MyApp.ctrl.crud', [])
    .controller('projectController', [
        '$scope',

        function ($scope) {

            $scope.emplist = [];

            $scope.load = function () {
                $.ajax({
                    type: 'GET',
                    contentType: 'application/json; charset=utf-8',
                    url: '/Project/getList',
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
                title: '',
                startDate: '',
                endDate: '',
                description:''
            }

            $scope.clear = function () {
                $scope.emp.id = '';
                $scope.emp.title = '';
                $scope.emp.startDate = '';
                $scope.emp.endDate = '';
            }

            $scope.save = function () {
                $.ajax({
                    type: 'POST',
                    contentType: 'application/json; charset=utf-8',
                    data: JSON.stringify($scope.emp),
                    url: '/Project/save',
                    success: function (data, status) {
                        $scope.clear();
                        $scope.load();
                    },
                    error: function (status) { }
                });
            };

            $scope.edit = function (index) {
                $scope.emp.id = index.id;
                $scope.emp.title = index.title;
                $scope.emp.startDate = index.startDate;
                $scope.emp.endDate = index.endDate;
            };

            $scope.update = function () {
                $.ajax({
                    type: 'POST',
                    contentType: 'application/json; charset=utf-8',
                    data: JSON.stringify($scope.emp),
                    url: '/Project/update',
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
                        url: '/Project/delete',
                        success: function (status) {
                            console.log(status)
                            $scope.load();
                        },
                        error: function (status) { }
                    });
                }
            }

            $scope.details = function (index) {
                var memberID = $scope.emp.id;
                // var memberID = index.id;

                    $.ajax({
                        type: 'POST',
                        contentType: 'application/json; charset=utf-8',
                        data: JSON.stringify(memberID),
                        url: '/Home/details/',
                        success: function (data) {
                            console.log(data)
                            $scope.states = data;
                            $scope.$apply();
                            console.log($scope.states);
                        }
                    });                
            }

            $scope.details();

        }
    ]);