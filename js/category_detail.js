$(document).ready(function () {
    function getUrlParameter(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    const category_name = getUrlParameter('category-name');

    if (category_name !== undefined || category_name !== null) {
        $("#current-category-name").text(category_name);

        $(".title_detail").text(category_name + " Meals");
        
        const categoryDetailList = $('#categoryDetailList');

        $.ajax({
            type: 'GET',
            url: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + category_name,
            success: function (data) {
                const meals = data.meals
                console.log(meals)
                meals.forEach(meal => {
                    const li = $('<li>').attr('class', 'category');
                    const image = $('<img>').attr('src', meal.strMealThumb).attr('alt', meal.strCategory).attr('class', 'category-image');
                    const dimmer = $('<div>').attr('class', 'dimmer');
                    const mealName = $('<span>').text(meal.strMeal).attr('class', 'category-name');

                    li.append(image).append(dimmer.append(mealName))
                    categoryDetailList.append(li);

                    li.click(function () {
                        window.location.href = '/pages/meal.html?id=' + meal.idMeal;

                    });
                });
            },
            error: function (err) {
                console.log(err);
            }
        })
    }
});