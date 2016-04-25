var app = angular.module('processManager', ['ngRoute']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})

    .otherwise({
        redirectTo: '/pages/404'
      })
  }]).
  
  // Google Map Controller
  controller('MapCtrl', ['$scope', '$location', function($scope, $location) {

    $(document).scrollTop(0);
    
    $scope.mapOptions = {
    zoom: 4,
    center: new google.maps.LatLng(41.923, 12.513),
    mapTypeId: google.maps.MapTypeId.TERRAIN
    }
    $scope.map = new google.maps.Map(document.getElementById('map'), $scope.mapOptions);

    var loaded = 0;
    var imgCounter = $(".main-content img").length;
    if(imgCounter > 0){
      console.log(imgCounter);
      function doProgress() {
        $(".main-content img").load(function() {
          loaded++;
          var newWidthPercentage = (loaded / imgCounter) * 100;
          animateLoader(newWidthPercentage + '%');      
        })
      } 
      function animateLoader(newWidth) {
        $("#progressBar").width(newWidth);
        if(imgCounter === loaded){
          setTimeout(function(){
                    $("#progressBar").animate({opacity:0});
                },500);
        }
      }
      doProgress();
    }else{
      setTimeout(function(){
          $("#progressBar").css({
            "opacity":0,
            "width":"100%"
          });
      },500);
    }

  }]).

  // Page Tour Controller
  controller('TourCtrl', ['$scope', '$location', function($scope, $location) {

    $(document).scrollTop(0);
    
    $(function(){
    var introguide = introJs();
    // var startbtn   = $('#startdemotour');
    introguide.setOptions({
    steps: [
    {
      element: '#intro1',
      intro: 'Click Here',
      position: 'bottom'
    },
    {
      element: '#intro2',
      intro: 'With 3D transforms, we can make simple.',
      position: 'top'
    },
    {
      element: '#intro3',
      intro: 'Hover over each title to display a longer description.',
      position: 'right'
    },
    {
      element: '#intro4',
      intro: 'Click the With 3D transforms, we can make simple.',
      position: 'left'
    },
    {
      element: '#intro5',
      intro: "Each demo will link to the previous & next entries.",
      position: 'bottom'
    }
    ]
    });
    introguide.start();
  });



    var loaded = 0;
    var imgCounter = $(".main-content img").length;
    if(imgCounter > 0){
      console.log(imgCounter);
      function doProgress() {
        $(".main-content img").load(function() {
          loaded++;
          var newWidthPercentage = (loaded / imgCounter) * 100;
          animateLoader(newWidthPercentage + '%');      
        })
      } 
      function animateLoader(newWidth) {
        $("#progressBar").width(newWidth);
        if(imgCounter === loaded){
          setTimeout(function(){
                    $("#progressBar").animate({opacity:0});
                },500);
        }
      }
      doProgress();
    }else{
      setTimeout(function(){
          $("#progressBar").css({
            "opacity":0,
            "width":"100%"
          });
      },500);
    }

  }]).

