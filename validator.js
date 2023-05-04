$(document).ready(function () {

    $.validator.addMethod("justLetters", function (value, element) {
        return this.optional(element) || /^[a-z\s.A-Z]+$/i.test(value);
    }, "Wrong format, letters only");

    $.validator.addMethod("formatCard", function (value, element) {
        return this.optional(element) || /^\d{4}\s+\d{4}\s+\d{4}\s+\d{4}$/i.test(value);
    }, "Wrong card number or Wrong format, numbers only");


    $("#form").validate({
        rules: {
            cardholder: {
                required: true,
                justLetters: true,
            },
            card_number: {
                required: true,
                formatCard: true,
            },
            month: {
                required: true,
            },
            year: {
                required: true,
            },
            card_code: {
                required: true
            }
        },
        messages: {
            cardholder: {
                required: "Can't be blank",
                justLetters: "Wrong format, letters only",
            },
            card_number: {
                required: "Can't be blank",
                formatCard: "Wrong card number or Wrong format, numbers only",
            },
            month: {
                required: "Can't be blank"
            },
            year: {
                required: "Can't be blank"
            },
            card_code: {
                required: "Can't be blank"
            }
        }
    });
});