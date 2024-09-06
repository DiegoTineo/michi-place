export function convertToBase64(data:string) {
    return Buffer.from(data).toString("base64");
}

export function convertFromBase64(base64String: string) {
    try{
        return Buffer.from(base64String, "base64").toString();
    }catch{
        return null
    }
}