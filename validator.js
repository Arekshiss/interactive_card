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
                required: true,
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
                required: "Can't be blank",
            },
            year: {
                required: "Can't be blank"
            },
            card_code: {
                required: "Can't be blank",
            }
        }
    });
});

// ACTION CONFIRM

document.getElementById('cardholder').addEventListener('change', function(){
    document.getElementById('owner_card').innerHTML = document.getElementById('cardholder').value;
});

document.getElementById('card_number').addEventListener('change', function(){
    document.getElementById('number_card').innerHTML = document.getElementById('card_number').value;
});

document.getElementById('month').addEventListener('change', function(){
    document.getElementById('exp_date').innerHTML = document.getElementById('month').value + '/' + document.getElementById('year').value;
});

document.getElementById('year').addEventListener('change', function(){
    document.getElementById('exp_date').innerHTML = document.getElementById('month').value + '/' + document.getElementById('year').value;
});

document.getElementById('card_code').addEventListener('change', function(){
    document.getElementById('code_card').innerHTML = document.getElementById('card_code').value;
});


var form = document.getElementById('form');
form.addEventListener('submit', function (event) {

    event.preventDefault();

    const cardholder = document.getElementById('cardholder').value;
    const card_number = document.getElementById('card_number').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    const card_code = document.getElementById('card_code').value;


    if(cardholder !== '' && card_number !== '' && month !== '' && year !== '' && card_code !== ''){
        document.getElementById('thanks').style.display = "flex";
        form.style.display = "none";
    }
});

document.getElementById('confirm').addEventListener('click', function(){
    window.location.reload();
})