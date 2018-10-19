function randomRecipeFunction() {
    var myurl = "https://www.themealdb.com/api/json/v1/1/random.php";
    //(myurl);
    $.ajax({
        url: myurl,
        dataType: "json",
        success: function(parsed_json) {
            //(parsed_json);
            var mealName = parsed_json['meals']['0']['strMeal'];
            //(mealName);
            $("#title").html(mealName);
            var array = [];
            array.length = 31;
            var ingredientsArray = [];
            ingredientsArray.length = 31;
            var measurementsArray = [];
            measurementsArray.length = 31;
            var tempIngredientString = "";
            var tempIngredient;
            var tempMeasurementString = "";
            var tempMeasurement;
            $.each(array, function(k) {
                tempIngredientString = "strIngredient" + k;
                //console.log(tempIngredientString);
                tempIngredient = parsed_json['meals']['0'][tempIngredientString];
                //console.log(tempIngredient);
                ingredientsArray[k] = tempIngredient;
                //console.log(ingredientsArray);
                tempMeasurementString = "strMeasure" + k;
                //console.log(tempMeasurementString);
                tempMeasurement = parsed_json['meals']['0'][tempMeasurementString];
                //console.log(tempMeasurement);
                measurementsArray[k] = tempMeasurement;
                //console.log(measurementsArray);
            });
            var everything1 = "<dl>\n";
            ingredientsArray = ingredientsArray.filter(function(el) {
                return el != null;
            });
            measurementsArray = measurementsArray.filter(function(el) {
                return el != null;
            });
            console.log(ingredientsArray);
            console.log(measurementsArray);
            $.each(ingredientsArray, function(j) {
                if (ingredientsArray[j] == undefined) {
                    ingredientsArray.splice(j, j + 1);
                    measurementsArray.splice(j, j + 1);
                }
                everything1 += "<dd id='strIngredient";
                everything1 += j;
                everything1 += "'>";
                everything1 += ingredientsArray[j];
                everything1 += "</dd>\n";
                everything1 += "<dt id='strMeasure";
                everything1 += j;
                everything1 += "'>";
                everything1 += measurementsArray[j];
                everything1 += "</dt>\n";
            });
            everything1 += "</dl>";
            console.log(everything1);
            $("#ingredientsList").html(everything1);
            var instructions = parsed_json['meals']['0']['strInstructions'];
            //(instructions);
            $("#mealInstructions").html(instructions);
        }
    });
}

function logI(i) {
    //("I function");
    //(i);
    $("#iValue").html(i);
    var value = document.getElementById("searchTerm");
    var value2 = value.innerHTML;
    //(value2);
    var myurl = "https://www.themealdb.com/api/json/v1/1/search.php?s="
    myurl += value2;
    //(myurl);
    $.ajax({
        url: myurl,
        dataType: "json",
        success: function(parsed_json) {
            //(parsed_json);
            var size = parsed_json['meals']['length'];
            //(size);
            var meals = parsed_json['meals'];
            //(meals);
            var mealName = parsed_json['meals'][i]['strMeal'];
            var string = "You've chosen the recipe for " + mealName + ", now hit the 'Show Me The Recipe!' button.";
            $("#mealIntro").html(string);
        }
    });
}

function searchFunction() {
    //("it worked");
    var value = document.getElementById("test");
    var value2 = value.innerHTML;
    //(value2);
    var myurl = "https://www.themealdb.com/api/json/v1/1/search.php?s="
    myurl += value2;
    //(myurl);
    $.ajax({
        url: myurl,
        dataType: "json",
        success: function(parsed_json) {
            //(parsed_json);
            var meals = parsed_json['meals'];
            var everything = "<ul>";
            var url = myurl.toString();
            $.each(meals, function(i, myurl) {
                everything += "<li><button id='recipeButton' onclick='displayRecipe(";
                everything += i;
                everything += ")'> ";
                everything += meals[i].strMeal;
                everything += "</button></li>";
            });
            everything += "</ul>";
            $("#search").html(everything);
            //(meals);
            var meal0 = meals[0];
            //(meal0);
            var mealName = parsed_json['meals']['0']['strMeal'];
            $("#title").html(mealName);
            $("#new").html(mealName);
            var instructions = parsed_json['meals']['0']['strInstructions'];
            $("#mealInstructions").html(instructions);
        }
    });
}

function displayRecipe(i) {
    $("#iValue").html(i);
    var iValue = document.getElementById("iValue");
    var iValue2 = iValue.innerHTML;
    var value = document.getElementById("test");
    var value2 = value.innerHTML;
    var myurl = "https://www.themealdb.com/api/json/v1/1/search.php?s="
    myurl += value2;
    $.ajax({
        url: myurl,
        dataType: "json",
        success: function(parsed_json) {
            var size = parsed_json['meals']['length'];
            var meals = parsed_json['meals'];
            console.log(meals[i]);
            console.log(meals[i].strIngredient1);
            var mealName = parsed_json['meals'][iValue2]['strMeal'];
            $("#title").html(mealName);
            $("#new").html(mealName);
            var array = [];
            array.length = 31;
            var ingredientsArray = [];
            ingredientsArray.length = 31;
            var measurementsArray = [];
            measurementsArray.length = 31;
            var tempIngredientString = "";
            var tempIngredient;
            var tempMeasurementString = "";
            var tempMeasurement;
            $.each(array, function(k) {
                tempIngredientString = "strIngredient" + k;
                //console.log(tempIngredientString);
                tempIngredient = parsed_json['meals'][iValue2][tempIngredientString];
                //console.log(tempIngredient);
                ingredientsArray[k] = tempIngredient;
                //console.log(ingredientsArray);
                tempMeasurementString = "strMeasure" + k;
                //console.log(tempMeasurementString);
                tempMeasurement = parsed_json['meals'][iValue2][tempMeasurementString];
                //console.log(tempMeasurement);
                measurementsArray[k] = tempMeasurement;
                //console.log(measurementsArray);
            });
            var everything1 = "<dl>\n";
            ingredientsArray = ingredientsArray.filter(function(el) {
                return el != null;
            });
            measurementsArray = measurementsArray.filter(function(el) {
                return el != null;
            });
            console.log(ingredientsArray);
            console.log(measurementsArray);
            $.each(ingredientsArray, function(j) {
                if (ingredientsArray[j] == undefined) {
                    ingredientsArray.splice(j, j + 1);
                    measurementsArray.splice(j, j + 1);
                }
                everything1 += "<dd id='strIngredient";
                everything1 += j;
                everything1 += "'>";
                everything1 += ingredientsArray[j];
                everything1 += "</dd>\n";
                everything1 += "<dt id='strMeasure";
                everything1 += j;
                everything1 += "'>";
                everything1 += measurementsArray[j];
                everything1 += "</dt>\n";
            });
            everything1 += "</dl>";
            console.log(everything1);
            $("#ingredientsList").html(everything1);
            var instructions = parsed_json['meals'][iValue2]['strInstructions'];
            $("#mealInstructions").html(instructions);
        }
    });
}

var app = angular.module('myApp', []);
app.directive('myDirective', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attr, mCtrl) {
            function myValidation(value) {

                return value;
            }
            mCtrl.$parsers.push(myValidation);
        }
    };
});
