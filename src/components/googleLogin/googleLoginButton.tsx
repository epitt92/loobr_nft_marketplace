import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';
import React, { useState } from 'react';
import Button from '../Button/Button';

export default function googleLoginButton({ onSuccess }: any) {
    const [showButton, setShowButton] = useState(false);
    return (
        <GoogleOAuthProvider
            clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}
            onScriptLoadSuccess={() => setShowButton(true)}>
            <GoogleCustomButton disabled={!showButton} loginCallback={onSuccess} />
        </GoogleOAuthProvider>
    );
}

const GoogleCustomButton = ({ disabled, loginCallback }: any) => {
    const login = useGoogleLogin({
        onSuccess: loginCallback,
        scope: 'https://www.googleapis.com/auth/userinfo.profile',
        flow: 'auth-code'
    });
    return (
        <Button
            className="w-full bg-transparent !rounded-[1.875rem] mb-6 border border-lightgray relative"
            disabled={disabled}
            onClick={() => login()}
        >
            <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[44px] top-[50%] translate-y-[-50%] w-[1.5rem] h-[1.5rem]">
                <g clipPath="url(#clip0_186_47)">
                    <path
                        d="M23.766 12.2765C23.766 11.4608 23.6999 10.6406 23.5588 9.83813H12.24V14.4591H18.7217C18.4528 15.9495 17.5885 17.2679 16.323 18.1056V21.104H20.19C22.4608 19.014 23.766 15.9274 23.766 12.2765Z"
                        fill="#4285F4"
                    />
                    <path
                        d="M12.24 24.0008C15.4764 24.0008 18.2058 22.9382 20.1944 21.1039L16.3274 18.1055C15.2516 18.8375 13.8626 19.252 12.2444 19.252C9.11376 19.252 6.45934 17.1399 5.50693 14.3003H1.51648V17.3912C3.55359 21.4434 7.70278 24.0008 12.24 24.0008Z"
                        fill="#34A853"
                    />
                    <path
                        d="M5.50253 14.3002C4.99987 12.8099 4.99987 11.196 5.50253 9.70569V6.61475H1.51649C-0.18551 10.0055 -0.18551 14.0004 1.51649 17.3912L5.50253 14.3002Z"
                        fill="#FBBC04"
                    />
                    <path
                        d="M12.24 4.74966C13.9508 4.7232 15.6043 5.36697 16.8433 6.54867L20.2694 3.12262C18.1 1.0855 15.2207 -0.034466 12.24 0.000808666C7.70277 0.000808666 3.55359 2.55822 1.51648 6.61481L5.50252 9.70575C6.45052 6.86173 9.10935 4.74966 12.24 4.74966Z"
                        fill="#EA4335"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_186_47">
                        <rect width="24" height="24" fill="white" />
                    </clipPath>
                </defs>
            </svg>
            <span className="text-white xs:ml-12">Continue with Google</span>
        </Button>
    );
};
