angular.module('gylfiApp').controller('messagesController', ['$scope', function ($scope) {
    this.message;
    this.messages = [];
    this.messagesHTML = [];

    this.clearMessage = function () {
        //Set or reset message
        this.message = {
            message: null,
            email: null,
            date: null,
            time: null,
        };
    }

    this.reverse = function () {
        this.messagesHTML.reverse();
    }

    this.submit = function () {
        //Set date and time to now 
        this.message.date = new Date().toLocaleDateString();
        this.message.time = new Date().toLocaleTimeString();
        this.messages.push(this.message);

        //Clear sent message
        this.clearMessage();

        this.setCookie("messages", JSON.stringify(this.messages));

        //Set proper sorting back
        this.messagesHTML = this.messages;

        //Reset formvalidation
        $scope.message_form.$setPristine();
        $scope.message_form.$setUntouched();
    }

    this.setCookie = function (name, value) {
        document.cookie = encodeURIComponent(name + "=" + value + ";");
    }

    this.getCookie = function () {
        var name = "messages=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                this.messages = JSON.parse(c.substring(name.length, c.length));
                this.messagesHTML = this.messages;
            }
        }
    }

    this.getCookie();
    this.clearMessage();
}]);


