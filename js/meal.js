$(document).ready(function () {
    function getUrlParameter(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    const meal_id = getUrlParameter('id');

    if (meal_id !== undefined && meal_id !== null && meal_id !== "") {

        $.ajax({
            type: 'GET',
            url: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + meal_id,
            success: function (data) {
                const meal_detail = data.meals[0];

                $("#current-category-name").text(meal_detail.strCategory);
                $("#current-meal").text(meal_detail.strMeal);
                $(".title_detail").text(meal_detail.strMeal);
                $(".meal-area").text(meal_detail.strArea);
                $(".meal-image").attr('src', meal_detail.strMealThumb)

                const text = `${meal_detail.strInstructions}`;
                const paragraphs = text.split(/\n\s*\n/);
                const container = $('.instruction-paragraph');
                paragraphs.forEach((paragraph) => {
                    const div = $('<p>').text(paragraph);
                    div.textContent = paragraph;
                    container.append(div);
                });

                const ingredientList = $("<ul>");
                for (let i = 1; i <= 20; i++) {
                    const ingredient = meal_detail['strIngredient' + i];
                    const measure = meal_detail['strMeasure' + i];

                    // If ingredient is not empty or null
                    if (ingredient) {
                        const li = $("<li>").text(`${measure} ${ingredient}`).attr('class', 'list-disc ml-5');
                        ingredientList.append(li);
                    }
                }
                $("#recipesList").append(ingredientList);

                const originalUrl = meal_detail.strYoutube;
                const embedUrl = originalUrl.replace("watch?v=", "embed/");
                $("#youtube").attr('src', embedUrl)
            },
            error: function (err) {
                console.log(err);
            }
        })
    } else {
        window.location.href = './../pages/error.html';
    }
});