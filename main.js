const Name = document.getElementById('Name');
const span_name = document.getElementById('name_span_js');
const email = document.getElementById('email');
const span_email = document.getElementById('email_span_js');
const pass = document.getElementById('pass');
const span_pass = document.getElementById('password_span_js');
const address = document.getElementById('address');
const span_add = document.getElementById('add_span_js');
const sports = document.querySelectorAll('input[name="sports"]');
const span_sport = document.getElementById('sport_span_js');
var gender = document.querySelectorAll('input[name="gender"]');
const span_gender = document.getElementById('gender_span_js');
const country = document.querySelectorAll('input[name="country"]');
const span_Country = document.getElementById('country_span_js');
function Save(){
    // Name Span
    if(!Name.value){
        span_name.style.display = 'block';
        Name.style.borderColor = "red"
    }
    else{
        span_name.style.display = 'none';
        Name.style.borderColor = "#6C757D";
    }
    // Email Span
    if(!email.value){
        span_email.style.display = 'block';
        email.style.borderColor = "red"
    }
    else{
        span_email.style.display = 'none';
        email.style.borderColor = "#6C757D";
    }
    //Pass Span
    if(!pass.value){
        span_pass.style.display = 'block';
        pass.style.borderColor = "red"
    }
    else if(pass.value.length < 4 || pass.value.length > 12){
        span_pass.style.display = 'block';
        pass.style.borderColor = "red"
    }
    else{
        span_pass.style.display = 'none';
        pass.style.borderColor = "#6C757D";
    }
    //Address Span
    if(!address.value){
        span_add.style.display = 'block';
        address.style.borderColor = "red"
    }
    else{
        span_add.style.display = 'none';
        address.style.borderColor = "#6C757D";
    }
    // Sports Span
    if(sports.length > 0){
        const isSportChacked = []
        for (let i = 0; i < sports.length; i++) {
            // console.log(sports[i]);
            const ischacked = sports[i]
            if (ischacked.checked){
                // console.log(ischacked);
                isSportChacked.push(true);
            }
        }
        console.log(isSportChacked);
        if(isSportChacked.length == 0){
            span_sport.style.display = "block";
        }
        else{
            span_sport.style.display = "none";
        }
    }
    // Gender Span
    if(gender.length > 0 ){
        const isInputEntered = []
        for (let i = 0; i < gender.length; i++){
            const isEntered = gender[i]
            if (isEntered.checked){
                isInputEntered.push(true);
            }
        }
        console.log(isInputEntered);
        if(isInputEntered.length == 0){
            span_gender.style.display = "block";
        }
        else{
            span_gender.style.display = "none";
            countryinput.style.borderColor = "#6C757D";
        }
    }


}