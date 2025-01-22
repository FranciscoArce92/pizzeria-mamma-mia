// Validar que todos los campos sean obligatorios
export const validateRequiredFields = (fields) => {
    for (let key in fields) {
        if (!fields[key]) {
            return `El campo ${key} es obligatorio.`
        }
    }
    return null;
}

//Validar longitud mínima de la contraseña
export const validatePasswordLength = (password, minLength = 6) => {
    if (password.length < minLength) {
        return `La contraseña debe tener al menos ${minLength} caracteres.`
    }
    return null;
}

//Validar coincidencia de contraseñas
export const validatePasswordMatch = (password, confirmPassword) => {
    if (password !== confirmPassword) {
        return 'Las contraseñas no coinciden.'
    }
    return null;
}