export const validateDate = (date: string) => {
    return !isNaN(Date.parse(date)) || 'Fecha de ingreso inválida'
};

export const validateCheckoutDate = (checkinValue:string, checkoutValue: string) => {
    return new Date(checkoutValue) > new Date(checkinValue) || 'Fecha de salida inválida'
};