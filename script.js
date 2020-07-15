var app = angular.module('myApp', []);
function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }
app.controller('myCtrl', function ($scope) {
    $scope.red = [1, 2, 3, 4, 5, 6, 7, 8];
    $scope.yellow = [1, 2, 3, 4, 5, 6, 7, 8];
    $scope.blue = [1, 2, 3, 4, 5, 6, 7, 8];
    $scope.cards = [
        { color: 'red', numbers: [1, 2, 3, 4, 5, 6, 7, 8] },
        { color: 'yellow', numbers: [1, 2, 3, 4, 5, 6, 7, 8] },
        { color: 'blue', numbers: [1, 2, 3, 4, 5, 6, 7, 8] }

    ]
    $scope.myFunc = async function (event) {
        $scope.id =  event.target.id;
        $scope.number = $scope.id.charAt(0);
        $scope.color = $scope.id.slice(1, $scope.id.length - 1)
        $scope.toggle = $scope.id.charAt($scope.id.length - 1);

        if ($scope.toggle == "0") {

            $("#" + $scope.id).attr("src", "images/back.png");
            document.getElementById($scope.id).id = $scope.number + $scope.color + 1;
            
            
            


        } else {
            $("#" + $scope.id).attr("src", "images/" + $scope.number + "_" + $scope.color + ".png");
            // document.getElementById($scope.id).src = "images/" + $scope.number + "_" + $scope.color + ".png";
            document.getElementById($scope.id).id = $scope.number + $scope.color + 0;

        }
    };
});

$('#popoverhide').popover().click(function () {
    setTimeout(function () {
        $('#popoverhide').popover('hide');
    }, 1500);
});
function restart() {
    $(".img").each(function () {
        let id = $(this).attr('id');
        let number = id.charAt(0);
        let color = id.slice(1, id.length - 1);
        $(this).attr("src", "images/" + number + "_" + color + ".png");
        $(this).attr("id", number + color + 0)
    });
};