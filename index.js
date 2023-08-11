const generatePassword = document.getElementById("generate");
const passwordField = document.getElementById("password");

const generateRandomPassword = () => {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|;:,.<>?";
  const passwordLength = 12;
  let newPassword = '';

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    newPassword += charset.charAt(randomIndex);
  }

  return newPassword;
};

generatePassword.addEventListener('click', () => {
  const newPassword = generateRandomPassword();
  passwordField.innerHTML =`<span class="text">${newPassword}</span>`;   
 });