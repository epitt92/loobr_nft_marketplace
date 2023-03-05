import React, { useState } from 'react';
import Image from 'next/image';
import { Stagedata } from './stageData';
import Stage from '../../pages/stage';
import Button from '../../components/Button/Button';
import Popups from '../../components/popup/poups';
import ImageComponent from '../../components/Image/ImageComponent';
import { TRANSFORMATION_NAMES } from '../../constants/enums';

const Stagecomponent = ({ data }: any) => {
    const [popup, setPopup] = useState(false);
    const [state, setState] = useState(-1);
    return (
        <div>
            {Stagedata.map((item, i) => {
                return (
                    <div className=" border-2 mt-8 border-[#2B2B35] rounded-[24px] p-8" key={i}>
                        <div className="flex justify-between">
                            <h3 className="text-white">{item.name}</h3>
                            {data ? (
                                <svg
                                    className=""
                                    width="36"
                                    height="36"
                                    viewBox="0 0 36 36"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="36" height="36" rx="8" fill="#EA4335" fillOpacity="0.15" />
                                    <path
                                        d="M27.0697 11.23C25.4597 11.07 23.8497 10.95 22.2297 10.86V10.85L22.0097 9.55C21.8597 8.63 21.6397 7.25 19.2997 7.25H16.6797C14.3497 7.25 14.1297 8.57 13.9697 9.54L13.7597 10.82C12.8297 10.88 11.8997 10.94 10.9697 11.03L8.92967 11.23C8.50967 11.27 8.20967 11.64 8.24967 12.05C8.28967 12.46 8.64967 12.76 9.06967 12.72L11.1097 12.52C16.3497 12 21.6297 12.2 26.9297 12.73C26.9597 12.73 26.9797 12.73 27.0097 12.73C27.3897 12.73 27.7197 12.44 27.7597 12.05C27.7897 11.64 27.4897 11.27 27.0697 11.23Z"
                                        fill="#EA4335"
                                    />
                                    <path
                                        d="M25.2297 14.14C24.9897 13.89 24.6597 13.75 24.3197 13.75H11.6797C11.3397 13.75 10.9997 13.89 10.7697 14.14C10.5397 14.39 10.4097 14.73 10.4297 15.08L11.0497 25.34C11.1597 26.86 11.2997 28.76 14.7897 28.76H21.2097C24.6997 28.76 24.8397 26.87 24.9497 25.34L25.5697 15.09C25.5897 14.73 25.4597 14.39 25.2297 14.14ZM19.6597 23.75H16.3297C15.9197 23.75 15.5797 23.41 15.5797 23C15.5797 22.59 15.9197 22.25 16.3297 22.25H19.6597C20.0697 22.25 20.4097 22.59 20.4097 23C20.4097 23.41 20.0697 23.75 19.6597 23.75ZM20.4997 19.75H15.4997C15.0897 19.75 14.7497 19.41 14.7497 19C14.7497 18.59 15.0897 18.25 15.4997 18.25H20.4997C20.9097 18.25 21.2497 18.59 21.2497 19C21.2497 19.41 20.9097 19.75 20.4997 19.75Z"
                                        fill="#EA4335"
                                    />
                                </svg>
                            ) : (
                                <>
                                    {item.name == 'Social work' ? (
                                        <Button className='"!px-8 !py-4  !text-transparent !bg-transparent rounded-[50px] !text-lg'>
                                            nothing
                                        </Button>
                                    ) : (
                                        <Button
                                            onClick={() => {
                                                setPopup(true);
                                                setState(75);
                                            }}
                                            className="!px-8 !py-4 !text-[#000000] rounded-[50px] !text-lg">
                                            Join
                                        </Button>
                                    )}
                                </>
                            )}
                        </div>
                        <p className={`  ${data ? 'mt-6' : ''} text-white sm:w-[36.625rem]`}>{item.text}</p>
                        <div className="flex justify-between items-center">
                            <div className="mt-6 flex gap-4">
                                <figure className="">
                                    <ImageComponent
                                        src={item.src1}
                                        height={40}
                                        width={40}
                                        transformation={TRANSFORMATION_NAMES.fit_50x50}
                                    />
                                </figure>
                                <figure className="">
                                    <ImageComponent
                                        src={item.src2}
                                        height={40}
                                        width={40}
                                        transformation={TRANSFORMATION_NAMES.fit_50x50}
                                    />
                                </figure>
                                <figure className="">
                                    <ImageComponent
                                        src={item.src3}
                                        height={40}
                                        width={40}
                                        transformation={TRANSFORMATION_NAMES.fit_50x50}
                                    />
                                </figure>
                            </div>
                            <div className="flex gap-4 mt-6">
                                <div className="h-[39px] bg-[#43434C] rounded-md flex justify-center items-center px-4 gap-2">
                                    {item.name === 'Social work' ? (
                                        <svg
                                            width="16"
                                            height="17"
                                            viewBox="0 0 16 17"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.1681 2.87203V1.83203C11.1681 1.5587 10.9415 1.33203 10.6681 1.33203C10.3948 1.33203 10.1681 1.5587 10.1681 1.83203V2.83203H5.83479V1.83203C5.83479 1.5587 5.60812 1.33203 5.33479 1.33203C5.06145 1.33203 4.83479 1.5587 4.83479 1.83203V2.87203C3.03479 3.0387 2.16145 4.11203 2.02812 5.70536C2.01479 5.8987 2.17479 6.0587 2.36145 6.0587H13.6415C13.8348 6.0587 13.9948 5.89203 13.9748 5.70536C13.8415 4.11203 12.9681 3.0387 11.1681 2.87203Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M13.3333 7.05859H2.66667C2.3 7.05859 2 7.35859 2 7.72526V11.8319C2 13.8319 3 15.1653 5.33333 15.1653H10.6667C13 15.1653 14 13.8319 14 11.8319V7.72526C14 7.35859 13.7 7.05859 13.3333 7.05859ZM6.14 12.6386C6.10667 12.6653 6.07333 12.6986 6.04 12.7186C6 12.7453 5.96 12.7653 5.92 12.7786C5.88 12.7986 5.84 12.8119 5.8 12.8186C5.75333 12.8253 5.71333 12.8319 5.66667 12.8319C5.58 12.8319 5.49333 12.8119 5.41333 12.7786C5.32667 12.7453 5.26 12.6986 5.19333 12.6386C5.07333 12.5119 5 12.3386 5 12.1653C5 11.9919 5.07333 11.8186 5.19333 11.6919C5.26 11.6319 5.32667 11.5853 5.41333 11.5519C5.53333 11.4986 5.66667 11.4853 5.8 11.5119C5.84 11.5186 5.88 11.5319 5.92 11.5519C5.96 11.5653 6 11.5853 6.04 11.6119C6.07333 11.6386 6.10667 11.6653 6.14 11.6919C6.26 11.8186 6.33333 11.9919 6.33333 12.1653C6.33333 12.3386 6.26 12.5119 6.14 12.6386ZM6.14 10.3053C6.01333 10.4253 5.84 10.4986 5.66667 10.4986C5.49333 10.4986 5.32 10.4253 5.19333 10.3053C5.07333 10.1786 5 10.0053 5 9.83193C5 9.65859 5.07333 9.48526 5.19333 9.35859C5.38 9.17193 5.67333 9.11193 5.92 9.21859C6.00667 9.25193 6.08 9.29859 6.14 9.35859C6.26 9.48526 6.33333 9.65859 6.33333 9.83193C6.33333 10.0053 6.26 10.1786 6.14 10.3053ZM8.47333 12.6386C8.34667 12.7586 8.17333 12.8319 8 12.8319C7.82667 12.8319 7.65333 12.7586 7.52667 12.6386C7.40667 12.5119 7.33333 12.3386 7.33333 12.1653C7.33333 11.9919 7.40667 11.8186 7.52667 11.6919C7.77333 11.4453 8.22667 11.4453 8.47333 11.6919C8.59333 11.8186 8.66667 11.9919 8.66667 12.1653C8.66667 12.3386 8.59333 12.5119 8.47333 12.6386ZM8.47333 10.3053C8.44 10.3319 8.40667 10.3586 8.37333 10.3853C8.33333 10.4119 8.29333 10.4319 8.25333 10.4453C8.21333 10.4653 8.17333 10.4786 8.13333 10.4853C8.08667 10.4919 8.04667 10.4986 8 10.4986C7.82667 10.4986 7.65333 10.4253 7.52667 10.3053C7.40667 10.1786 7.33333 10.0053 7.33333 9.83193C7.33333 9.65859 7.40667 9.48526 7.52667 9.35859C7.58667 9.29859 7.66 9.25193 7.74667 9.21859C7.99333 9.11193 8.28667 9.17193 8.47333 9.35859C8.59333 9.48526 8.66667 9.65859 8.66667 9.83193C8.66667 10.0053 8.59333 10.1786 8.47333 10.3053ZM10.8067 12.6386C10.68 12.7586 10.5067 12.8319 10.3333 12.8319C10.16 12.8319 9.98667 12.7586 9.86 12.6386C9.74 12.5119 9.66667 12.3386 9.66667 12.1653C9.66667 11.9919 9.74 11.8186 9.86 11.6919C10.1067 11.4453 10.56 11.4453 10.8067 11.6919C10.9267 11.8186 11 11.9919 11 12.1653C11 12.3386 10.9267 12.5119 10.8067 12.6386ZM10.8067 10.3053C10.7733 10.3319 10.74 10.3586 10.7067 10.3853C10.6667 10.4119 10.6267 10.4319 10.5867 10.4453C10.5467 10.4653 10.5067 10.4786 10.4667 10.4853C10.42 10.4919 10.3733 10.4986 10.3333 10.4986C10.16 10.4986 9.98667 10.4253 9.86 10.3053C9.74 10.1786 9.66667 10.0053 9.66667 9.83193C9.66667 9.65859 9.74 9.48526 9.86 9.35859C9.92667 9.29859 9.99333 9.25193 10.08 9.21859C10.2 9.16526 10.3333 9.15193 10.4667 9.17859C10.5067 9.18526 10.5467 9.19859 10.5867 9.21859C10.6267 9.23193 10.6667 9.25193 10.7067 9.27859C10.74 9.30526 10.7733 9.33193 10.8067 9.35859C10.9267 9.48526 11 9.65859 11 9.83193C11 10.0053 10.9267 10.1786 10.8067 10.3053Z"
                                                fill="white"
                                            />
                                        </svg>
                                    ) : (
                                        <div className="bg-[#FB0202] h-[10px] w-[10px] rounded-full"></div>
                                    )}
                                    <p className="text-white">{item.status}</p>
                                </div>
                                <div className="h-[39px] bg-[#43434C] rounded-md flex justify-center items-center px-4 gap-2">
                                    {item.name == 'Social work' ? (
                                        <svg
                                            width="14"
                                            height="15"
                                            viewBox="0 0 14 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6.9987 0.832031C3.32536 0.832031 0.332031 3.82536 0.332031 7.4987C0.332031 11.172 3.32536 14.1654 6.9987 14.1654C10.672 14.1654 13.6654 11.172 13.6654 7.4987C13.6654 3.82536 10.672 0.832031 6.9987 0.832031ZM9.8987 9.8787C9.80536 10.0387 9.6387 10.1254 9.46536 10.1254C9.3787 10.1254 9.29203 10.1054 9.21203 10.052L7.14536 8.8187C6.63203 8.51203 6.25203 7.8387 6.25203 7.24536V4.51203C6.25203 4.2387 6.4787 4.01203 6.75203 4.01203C7.02536 4.01203 7.25203 4.2387 7.25203 4.51203V7.24536C7.25203 7.48536 7.45203 7.8387 7.6587 7.9587L9.72536 9.19203C9.96536 9.33203 10.0454 9.6387 9.8987 9.8787Z"
                                                fill="white"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8.0013 7.9987C9.84225 7.9987 11.3346 6.50631 11.3346 4.66536C11.3346 2.82442 9.84225 1.33203 8.0013 1.33203C6.16035 1.33203 4.66797 2.82442 4.66797 4.66536C4.66797 6.50631 6.16035 7.9987 8.0013 7.9987Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M8.00141 9.66797C4.66141 9.66797 1.94141 11.908 1.94141 14.668C1.94141 14.8546 2.08807 15.0013 2.27474 15.0013H13.7281C13.9147 15.0013 14.0614 14.8546 14.0614 14.668C14.0614 11.908 11.3414 9.66797 8.00141 9.66797Z"
                                                fill="white"
                                            />
                                        </svg>
                                    )}

                                    <p className="text-white mt-1">{item.total}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}

            {state && (
                <Popups show={popup} hide={setPopup} state={state} setstate={setState} setPopup={false} close="close" />
            )}
        </div>
    );
};

export default Stagecomponent;
