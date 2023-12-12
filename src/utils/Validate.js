export const checkValidData = (Email, password, fullName) => {
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email);
  const isPasswordValid = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/.test(password);
  const isFullName = /^[a-zA-Z-' ]+$/.test(fullName);

  if (!isEmailValid) return "Sorry, we can't find an account with this email address. Please try again or create a new account";
  if (!isPasswordValid) return "Incorrect password. Please try again";
  if (!isFullName) return "Name field cannot be empty";


  return null;
};
