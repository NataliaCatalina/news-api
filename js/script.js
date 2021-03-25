$("#about").hide();
// $("#results").html(" ");

$("#homeNav").click(function(){
    // $("#results").html(" ");
    $("#results").show();
    $("#about").hide();
    location.reload();
});

$("#aboutNav").click(function(){
    //$("#results").html(" ");
    $("#results").hide();
    $("#home").hide();
    $("#about").show();
});


$(document).ready(function () {

    $.ajax({
                
        url:'https://newsapi.org/v2/everything?' +
        'q=Apple&' +
        'from=2021-03-01&' +
        'sortBy=popularity&' +
        'apiKey=b315c2d237304b6f98cbc73fa2e736a2', 

        type: "GET",

        dataType: "json",
        
        success: function (result, status){
            console.log ("the default user is showing")
            console.log(result);
            var i = 0;
            for (i = 0; i<result.articles.length; i++) {
                $("#results").append(
                    
                    '<div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">' +
                        '<div class="card mb-3" >' +
                            '<div class="card-body">' +
                                '<img src="' + result.articles[i].urlToImage + '" class="card-img-top" alt="' + '">' +
                                '<p class="text-3 m-2">' +  result.articles[i].publishedAt + '</p>' +
                                '<p class="text-1 m-2 font-weight-bold">' + result.articles[i].title + '</p>' +
                                '<p class="text-2 m-2">' + result.articles[i].content + '</p>' +
                                '<p class="text-3 m-2">By: ' + result.articles[i].author + '<p>' +
                            '</div>' +
                        '</div>' +
                    '</div>'

                )
            }
        },

        error: function (xhr, status, error) {
        return;
        }
    }) 

    $("#submitBtn").click(function() {
        event.preventDefault();
        $("#results").show();
        $("#results").html(" ");
        var country = $(".countryBtn").val();
        var search =  $("#search").val();
        
        if (search == "") {
            $.ajax({
                url:'https://newsapi.org/v2/top-headlines?' +
                'country=' + country + '&' +
                'apiKey=b315c2d237304b6f98cbc73fa2e736a2', 
                
                type: "GET",
        
                dataType: "json",
                
                success: function (result, status){
                    console.log(result);
                    var i = 0;
                    for (i = 0; i<result.articles.length; i++) {
                        $("#results").append(
                            
                            '<div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">' +
                                '<div class="card mb-3" >' +
                                    '<div class="card-body">' +
                                        '<img src="' + result.articles[i].urlToImage + '" class="card-img-top" alt="' + '">' +
                                        '<p class="text-3 m-2">' +  result.articles[i].publishedAt + '</p>' +
                                        '<p class="text-1 m-2 font-weight-bold">' + result.articles[i].title + '</p>' +
                                        '<p class="text-2 m-2">' + result.articles[i].content + '</p>' +
                                        '<p class="text-3 m-2">By: ' + result.articles[i].author + '<p>' +
                                    '</div>' +
                                '</div>' +
                            '</div>'
    
                        )
                    }
                },
    
                error: function (xhr, status, error) {
                return;
                }
            }) 

        } else { 
            $.ajax({
                url:'https://newsapi.org/v2/everything?' +
                'qInTitle=' + search + '&' +
                'sortBy=popularity&' +
                'apiKey=b315c2d237304b6f98cbc73fa2e736a2', 
    
                type: "GET",
        
                dataType: "json",
                
                success: function (result, status){
                    console.log(result);
                    var i = 0;
                    for (i = 0; i<result.articles.length; i++) {
                        $("#results").append(
                            
                            '<div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">' +
                                '<div class="card mb-3" >' +
                                    '<div class="card-body">' +
                                        '<img src="' + result.articles[i].urlToImage + '" class="card-img-top" alt="' + '">' +
                                        '<p class="text-3 m-2">' +  result.articles[i].publishedAt + '</p>' +
                                        '<p class="text-1 m-2 font-weight-bold">' + result.articles[i].title + '</p>' +
                                        '<p class="text-2 m-2">' + result.articles[i].content + '</p>' +
                                        '<p class="text-3 m-2">By: ' + result.articles[i].author + '<p>' +
                                    '</div>' +
                                '</div>' +
                            '</div>'
    
                        )
                    }
                },
    
                error: function (xhr, status, error) {
                return;
                }
            }) 

        }

        
    })

// ==========================================================
// Move container
// ==========================================================

    $("#submitBtn").click(function (){
        $("html, body").animate({
        scrollTop: $("#results").offset().top
        }, 1000);
      });


// ==========================================================
// Time
// ==========================================================
      

    var d = new Date();
    var strDate = d.getFullYear() + "<br>" + (d.getMonth()+1) + "<br>" + d.getDate();

      $(".showTime").append(d);
        

}); //jquery ready