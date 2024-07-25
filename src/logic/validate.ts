export const validateDate = (date: string) => {
    return !isNaN(Date.parse(date)) || 'Fecha inválida'
};

export const validateCheckoutDate = (checkinValue:string, checkoutValue: string) => {
    const isValidDate = validateDate(checkoutValue);
    if(typeof isValidDate === "string") return isValidDate
    return new Date(checkoutValue) > new Date(checkinValue) || 'La fecha de salida debe ser posterior a la fecha de ingreso'
};