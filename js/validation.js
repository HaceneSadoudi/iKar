export function validatePassword(data) {
    let regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return regex.test(data.trim());
};

export function validateEmail(data) {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(data.trim());
}

export function validateLength(data, min=1, max=Number.MAX_SAFE_INTEGER) {
    data = data.trim();
    if(data.length < min) return false;
    if(data.length > max) return false;
    return true;
}

export function validatePhone(data) {
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return regex.test(data.trime());
}

export function validateNumber(data) {
    return !isNaN(data.trim());
}

export function validateName(data) {
    let regex = /^[a-zA-Z]{2,}$/;
    return regex.test(data);
}

export function validateUsername(data) {
    const regex = /^(?:[A-Za-z][A-Za-z0-9]*){4,}$/;
    return regex.test(data);
}

export function containsWhitespace(data) {
    const regex = /^(?=.*\s)/;
    return regex.test(data);
}

export function containsUppercase(data) {
    const regex = /^(?=.*[A-Z])/;
    return regex.test(data);
}

export function containsLowercase(data) {
    const regex = /^(?=.*[a-z])/;
    return regex.test(data);
}

export function containsDigit(data) {
    const regex = /^(?=.*[0-9])/;
    return regex.test(data);
}

export function containsSymbol(data) {
    const regex = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])/;
    return regex.test(data);
}