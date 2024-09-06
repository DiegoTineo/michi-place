'use client';

export const setLocalStorageItem = (key:string, jsonString:string) => {
    localStorage.setItem(key, jsonString);
}

export const getLocalStorageItem = (key:string) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
}