// Google Map Controller
  controller('ProfileCtrl', ['$scope', '$location', function($scope, $location) {

    $(document).scrollTop(0);


    $scope.mapOptions = {
    zoom: 4,
    center: new google.maps.LatLng(41.923, 12.513),
    mapTypeId: google.maps.MapTypeId.TERRAIN
    }
    $scope.map = new google.maps.Map(document.getElementById('mapthree'), $scope.mapOptions);

    var loaded = 0;
    var imgCounter = $(".main-content img").length;
    if(imgCounter > 0){
      console.log(imgCounter);
      function doProgress() {
        $(".main-content img").load(function() {
          loaded++;
          var newWidthPercentage = (loaded / imgCounter) * 100;
          animateLoader(newWidthPercentage + '%');      
        })
      } 
      function animateLoader(newWidth) {
        $("#progressBar").width(newWidth);
        if(imgCounter === loaded){
          setTimeout(function(){
                    $("#progressBar").animate({opacity:0});
                },500);
        }
      }
      doProgress();
    }else{
      setTimeout(function(){
          $("#progressBar").css({
            "opacity":0,
            "width":"100%"
          });
      },500);
    }

  }]).

  controller('ImageCtrl', ['$scope', '$location', function($scope, $location) {

    $(document).scrollTop(0);


    var loaded = 0;
    var imgCounter = $(".main-content img").length;
    if(imgCounter > 0){
      console.log(imgCounter);
      function doProgress() {
        $(".main-content img").load(function() {
          loaded++;
          var newWidthPercentage = (loaded / imgCounter) * 100;
          animateLoader(newWidthPercentage + '%');      
        })
      } 
      function animateLoader(newWidth) {
        $("#progressBar").width(newWidth);
        if(imgCounter === loaded){
          setTimeout(function(){
                    $("#progressBar").animate({opacity:0});
                },500);
        }
      }
      doProgress();
    }else{
      setTimeout(function(){
          $("#progressBar").css({
            "opacity":0,
            "width":"100%"
          });
      },500);
    }

  }]).

  // Contact Map Controller
  controller('ContactCtrl', ['$scope', '$location', function($scope, $location) {

    $(document).scrollTop(0);

    $scope.mapOptions = {
    zoom: 4,
    center: new google.maps.LatLng(41.923, 12.513),
    mapTypeId: google.maps.MapTypeId.TERRAIN
    }
    $scope.map = new google.maps.Map(document.getElementById('maptwo'), $scope.mapOptions);


    var loaded = 0;
    var imgCounter = $(".main-content img").length;
    if(imgCounter > 0){
      console.log(imgCounter);
      function doProgress() {
        $(".main-content img").load(function() {
          loaded++;
          var newWidthPercentage = (loaded / imgCounter) * 100;
          animateLoader(newWidthPercentage + '%');      
        })
      } 
      function animateLoader(newWidth) {
        $("#progressBar").width(newWidth);
        if(imgCounter === loaded){
          setTimeout(function(){
                    $("#progressBar").animate({opacity:0});
                },500);
        }
      }
      doProgress();
    }else{
      setTimeout(function(){
          $("#progressBar").css({
            "opacity":0,
            "width":"100%"
          });
      },500);
    }

  }]);

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function () {

    $(document).scrollTop(0);

      var loaded = 0;
    var imgCounter = $(".main-content img").length;
    if(imgCounter > 0){
      console.log(imgCounter);
      function doProgress() {
        $(".main-content img").load(function() {
          loaded++;
          var newWidthPercentage = (loaded / imgCounter) * 100;
          animateLoader(newWidthPercentage + '%');      
        })
      } 
      function animateLoader(newWidth) {
        $("#progressBar").width(newWidth);
        if(imgCounter === loaded){
          setTimeout(function(){
                    $("#progressBar").animate({opacity:0});
                },500);
        }
      }
      doProgress();
    }else{
      setTimeout(function(){
          $("#progressBar").css({
            "opacity":0,
            "width":"100%"
          });
      },500);
    }

    // Activates Tooltips for Social Links
    $('[data-toggle="tooltip"]').tooltip(); 

    // Activates Popovers for Social Links 
    $('[data-toggle="popover"]').popover(); 

    //*** Refresh Content ***//
      $('.refresh-content').on("click", function(){
        $(this).parent().parent().addClass("loading-wait").delay(3000).queue(function(next){
          $(this).removeClass("loading-wait");
          next();
      });
      $(this).addClass("fa-spin").delay(3000).queue(function(next){
          $(this).removeClass("fa-spin");
          next();
      });
      });

      //*** Expand Content ***//
      $('.expand-content').on("click", function(){
        $(this).parent().parent().toggleClass("expand-this");
      });

      //*** Delete Content ***//
      $('.close-content').on("click", function(){
        $(this).parent().parent().slideUp();
      });

      // Activates Tooltips for Social Links
      $('.tooltip-social').tooltip({
        selector: "a[data-toggle=tooltip]"
      });


});

  