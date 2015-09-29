angular
    .module('MyApp.ctrl.crud', [])
    .controller('tarefaController', [
        '$scope',

        function ($scope) {

            $scope.emplist = [];

            $scope.load = function () {
                $.ajax({
                    type: 'GET',
                    contentType: 'application/json; charset=utf-8',
                    url: '/Tarefa/getList',
                    success: function (data) {
                        $scope.emplist = data;
                        $scope.$apply();
                        console.log($scope.emplist);
                    }
                });
            }

            $scope.load();

            /*-------------  FUNCAO PARA PEGAR  Lista de Projectos e Membro  ---------------------*/

           //Projecto
            GetProject();

            function GetProject() {
                $.ajax({
                    type: 'GET',
                    contentType: 'application/json; charset=utf-8',
                    url: '/Tarefa/GetProject',
                    success: function (data) {
                        $scope.arrayProject = data;
                        $scope.$apply();
                        console.log($scope.emplist);
                    }
                });
            }

            //Membro
            GetMember();

            function GetMember() {
                $.ajax({
                    type: 'GET',
                    contentType: 'application/json; charset=utf-8',
                    url: '/Tarefa/GetMember',
                    success: function (data) {
                        $scope.arrayMember = data;
                        $scope.$apply();
                         console.log($scope.emplist);
                    }
                });
            }


            //RECUPERAR OS VALORES ESCOLHIDOS-----------------
        /*    $scope.Result = null;
            $scope.Project.id = null;
            $scope.Member.id = null;

            $scope.ShowResult = function () {
                $scope.Result = "Project: " + $scope.Project.id + " Member: " + $scope.Member.id;
            }
            */
            /*-----------------------------------*/

            

            
/*
            $scope.emplist1 = [];

            $scope.load = function () {
                $.ajax({
                    type: 'GET',
                    contentType: 'application/json; charset=utf-8',
                    url: '/Tarefa/getListProject',
                    data: $scope.emplist,
                    success: function (data) {
                        $scope.emplist1 = data;
                        $scope.$apply();
                        console.log($scope.emplist1);
                    }
                });
            }

            $scope.load();
            */
        /*    $scope.GetStates = function () {
                var id = $scope.project;
                if (countryId) {
                    $http({
                        method: 'POST',
                        url: '/Home/GetStates/',
                        data: JSON.stringify({ countryId: id })
                    }).success(function (data, status, headers, config) {
                        $scope.states = data;
                    }).error(function (data, status, headers, config) {
                        $scope.message = 'Unexpected Error';
                    });
                }
                else {
                    $scope.states = null;
                }
            }*/



            $scope.emp = {
                memberCod: '',
                trabalhoCod: '',
                //cod_member: '',
                //cod_project: '',
                // title: ''
                description: ''
            }

          /*  $scope.clear = function () {
                $scope.emp.memberCod = '';
                $scope.emp.trabalhoCod = '';
            }*/

            $scope.save = function () {
                $.ajax({
                    type: 'POST',
                    contentType: 'application/json; charset=utf-8',
                    data: JSON.stringify($scope.emp),
                    url: '/Tarefa/save',
                    success: function (data, status) {
                        
                        $scope.load();
                        $scope.clear();
                    },
                    error: function (status) { }
                });
            };

            $scope.edit = function (index) {
                $scope.emp.trabalhoCod = index.trabalhoCod;
                $scope.emp.memberCod = index.memberCod;
                $scope.emp.description = index.description;
            };

            $scope.update = function () {
                $.ajax({
                    type: 'POST',
                    contentType: 'application/json; charset=utf-8',
                    data: JSON.stringify($scope.emp),
                    url: '/Tarefa/update',
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
                        url: '/Tarefa/delete',
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