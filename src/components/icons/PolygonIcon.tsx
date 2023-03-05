import React from 'react';

const PolygonIcon = ({className}:any) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" className={`${className?className:""}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                fill="#7C49CC"
            />
            <path
                d="M16.3111 9.2789C16.0206 9.11273 15.6471 9.11273 15.3151 9.2789L12.9909 10.6498L11.4138 11.5222L9.13119 12.8931C8.84067 13.0593 8.46715 13.0593 8.13513 12.8931L6.35052 11.813C6.06 11.6468 5.85249 11.3145 5.85249 10.9406V8.86347C5.85249 8.53113 6.0185 8.19879 6.35052 7.99108L8.13513 6.95251C8.42565 6.78634 8.79917 6.78634 9.13119 6.95251L10.9158 8.03262C11.2063 8.19879 11.4138 8.53113 11.4138 8.90501V10.2759L12.9909 9.36198V7.94953C12.9909 7.61719 12.8249 7.28485 12.4929 7.07714L9.17269 5.12463C8.88218 4.95846 8.50865 4.95846 8.17663 5.12463L4.77342 7.11868C4.4414 7.28485 4.27539 7.61719 4.27539 7.94953V11.8545C4.27539 12.1869 4.4414 12.5192 4.77342 12.7269L8.13513 14.6795C8.42565 14.8456 8.79917 14.8456 9.13119 14.6795L11.4138 13.3501L12.9909 12.4361L15.2736 11.1068C15.5641 10.9406 15.9376 10.9406 16.2696 11.1068L18.0542 12.1453C18.3448 12.3115 18.5523 12.6439 18.5523 13.0177V15.0949C18.5523 15.4272 18.3863 15.7596 18.0542 15.9673L16.3111 17.0058C16.0206 17.172 15.6471 17.172 15.3151 17.0058L13.5305 15.9673C13.2399 15.8011 13.0324 15.4688 13.0324 15.0949V13.7655L11.4553 14.6795V16.0504C11.4553 16.3827 11.6213 16.715 11.9534 16.9228L15.3151 18.8753C15.6056 19.0414 15.9791 19.0414 16.3111 18.8753L19.6728 16.9228C19.9634 16.7566 20.1709 16.4242 20.1709 16.0504V12.1038C20.1709 11.7715 20.0049 11.4391 19.6728 11.2314L16.3111 9.2789Z"
                fill="white"
            />
        </svg>
    );
};

export default PolygonIcon;
