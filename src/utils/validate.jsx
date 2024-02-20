

export const validateEmailAndPass = (email, password) => {
    const regEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const passValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
    if(!regEmail) return 'Email ID is not valid';
    if(!passValid) return 'Password is not valid';
    return null;
}
