export function getStrippedPhoneNumber(number) {
    let phoneNumber = number;

    if (number) {
        if (number.toString().indexOf('62') === 0) {
            phoneNumber = number.toString().slice(2);
        } else if (number.toString().indexOf('+62') === 0) {
            phoneNumber = number.toString().slice(3);
        } else if (number.toString().indexOf('0062') === 0) {
            phoneNumber = number.toString().slice(4);
        } else if (number.toString().indexOf('0') === 0) {
            phoneNumber = number.toString().slice(1);
        }
    }
    return phoneNumber;
}

export function getCountryCodePrefixedNumber(number) {
    // returns a stripped number prefixed with 0
    if (!number || Number.isNaN(number)) {
        return null;
    }
    return 62 + getStrippedPhoneNumber(number);
}