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