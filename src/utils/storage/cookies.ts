export function setCookieFromClient(name: string, value: string, days: number = (365 * 10)) {	
    if (typeof document !== "undefined") {
        let expires = "";
        if (days) {
            const d = new Date();
            d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
            expires = "; expires=" + d.toUTCString();
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    } else {
        console.error("setCookie function can only be used in a client-side environment.");
    }
}

export function getCookieFromClient(name: string) {
    if (typeof document !== "undefined") {
        const nameEQ = name + "=";
        const ca = document.cookie.split(";");
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === " ") c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    } else {
        return null;
    }
}

export function getCookieFromRequest(req: Request, cookieName: string): string | null {
    const cookieHeader = req.headers.get("cookie");
    if (!cookieHeader) {
        return null;
    }

    const cookies = cookieHeader.split(';').reduce((acc, cookie) => {
        const [name, value] = cookie.split('=').map(c => c.trim());
        acc[name] = value;
        return acc;
    }, {} as Record<string, string>);

    return cookies[cookieName] || null;
}