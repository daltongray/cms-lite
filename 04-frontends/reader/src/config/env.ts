// prettier-ignore
export const env = {

    NODE_ENV: import.meta.env.NODE_ENV,

    // firebase rocket emulator
    VITE_FIREBASE_ROCKET_STORAGE_EMULATOR_HOST: import.meta.env.VITE_FIREBASE_ROCKET_STORAGE_EMULATOR_HOST,

    // firebase Rocket
    VITE_ROCKET_API_KEY: import.meta.env.VITE_ROCKET_API_KEY,
    VITE_ROCKET_APP_ID: import.meta.env.VITE_ROCKET_APP_ID,
    VITE_ROCKET_MESSAGING_SENDER_ID: import.meta.env.VITE_ROCKET_MESSAGING_SENDER_ID,
    VITE_ROCKET_PROJECT_ID: import.meta.env.VITE_ROCKET_PROJECT_ID,
    VITE_ROCKET_STORAGE_BUCKET: import.meta.env.VITE_ROCKET_STORAGE_BUCKET,
    VITE_ROCKET_MEASUREMENT_ID: import.meta.env.VITE_ROCKET_MEASUREMENT_ID,

    VITE_SW_ENV: import.meta.env.VITE_SW_ENV,
} as const;
