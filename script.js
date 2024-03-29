var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {

    $scope.cards = [
        { color: 'red', numbers: [1, 2, 3, 4, 5, 6, 7, 8] },
        { color: 'yellow', numbers: [1, 2, 3, 4, 5, 6, 7, 8] },
        { color: 'blue', numbers: [1, 2, 3, 4, 5, 6, 7, 8] }

    ]
    $scope.myFunc = function (event) {
        $scope.id = event.target.id;
        $scope.number = $scope.id.charAt(0);
        $scope.color = $scope.id.slice(1, $scope.id.length - 1)
        $scope.toggle = $scope.id.charAt($scope.id.length - 1);


        if ($scope.toggle == "0") {
            $("#" + $scope.id).removeClass("fade2");
            $("#" + $scope.id).addClass("fade");
            
            setTimeout(function () {
                $("#" + $scope.id).attr("src", "images/back.png");
                document.getElementById($scope.id).id = $scope.number + $scope.color + 1;
                
            }, 125);

        } else {
            $("#" + $scope.id).removeClass("fade");
            $("#" + $scope.id).addClass("fade2");
            setTimeout(function () {
                $("#" + $scope.id).attr("src", "images/" + $scope.number + "_" + $scope.color + ".png");
                document.getElementById($scope.id).id = $scope.number + $scope.color + 0;
              
            }, 125);
        }
    };
 
    document.onkeyup = function (e) {
        if (e.key === "r") {
            restart();
        }
    };
});


function restart() {
    $(".img").each(function () {
        let id = $(this).attr('id');
        let number = id.charAt(0);
        let color = id.slice(1, id.length - 1);
        let toggle = id.charAt( id.length - 1);
        $(this).removeClass("fade2");
        $(this).removeClass("fade");
        if (toggle == 1) {
            $(this).animate({opacity:0}, 125);
            setTimeout(() => {
                $(this).attr("src", "images/" + number + "_" + color + ".png");
            $(this).attr("id", number + color + 0);
            }, 125);
            $(this).animate({opacity:1}, 125);
        }
       
    });
};
