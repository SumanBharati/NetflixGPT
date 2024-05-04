export const checkDataValidations = (email, password) => {
    // const isNameValid = /^$|\s+/.test(name);
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    // if(!isNameValid) return "Name is not valid";

    if(!isEmailValid && !isPasswordValid) return "Both Email address and password are invalid."
    if(!isEmailValid) return "Email address is not valid.";
    if(!isPasswordValid) return "Password is not valid.";
    
    // if((!isNameValid && !isEmailValid && !isPasswordValid)
    //  || (!isNameValid && !isEmailValid)
    //  || (!isNameValid && !isPasswordValid)
    //  || (!isEmailValid && !isPasswordValid)) return "Multiple fields invalid";

    return null;
};