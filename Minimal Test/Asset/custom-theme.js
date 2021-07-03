// Slider of products
$(document).ready(function(){
    $('.slider-area').slick({
    });
});

// Custom sorting of products
// const sorter = document.querySelector('#sort-by');

// if (sorter) {
//     sorter.addEventListener('change', function () {
//         const urlSearchParams = new URLSearchParams(window.location.search);

//         urlSearchParams.set(this.name, this.value);

//         window.location = `?${urlSearchParams}`;
//     });
// }

// if (window.location.search.length) {
//     sortBy = new URLSearchParams(window.location.search).get('sort_by');
//     if (sorter) {
//         sorter.value = sortBy
//     }
// }

// Second variant
// /* Bind a change event to the dropdown */
// $('#paginateBy').on('change', function(){
// /* Get the current value. Some value validation could be added here (but we don't) */
// var val = $(this).val();
// /* Send the value as a cart attribute via the AJAX API */
// $.ajax({
// type: "POST",
// url: '/cart.js',
// data: {"attributes[pagination]": val}, /* We are using an attribute named "pagination" */
// success: function(d){
// window.location.reload();
// },
// dataType: 'json'
// });
// });

$(document).ready(function(){
    jQuery('.select-this .select-itms select.num').on('change', function(){
        window.location.replace(jQuery(this).val());
    });
});
