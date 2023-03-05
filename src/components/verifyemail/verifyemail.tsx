import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resendVerificationEmail } from '../../redux/auth/actions';
import Button from '../Button/Button';

const Verifyemail = ({ setstate }: any) => {
    const [first, setfirst] = useState(false);
    const [values, setValues] = useState({
        email: ''
    });

    const loading = useSelector((state: any) => state.auth.resendEmailLoading);
    const user = useSelector((state: any) => state.auth.user);

    const dispatch = useDispatch();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
        setstate(58);
        // event.preventDefault();
        // const data = {
        //     email: user?.email,
        // };
        // dispatch(resendVerificationEmail(data, setfirst));
    };

    return (
        <div className="py-8 lg:min-w-[40rem] flex justify-center flex-col items-center">
            <div className="mb-[1.25rem]">
                <svg width="78" height="81" viewBox="0 0 78 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1521_3242)">
                        <path
                            d="M67.5779 40.131L67.5916 40.1188C67.4546 39.9928 67.3104 39.8724 67.1655 39.7577L44.8154 19.5411C43.2187 18.0971 41.1473 17.2981 38.9999 17.2981C36.8525 17.2981 34.7811 18.0971 33.1844 19.5411L10.8344 39.7577C10.6877 39.8724 10.5452 39.9928 10.4082 40.1188L10.4219 40.131L10.4082 40.1431C10.5452 40.2691 10.6894 40.3895 10.8344 40.5042L33.1844 60.7208C34.7811 62.1648 36.8525 62.9638 38.9999 62.9638C41.1473 62.9638 43.2187 62.1648 44.8154 60.7208L67.1655 40.5042C67.3121 40.3895 67.4546 40.2691 67.5916 40.1431L67.5779 40.131Z"
                            fill="#FD9B02"
                        />
                        <path
                            opacity="0.15"
                            d="M67.5918 40.1189C67.4549 39.9929 67.3107 39.8725 67.1657 39.7578L44.8156 19.5412C43.2979 18.1687 41.3485 17.3768 39.3088 17.3041C37.269 17.2313 35.2688 17.8824 33.6582 19.1433C36.7569 17.6112 40.54 18.0931 43.209 20.5866L65.5591 41.4786C65.6519 41.5537 65.7426 41.6321 65.8318 41.712L67.1669 40.5043C67.3135 40.3896 67.4561 40.2692 67.593 40.1432L67.5794 40.131L67.5918 40.1189Z"
                            fill="white"
                        />
                        <path
                            d="M58.3133 23.1616H19.4936C16.5924 23.1616 14.2405 25.5269 14.2405 28.4447V63.0228C14.2405 65.9406 16.5924 68.3059 19.4936 68.3059H58.3133C61.2145 68.3059 63.5664 65.9406 63.5664 63.0228V28.4447C63.5664 25.5269 61.2145 23.1616 58.3133 23.1616Z"
                            fill="#E9F2E1"
                        />
                        <path
                            d="M10.8373 39.7549C10.7636 39.8122 10.6913 39.8712 10.6204 39.9318C10.6908 39.8726 10.7621 39.8145 10.8344 39.7577L10.8373 39.7549Z"
                            fill="#FDB402"
                        />
                        <path
                            d="M67.3852 39.9368C67.455 39.9961 67.5241 40.0579 67.5916 40.1189L67.5779 40.1311L67.5916 40.1432C67.4546 40.2692 67.3105 40.3896 67.1655 40.5043L44.8154 60.7209C43.2187 62.165 41.1473 62.9639 38.9999 62.9639C36.8525 62.9639 34.7811 62.165 33.1844 60.7209L10.8344 40.5043C10.6878 40.3896 10.5452 40.2692 10.4082 40.1432L10.4219 40.1311L10.4082 40.1189C10.4757 40.0567 10.5445 39.996 10.6147 39.9368C9.83578 40.5961 9.20983 41.4189 8.78075 42.3474C8.35167 43.276 8.12985 44.2877 8.13086 45.3115V73.9679C8.13086 75.8331 8.86759 77.6218 10.179 78.9407C11.4904 80.2595 13.269 81.0005 15.1236 81.0005H62.8763C64.7308 81.0005 66.5095 80.2595 67.8208 78.9407C69.1322 77.6218 69.8689 75.8331 69.8689 73.9679V45.3115C69.87 44.2877 69.6481 43.276 69.2191 42.3474C68.79 41.4189 68.164 40.5961 67.3852 39.9368Z"
                            fill="#F1C94A"
                        />
                        <path
                            d="M67.3797 39.9318C67.3087 39.8712 67.2363 39.8122 67.1624 39.7549L67.1656 39.7577C67.2392 39.8143 67.3106 39.8723 67.3797 39.9318Z"
                            fill="#FDB402"
                        />
                        <path
                            opacity="0.1"
                            d="M45.4777 57.7196C41.7946 60.6279 36.2053 60.6279 32.5222 57.7196L11.4758 41.0903L33.1825 60.7248C34.7798 62.1697 36.8522 62.9691 39.0006 62.9691C41.1489 62.9691 43.2213 62.1697 44.8186 60.7248L66.5257 41.0903L45.4777 57.7196Z"
                            fill="black"
                        />
                        <path
                            opacity="0.28"
                            d="M11.3465 40.9676L10.8344 40.5043C10.6878 40.3896 10.5452 40.2692 10.4082 40.1432L10.4219 40.1311L10.4082 40.1189C10.4757 40.0567 10.5445 39.996 10.6147 39.9368C9.83578 40.5961 9.20984 41.4189 8.78076 42.3474C8.35167 43.276 8.12986 44.2877 8.13087 45.3115V73.9679C8.12858 75.5082 8.63144 77.0062 9.56154 78.2299C9.06329 77.2439 8.80439 76.1532 8.80604 75.0473V46.3909C8.805 45.3543 9.03227 44.3304 9.47152 43.3927C9.91076 42.455 10.5511 41.6268 11.3465 40.9676Z"
                            fill="#FDFDFD"
                        />
                        <path
                            opacity="0.1"
                            d="M44.8179 60.7249L45.9485 59.7021L44.3564 58.2677C41.2147 55.468 36.7845 55.468 33.6428 58.2677L32.0515 59.7021L33.1822 60.7249C34.7794 62.1696 36.8517 62.969 39 62.969C41.1483 62.969 43.2206 62.1696 44.8179 60.7249Z"
                            fill="black"
                        />
                        <path
                            opacity="0.2"
                            d="M45.9485 59.7021L44.8175 60.7249C43.2202 62.1698 41.1478 62.9692 38.9994 62.9692C36.8511 62.9692 34.7787 62.1698 33.1814 60.7249L32.0515 59.7021L10.4429 79.1759C11.684 80.4479 13.3175 81.0021 15.1249 81.0021H62.8764C64.6838 81.0021 66.3229 80.2718 67.5584 79.1759L45.9485 59.7021Z"
                            fill="#FD0002"
                        />
                        <path
                            d="M10.4285 79.1791C11.7132 80.3535 13.3876 81.003 15.1237 81.0005H62.8764C64.6125 81.003 66.287 80.3535 67.5717 79.1791L44.3565 60.775C42.8301 59.565 40.9432 58.907 38.9997 58.907C37.0562 58.907 35.1692 59.565 33.6429 60.775L10.4285 79.1791Z"
                            fill="#F1C94A"
                        />
                        <path
                            opacity="0.08"
                            d="M67.9612 40.4845C68.4191 41.4378 68.6563 42.4831 68.6548 43.5419V72.1983C68.6548 74.0634 67.9181 75.8522 66.6067 77.171C65.2953 78.4899 63.5167 79.2308 61.6621 79.2308H13.9094C12.9571 79.2319 12.0146 79.0367 11.1402 78.6574C10.2657 78.2781 9.47776 77.7227 8.82495 77.0253C9.3968 78.2166 10.2912 79.2216 11.4053 79.9247C12.5195 80.6279 13.8082 81.0007 15.1236 81.0005H62.8763C64.7309 81.0005 66.5095 80.2595 67.8209 78.9407C69.1323 77.6218 69.869 75.8331 69.869 73.9679V45.3115C69.8713 43.5162 69.1884 41.7883 67.9612 40.4845Z"
                            fill="#FD0002"
                        />
                        <path
                            d="M38.9999 52.8747C45.6364 52.8747 51.0164 47.4641 51.0164 40.7898C51.0164 34.1154 45.6364 28.7048 38.9999 28.7048C32.3634 28.7048 26.9834 34.1154 26.9834 40.7898C26.9834 47.4641 32.3634 52.8747 38.9999 52.8747Z"
                            fill="#7DC41F"
                        />
                        <path
                            d="M49.2283 34.4476C49.8376 35.9187 50.1505 37.4968 50.1488 39.0905C50.1488 45.7651 44.7688 51.1754 38.1323 51.1754C33.809 51.1754 30.019 48.8786 27.9036 45.4331C29.7134 49.8028 33.9994 52.8752 38.9999 52.8752C45.6363 52.8752 51.0164 47.4624 51.0164 40.7902C51.0196 38.5498 50.4002 36.353 49.2283 34.4476Z"
                            fill="#72B31C"
                        />
                        <path
                            d="M36.1484 47.58C36.3617 48.1096 36.9208 48.4687 37.5249 48.4687C37.5482 48.4687 37.5718 48.4687 37.5951 48.4687C38.1912 48.4412 38.6587 48.0813 38.8166 47.5296C40.0677 43.1444 41.9948 38.9496 44.5432 35.0621C44.8035 34.665 44.8216 34.2138 44.5931 33.8228C44.3493 33.4063 43.8584 33.1292 43.3419 33.1175C43.1073 33.1071 42.8741 33.1586 42.6654 33.2668C42.4567 33.3751 42.2798 33.5364 42.1522 33.7347C40.2078 36.6976 38.5951 39.8676 37.3433 43.1868L35.9877 39.816C35.6721 39.032 34.7828 38.8086 34.1044 39.0453C33.3967 39.2925 33.0742 39.9473 33.3381 40.6029L36.1484 47.58Z"
                            fill="white"
                        />
                        <path d="M25.56 3.04895L26.2456 18.613L18.7424 4.26601L25.56 3.04895Z" fill="#7DC41F" />
                        <path d="M58.4553 1.21746L50.9521 15.564L51.6378 0L58.4553 1.21746Z" fill="#7DC41F" />
                        <path d="M78 18.9386L66.1133 24.9083L74.4519 15.8282L78 18.9386Z" fill="#7DC41F" />
                        <path d="M3.54816 15.1589L11.8868 24.239L0 18.2692L3.54816 15.1589Z" fill="#7DC41F" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1521_3242">
                            <rect width="78" height="81" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <h5 className="text-base text-[#FFFFFF] font-normal mb-3">Verify your email</h5>
            <p className="sm:w-[25.625rem] text-sm text-[#A1A1A5] text-center mb-[2.25rem]">
                Almost there! We’ve sent a verification email to your email address. You need to verify your email
                address to log into looBr.
            </p>
            {first == false ? (
                <Button
                    className="py-3 px-[1.75rem] rounded-[1.875rem] text-sm"
                    onClick={handleSubmit}
                    isLoading={loading}
                    disabled={loading}>
                    Resend Email
                </Button>
            ) : (
                <Button className="py-3 px-[1.75rem] rounded-[1.875rem] border border-[#F1C94A] text-[#F1C94A] text-sm bg-transparent">
                    Email Resent
                    <svg
                        className="ml-1"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.2871 6.20508H11.4627C11.2834 6.20508 11.1129 6.29121 11.0074 6.43887L8.24412 10.2709L6.99256 8.53418C6.88709 8.38828 6.71834 8.30039 6.53728 8.30039H5.71287C5.59861 8.30039 5.53181 8.43047 5.59861 8.52363L7.78885 11.5611C7.84059 11.6334 7.9088 11.6922 7.98782 11.7328C8.06684 11.7734 8.1544 11.7946 8.24324 11.7946C8.33208 11.7946 8.41964 11.7734 8.49866 11.7328C8.57768 11.6922 8.64589 11.6334 8.69763 11.5611L12.3996 6.42832C12.4681 6.33516 12.4013 6.20508 12.2871 6.20508Z"
                            fill="#00F444"
                        />
                        <path
                            d="M9 1.125C4.65117 1.125 1.125 4.65117 1.125 9C1.125 13.3488 4.65117 16.875 9 16.875C13.3488 16.875 16.875 13.3488 16.875 9C16.875 4.65117 13.3488 1.125 9 1.125ZM9 15.5391C5.38945 15.5391 2.46094 12.6105 2.46094 9C2.46094 5.38945 5.38945 2.46094 9 2.46094C12.6105 2.46094 15.5391 5.38945 15.5391 9C15.5391 12.6105 12.6105 15.5391 9 15.5391Z"
                            fill="#00F444"
                        />
                    </svg>
                </Button>
            )}
        </div>
    );
};

export default Verifyemail;
