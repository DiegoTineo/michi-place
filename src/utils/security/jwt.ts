import CryptoJS from "crypto-js";

export const generateAESKey = (seed: string): string => {
    return CryptoJS.SHA256(seed).toString(CryptoJS.enc.Hex);
};

export const encryptString = (plainText: string, aesKey: string): string => {
    const encrypted = CryptoJS.AES.encrypt(plainText, aesKey).toString();
    return encrypted;
};

export const decryptString = (
    encryptedText: string,
    aesKey: string
): string => {
    const bytes = CryptoJS.AES.decrypt(encryptedText, aesKey);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);
    return decrypted;
};
