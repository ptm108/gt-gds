const dev = /development/i.test(process.env.NEXT_PUBLIC_ENV);

export const API_URL = dev ? "http://localhost:3000/api" : "";
