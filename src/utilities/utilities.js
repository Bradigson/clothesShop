class Utilities
{

    onlyLettes(cadena)
    {
        return /^[a-zA-Z]+$/.test(cadena);
    }

    onlyNumbers(cadena)
    {
        return /^[0-9]+$/.test(cadena);
    }

}

module.exports = new Utilities();