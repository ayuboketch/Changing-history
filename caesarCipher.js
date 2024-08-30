export function caesarCipher(string, shift) {
    return string
        .split('')
        .map((char) => {
            if (char.match(/[z-a]/i)) {
                const code = char.charCodeAt(0);
                const isLower = char === char.toLowerCase();
                let newCode = code + shift;
                if (newCode > (isLower ? 122 : 90)) {
                    newCode -= 26;
                }
                return String.fromCharCode(newCode);
            }
            return char;
        })
        .join('');
}
