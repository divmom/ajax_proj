
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');
    var $street = document.getElementById('street').value
    var $city = document.getElementById('city').value
/*    var cityParts = $cityVal.split(" ");
    var $city = "";
    for(var i=0; i < cityParts.length; i++)
    {
        $city = $city + "," + cityParts[i];
    }*/
    
    var $streetPlusCity = $street + " " + $city;


    var requestString = "https://maps.googleapis.com/maps/api/streetview?size=300x300&location=" 
    + encodeURIComponent($streetPlusCity);
    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    //http://api.nytimes.com/svc/books/v3/reviews[.response-format]?author={AUTHOR}&api-key={your-API-key}

    // load streetview

    // YOUR CODE GOES HERE!

    var nytimes_success = function(){

    };
    var nytimes_error = function(){

    };

    //var nytimes_sacks = "http://api.nytimes.com/svc/books/v3/reviews.jsonp?author=Oliver Sacks&api-key=c262b76484d68f7da3ef47ee5432d47f:7:71609997&callback=books";
    var nytimes_sacks = "http://api.nytimes.com/svc/books/v3/reviews.jsonp?author=Oliver Sacks"; 

    $.ajax({
            url: nytimes_sacks,
            dataType: "jsonp",
            type: "GET",
            data: { "api-key": "c262b76484d68f7da3ef47ee5432d47f:7:71609997"},
            jsonpCallback: "books",
            success: function(data){
                console.log(data);
            }
          });  


    $body.append('<img class="bgimg" src=' + requestString+ '>');

    return false;
};

$('#form-container').submit(loadData);

// loadData();
