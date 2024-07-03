const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');
const resultsList = document.querySelector('#results-list');

const searchHandler = (e) => {
    e.preventDefault();
    fetch(`https://restcountries.com/v3.1/name/${searchInput.value}`)
        .then((res) => res.json())
        .then((data) => {
            data.forEach((country) => {
                const li = document.createElement('li');
                li.textContent = country.name.common;
                resultsList.appendChild(li);
            });
        });
};
searchForm.addEventListener('submit', searchHandler);

// const signUpForm = document.querySelector('#sign-up-form');
// const firstNameInput = document.querySelector('#first-name');
// const lastNameInput = document.querySelector('#last-name');
// const emailInput = document.querySelector('#email');
// const passwordInput = document.querySelector('#password');
// const profilePicInput = document.querySelector('#profile-pic');
// const radioInputs = document.querySelectorAll('input[name="account-type"]');
// // console.log(radioInputs[0]);

// const signUpHandler = (e) => {
//     e.preventDefault();
//     // let checkedRadio;
//     // if (radioInputs[0].checked) {
//     //     checkedRadio = radioInputs[0].value;
//     // } else {
//     //     checkedRadio = radioInputs[1].value;
//     // }
//     const checkedRadio = radioInputs[0].checked
//         ? (checkedRadio = radioInputs[0].value)
//         : (checkedRadio = radioInputs[1].value);

//     const userObj = {
//         firstName: firstNameInput.value,
//         lastName: lastNameInput.value,
//         email: emailInput.value,
//         password: passwordInput.value,
//         profilePic: profilePicInput.value,
//         accountType: checkedRadio,
//     };
//     localStorage.setItem('user', JSON.stringify(userObj));

//     firstNameInput.value = '';
//     lastNameInput.value = '';
//     emailInput.value = '';
//     passwordInput.value = '';
//     profilePicInput.value = '';
//     radioInputs[0].checked = false;
//     radioInputs[1].checked = false;
// };

// signUpForm.addEventListener('submit', signUpHandler);

const signUpForm = document.querySelector('#sign-up-form');

const signUpSubmitHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
    const data = new FormData(e.target);
    const dataObj = Object.fromEntries(data.entries());
    // console.log(dataObj);
    localStorage.setItem('user', JSON.stringify(dataObj));
    e.target.reset();
};

signUpForm.addEventListener('submit', signUpSubmitHandler);
