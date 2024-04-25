
document.addEventListener('DOMContentLoaded', function () {

    let inputEmail = document.querySelector('input[type="email"]');
    let inputPass = document.querySelector('input[type="password"]');

    const emailValidation = () => {

        let correctEmail = 'admin@gmail.com';

        if (inputEmail) {
            let inputEmailValue = inputEmail.value;

            if (inputEmailValue === correctEmail) {
                window.alert('correct');
            } else {
                window.alert("not valid");
            }

        }
    }

    // emailValidation();

    const passValidation = () => {
        if (inputPass) {
            let inputPassValue = inputPass.value;

            let minLen = 8;

            if (inputPassValue.length >= minLen) {

                alert('yes');

                // for (let i = 0; i < inputPassValue.length; i++) {
                //     if (inputPassValue[i] === 'A') {
                //         alert('correct');
                //     } else {
                //         alert('incorrect');
                //     }
                // }
            } else {
                alert('no');
            }
        }
    }

    // passValidation();

    if (inputPass) {
        let inputPassValue = inputPass.value;
        console.log(inputPassValue);
    } else {
        console.log("Password input element not found.");
    }
});
