function randomRecipeFunction() {
    var myurl = "https://www.themealdb.com/api/json/v1/1/random.php";
    console.log(myurl);
    $.ajax({
        url: myurl,
        dataType: "json",
        success: function(parsed_json) {
            console.log(parsed_json);
            var mealName = parsed_json['meals']['0']['strMeal'];
            console.log(mealName);
            $("#title").html(mealName);
            var instructions = parsed_json['meals']['0']['strInstructions'];
            console.log(instructions);
            $("#mealInstructions").html(instructions);
        }
    });
}

$(document).ready(function() {
    $("#searchButton").click(function(e) {
        e.preventDefault();
        console.log("it worked");
        var myurl = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + $("#inputField").val();
        console.log(myurl);
        $.ajax({
            url: myurl,
            dataType: "json",
            success: function(parsed_json) {
                console.log(parsed_json);
                var size = parsed_json['meals']['length'];
                console.log(size);
                var meals = parsed_json['meals'];
                var everything = "<ul>";
                $.each(meals, function(i, item) {
                    everything += "<li> "
                    everything += meals[i].strMeal;
                    everything += "</li>";
                });
                everything += "</ul>";
                $("#search").html(everything);
                console.log(meals);
                var meal0 = meals[0];
                console.log(meal0);
                var mealName = parsed_json['meals']['0']['strMeal'];
                console.log(mealName);
                $("#title").html(mealName);
                var instructions = parsed_json['meals']['0']['strInstructions'];
                console.log(instructions);
                $("#mealInstructions").html(instructions);
            }
        });
    });
});
