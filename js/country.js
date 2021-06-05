const validate = (value) =>{
    if(value == ""){
        throw 'Empty input field!';
    }
    if(typeof(value) != 'string'){
        throw "It's not a string!";
    }
    if(!/^[A-Z]/.test(value)){
        throw "Country must start with uppercase letter!";
    }
    if(value.length < 4){
        throw "Country must have over than 4 letters!"
    }
    let isEuropean = false;
    const euCountries = [
        'Austria',
        'Belgium',
        'Bulgaria',
        'Croatia',
        'Republic of Cyprus',
        'Czech Republic',
        'Denmark',
        'Estonia',
        'Finland',
        'France',
        'Germany',
        'Greece',
        'Hungary',
        'Ireland',
        'Italy',
        'Latvia',
        'Lithuania',
        'Luxembourg',
        'Malta',
        'Netherlands',
        'Poland',
        'Portugal',
        'Romania',
        'Slovakia',
        'Slovenia',
        'Spain',
        'Sweden'
    ];

    euCountries.forEach((item)=>{
        if(value == item){
            return isEuropean = true;
        }
    });
    if(!isEuropean) throw 'Country is not European!';
};

document.getElementById('validate_button').addEventListener('click', ()=>{
    const value = document.getElementById('country').value;
    const countryMessageField = document.getElementById('countryMessage');
    try{
        validate(value)
        countryMessageField.innerText = "Country is European!";
        countryMessageField.style.color = 'green';
    }catch(e){
        countryMessageField.innerText = e;
        countryMessageField.style.color = 'red';
    }
});

