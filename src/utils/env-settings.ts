interface EnvConfig {
    readonly workosClientId: string;
    readonly workosApiKey: string;
    readonly workosApiHostName: string;
    readonly redirectUri: string;
    readonly devMode: boolean;
}

export const getEnvSettings = (): EnvConfig => {
    const workosClientId = import.meta.env.VITE_WORKOS_CLIENT_ID;
    const workosApiKey = import.meta.env.VITE_WORKOS_API_KEY;
    const workosApiHostName = import.meta.env.VITE_WORKOS_API_HOSTNAME;
    const redirectUri = import.meta.env.VITE_REDIRECT_URI;
    const devMode = import.meta.env.VITE_DEV_MODE;

    if (!workosClientId || !workosApiKey || !workosApiHostName ||!redirectUri ||!devMode) {
        throw new Error('Missing required environment variables');
    }

    return Object.freeze({
        workosClientId,
        workosApiKey,
        workosApiHostName,
        redirectUri,
        devMode,
    });
};