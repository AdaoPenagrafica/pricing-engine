import CryptoJS from 'crypto-js';

export function decrypt(cipherText: string, key: string): number {
  const bytes = CryptoJS.AES.decrypt(cipherText, key);
  const decrypted = bytes.toString(CryptoJS.enc.Utf8);
  return parseFloat(decrypted);
}