﻿myModule.factory('user', function ($http, $q) {
    return {

        apiPath: 'coyotemoves/api/',

        getUserName: function () {
            var deferred = $q.defer();

            $http.get(this.apiPath + 'User/GetUserName/').success(function (data) {
                deferred.resolve(data);
            }).error(function () {
                deferred.reject("An error occurred while fetching user.");
            });

            return deferred.promise;
        },

        getUserAuthType: function () {
            var deferred = $q.defer();

            $http.get(this.apiPath + 'User/GetUserAuthType/').success(function (data) {
                deferred.resolve(data);
            }).error(function () {
                deferred.reject("An error occurred while fetching user.");
            });

            return deferred.promise;
        },

        getUserRoles: function () {
            var deferred = $q.defer();

            $http.get(this.apiPath + 'User/GetUserRoles/').success(function (data) {
                deferred.resolve(data);
            }).error(function () {
                deferred.reject("An error occurred while fetching user's roles.");
            });

            return deferred.promise;
        },

        getUserEmail: function () {
            var deferred = $q.defer();

            $http.get(this.apiPath + 'User/GetUserEmail/').success(function (data) {
                deferred.resolve(data);
            }).error(function () {
                deferred.reject("An error occurred while fetching user's email address.");
            });

            return deferred.promise;
        },
    }
});

myModule.factory('desks', function ($http, $q) {
    return {

        apiPath: 'coyotemoves/api/',

        getDesksByFloor: function (floorId) {
            var deferred = $q.defer();

            $http.get(this.apiPath + 'Desk/GetDesksByFloor/' + floorId).success(function (data) {
                deferred.resolve(data);
            }).error(function () {
                deferred.reject("An error occurred while fetching desks by floor.");
            });

            return deferred.promise;
        },

        updateDesk: function (deskNumber, updatedDeskInfo) {
            var deferred = $q.defer();

            $http.post(this.apiPath + 'Desk/SetDeskOrientationAndPoint/' + deskNumber, updatedDeskInfo).success(function (data) {
                deferred.resolve(data);
            }).error(function () {
                deferred.reject("An error occurred while updating a desk.");
            });

            return deferred.promise;
        }


    }
});

myModule.factory('requestForm', function ($http, $q) {
    return {

        apiPath: 'coyotemoves/api/',

        getAllJobTitles: function () {
            var deferred = $q.defer();

            $http.get(this.apiPath + 'RequestForm/GetAllJobTitles/').success(function (data) {
                deferred.resolve(data);
            }).error(function () {
                deferred.reject("An error occurred while fetching job titles for autocomplete.");
            });

            return deferred.promise;
        },

        getAllDepartments: function () {
            var deferred = $q.defer();

            $http.get(this.apiPath + 'RequestForm/GetAllDepartments/').success(function (data) {
                deferred.resolve(data);
            }).error(function () {
                deferred.reject("An error occurred while fetching job titles for autocomplete.");
            });

            return deferred.promise;
        },

        getAllGroups: function () {
            var deferred = $q.defer();

            $http.get(this.apiPath + 'RequestForm/GetAllGroups/').success(function (data) {
                deferred.resolve(data);
            }).error(function () {
                deferred.reject("An error occurred while fetching job titles for autocomplete.");
            });

            return deferred.promise;
        },

        sendForm: function (moveForm) {
            var deferred = $q.defer();

            $http.post(this.apiPath + 'RequestForm/SendChangeRequest', moveForm).success(function (data) {
                deferred.resolve(data);
            }).error(function (errorMessage) {
                deferred.reject(errorMessage);
            });

            return deferred.promise;
        }
    }
});