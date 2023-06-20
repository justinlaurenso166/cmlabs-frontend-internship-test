$(document).ready(function () {
    const categoryList = $('#categoryList');
    const baseUrl = window.location.href.split('/').slice(0, -1).join('/');
    console.log(baseUrl)

    $.ajax({
        url: 'https://www.themealdb.com/api/json/v1/1/categories.php',
        type: 'GET',
        success: function (response) {
            const categories = response.categories;
            categories.forEach(category => {
                const li = $('<li>').attr('class', 'category');
                const image = $('<img>').attr('src', category.strCategoryThumb).attr('alt', category.strCategory).attr('class', 'category-image');
                const dimmer = $('<div>').attr('class', 'dimmer');
                const categoryName = $('<span>').text(category.strCategory).attr('class', 'category-name');

                li.append(image).append(dimmer.append(categoryName))
                categoryList.append(li);

                li.click(function () {
                    const baseUrl = window.location.href.split('/').slice(0, -1).join('/');
                    window.location.href = baseUrl + '/pages/category_detail.html?category-name=' + category.strCategory;
                });


            });
        },
        error: function (error) {
            console.error('Error:', error);
        },
    });
});
