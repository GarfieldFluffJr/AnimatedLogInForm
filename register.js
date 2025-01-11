const newPassword = document.querySelector("#new-password");
const confirmPassword = document.querySelector("#confirm-password");
const email = document.querySelector("#email");

const newPasswordContainer = document.querySelector("#new-password-container");
const newPasswordInput = newPasswordContainer.querySelector("input");
const newPasswordLabel = newPasswordContainer.querySelector("label");
const newPasswordIcon = newPasswordContainer.querySelector("ion-icon");

const confirmPasswordContainer = document.querySelector(
  "#confirm-password-container"
);
const confirmPasswordInput = confirmPasswordContainer.querySelector("input");
const confirmPasswordLabel = confirmPasswordContainer.querySelector("label");
const confirmPasswordIcon = confirmPasswordContainer.querySelector("ion-icon");

const newEmail = document.querySelector("#new-email-container");
const newEmailInput = newEmail.querySelector("input");
const newEmailLabel = newEmail.querySelector("label");
const newEmailIcon = newEmail.querySelector("ion-icon");

const newEmailFunction = () => {
  console.log(email.validity);
  if (email.validity.valid) {
    newEmail.style.borderColor = "#24C36F";
    newEmailInput.style.color = "#24C36F";
    newEmailLabel.style.color = "#24C36F";
    newEmailIcon.style.color = "#24C36F";
  } else if (!email.validity.valid && email.value.length > 0) {
    newEmail.style.borderColor = "red";
    newEmailInput.style.color = "red";
    newEmailLabel.style.color = "red";
    newEmailIcon.style.color = "red";
  } else {
    newEmail.style.borderColor = "#fff";
    newEmailInput.style.color = "#fff";
    newEmailLabel.style.color = "#fff";
    newEmailIcon.style.color = "#fff";
  }
};

const checkPasswordMatch = () => {
  if (
    newPassword.value === confirmPassword.value &&
    confirmPassword.value.length > 0
  ) {
    confirmPasswordContainer.style.borderColor = "#24C36F";
    confirmPasswordInput.style.color = "#24C36F";
    confirmPasswordLabel.style.color = "#24C36F";
    confirmPasswordIcon.style.color = "#24C36F";
  } else if (
    newPassword.value !== confirmPassword.value &&
    confirmPassword.value.length > 0
  ) {
    confirmPasswordContainer.style.borderColor = "red";
    confirmPasswordInput.style.color = "red";
    confirmPasswordLabel.style.color = "red";
    confirmPasswordIcon.style.color = "red";
  } else {
    confirmPasswordContainer.style.borderColor = "#fff";
    confirmPasswordInput.style.color = "#fff";
    confirmPasswordLabel.style.color = "#fff";
    confirmPasswordIcon.style.color = "#fff";
  }
};

const checkNewPassword = () => {
  if (newPassword.value.length > 0) {
    newPasswordContainer.style.borderColor = "#24C36F";
    newPasswordInput.style.color = "#24C36F";
    newPasswordLabel.style.color = "#24C36F";
    newPasswordIcon.style.color = "#24C36F";
  } else {
    newPasswordContainer.style.borderColor = "#fff";
    newPasswordInput.style.color = "#fff";
    newPasswordLabel.style.color = "#fff";
    newPasswordIcon.style.color = "#fff";
  }
};
