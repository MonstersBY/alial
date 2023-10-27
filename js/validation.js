// Для телефона
$('[name="telephone"]').mask("+7(999)999-9999", {autoclear: false});
// Валидация на jquery c плагином валидации на странице вакансий
$(document).ready(function () {
    $('.vacancy-form').on('submit', function (event) {
        event.preventDefault();
    });
    $('.vacancy-form').validate({
        highlight: function (element, errorClass) {
            $(element).add($(element).parent()).addClass("invalid");
        },
        unhighlight: function (element, errorClass) {
            $(element).add($(element).parent()).removeClass("invalid");
        },
        errorElement: "span",
        errorClass: "error",
        rules: {
            vacancy: {
                required: true,
            },
            name: {
                required: true,
            },
            telephone: {
                required: true,
            },
            email: {
                required: true,
                email: true,
            },
            letter: {
                required: true,
            },
        },

        messages: {
            vacancy: {
                required: "Это поле обязательно для заполнения",
            },
            name: {
                required: "Это поле обязательно для заполнения",
            },
            telephone: {
                required: "Это поле обязательно для заполнения",
            },
            email: {
                required: "Это поле обязательно для заполнения",
                email: "Пожалуйста, введите корректный адрес электронной почты",
            },
            letter: {
                required: "Это поле обязательно для заполнения",
            },
        }
    });
});

// На главной и карточке продукта
$(document).ready(function () {
    $('.feedback-form').on('submit', function (event) {
        event.preventDefault();
    });

    $('.feedback-form').validate({
        highlight: function (element, errorClass) {
            $(element).add($(element).parent()).addClass("invalid");
        },
        unhighlight: function (element, errorClass) {
            $(element).add($(element).parent()).removeClass("invalid");
        },
        errorElement: "span",
        errorClass: "error",
        rules: {
            name: {
                required: true,
            },
            telephone: {
                required: true,
            },
            email: {
                required: true,
                email: true,
            },
            company: {
                required: true,
            },
            message: {
                required: true,
            },
        },

        messages: {
            name: {
                required: "Это поле обязательно для заполнения",
            },
            telephone: {
                required: "Это поле обязательно для заполнения",
            },
            email: {
                required: "Это поле обязательно для заполнения",
                email: "Пожалуйста, введите корректный адрес электронной почты",
            },
            company: {
                required: "Это поле обязательно для заполнения",
            },
            message: {
                required: "Это поле обязательно для заполнения",
            },
        }
    });
});