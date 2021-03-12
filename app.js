// const prenom = 'Mervy';
// console.log(/M/.test(prenom));

// const name = 'Brad';
// const regExp = new RegExp('b');
// console.log(regExp.test(name));


// DOM elements
const form = document.getElementById('form');
const username = document.querySelector('.username');
const email = document.querySelector('.email');
const password = document.querySelector('.password');

// Username listener
username.addEventListener('change', function () {
  validUsername(this);
});

// Email listener
email.addEventListener('change', function () {
  validEmail(this);
});

// Password listner
password.addEventListener('change', function () {
  validPassword(this);
});

// Form submit listener
form.addEventListener('submit', sendForm);

const validUsername = () => {
  // Init msg
  let message;
  
  // Init validation
  let valid = false;

  // Get user input value
  const userInpUsername = username.value;

  // Valider le format du username
  const regUsername = /[-!@$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;

  const testUsername = regUsername.test(userInpUsername);

  // Minimum 3 charac in the password
  if (userInpUsername.length < 3) {
    message = 'Le nom d\'utilsateur doit contenir au moins 3 caractères';

    // Minimum 1 Maj in the username
  } else if(!/[A-Z]/.test(userInpUsername)) {
    message = 'Le nom d\'utilsateur doit contenir au moins une Majiscule';

    // Minimum 1 Mini in the username
  } else if(!/[a-z]/.test(userInpUsername)) {
    message = 'Le nom d\'utilsateur doit contenir au moins une Miniscule';

    // Minimum 1 number in the username
  } else if(/[0-9]/.test(userInpUsername)) {
    message = 'Le nom d\'utilsateur ne doit pas contenir de Nombre';

    // Symbols
  } else if (testUsername) {
    message = 'Le nom d\'utilsateur ne doit pas contenir de Symbole';
  }
  
  else {
    message = 'Username is Done';
    valid = true;
  }

  // Get small tag
  const small = username.nextElementSibling;

  if(valid) {
    small.innerHTML = 'Username Valide';
    small.className = 'text-success';
    return true;
  } else {
    small.innerHTML = message;
    small.className = 'text-danger';
    return false;
  }
}

const validEmail = () => {
  // Get user input value
  const userInpEmail = email.value;
  // Valider le format d'un email
  const regEmail = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,9}$', 'g');
  // Correspondence de la regExp
  const testEmail = regEmail.test(userInpEmail);

  // Get small tag
  const small = email.nextElementSibling;

  if(testEmail) {
    small.innerHTML = 'Email Valide';
    small.className = 'text-success';
    return true;
  } else {
    small.innerHTML = 'Email Invalide';
    small.className = 'text-danger';
    return false;
  }
}

const validPassword = () => {
  // Init msg
  let message;

  // Init validation
  let valid = false;

  // Get user input value
  const userInpPassword = password.value;

  // Valider le format du username
  const regPassword = /[-!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;

  const testPassword = regPassword.test(userInpPassword);

  // Minimum 3 charac in the password
  if (userInpPassword.length < 3) {
    message = 'Le mot de passe doit contenir au moins 3 caractères';

    // Minimum 1 Maj in the password
  } else if(!/[A-Z]/.test(userInpPassword)) {
    message = 'Le mot de passe doit contenir au moins une Majiscule';

    // Minimum 1 Mini in the password
  } else if(!/[a-z]/.test(userInpPassword)) {
    message = 'Le mot de passe doit contenir au moins une Miniscule';

    // Minimum 1 number in the password
  } else if(!/[0-9]/.test(userInpPassword)) {
    message = 'Le mot de passe doit contenir au moins un nombre';
  } else if(!testPassword) {
    message = 'Le mot de passe doit contenir au moins un Symole (@ # ? ^ - ! & ~ _ + = ` < > /)';
  } else {
    message = 'Mot de passe Valide';
    valid = true;
  }

  // Get small tag
  const small = password.nextElementSibling;

  if(valid) {
    small.innerHTML = 'Mot de passe Valide';
    small.className = 'text-success';
    return true;
  } else {
    small.innerHTML = message;
    small.className = 'text-danger';
    return false;
  }
}

function sendForm (e) {
  e.preventDefault();

  // Get small tag
  const small = email.nextElementSibling;
  const smallPass = password.nextElementSibling;
  const smallUsername = username.nextElementSibling;

  if (validUsername(username) && validEmail(email) && validPassword(password)) {
    form.submit();
    alert('Vos données ont été envoyer avec sucess');
  } else {
    small.innerHTML = 'Veuillez saisir une adresse Email';
    smallPass.innerHTML = 'Veuillez saisir un mot de passe';
    smallUsername.innerHTML = 'Veuillez saisir un nom d\'utilisateur';
    small.className = 'text-danger';
    smallPass.className = 'text-danger';
    smallUsername.className = 'text-danger';

    return;
  }
}