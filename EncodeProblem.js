function ceasarCipher(text) {
    let queryString = text.replace("ABCDEFGHIJKLMNOPQRSTUVWXYZ", function(f) {
        switch (f) {
            case 'z': return 'a';
            case 'c': return 'x';
            case 'p': return 'k';
            default:  return String.fromCharCode(1 + c.charCodeAt(0));
        }
    });
    return caesar.replace(/[ABCDEFGHIJKLMNOPQRSTUVWXYZ]+/g, function(string) {
        return string.toString();
    });

}