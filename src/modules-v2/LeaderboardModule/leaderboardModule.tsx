import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import ImageComponent from '../../components/Image/ImageComponent';
import Image from 'next/image';
import Button from '../../components/Button/Button';
import { MinlandData } from './minlanddata';
import { Islandata1 } from './islanddata1';
import { Islandata2 } from './islanddata2';
import Verified from '../../components/verified';
import LandnameComponent from '../../components/landname/Landname';
import TopLandownerComponent from './Landowner';
import { kingData } from '../MapModule/king';
import axios from 'axios';
import { Follow } from '../../components/Follow/follow';
import { connectRoom } from '../../redux/messages/actions';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

const BACKEND_URL = process.env.NEXT_PUBLIC_MAP_API_URL;

const LeaderboardModule = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    function getWindowSize() {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }
    const conectRoom = (id: any) => {
        dispatch(
            connectRoom({
                recievedBy: id,
                type: 'PRIVATE'
            })
        );
    };
    const [islandOwners, setIslandOwners] = useState([]);
    const getKingdomshipData = async () => {
        axios.get(`${BACKEND_URL}/api/top/global`);
    };

    const getIslandsData = async () => {
        let islandOwnersRes = await axios.get(`${BACKEND_URL}/api/islandOwnersInfo/1`);
        setIslandOwners(islandOwnersRes.data);
    };

    const getAvatarURL = (url: string) => {
        return url
            ? `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_YOUR_CLOUD_NAME}/image/fetch/` + url
            : '/assets/images/default.png';
    };
    useEffect(() => {
        getIslandsData();
    }, []);

    return (
        <>
            <div className="container min-h-[50vh] py-16 pb-20 ">
                <div className="flex justify-center items-center flex-col">
                    <figure>
                        <ImageComponent src="/assets/images/crown.png" height={100} width={100} />
                    </figure>
                    <h2 className="font-Proxima-Bold text-white  mt-4 text-[2.5rem]">Kingdomship Leaderboard</h2>
                </div>
                <div className="grid grid-cols-3 gap-6 mt-12">
                    {islandOwners &&
                        islandOwners.map((item: any) => (
                            <>
                                <div className="mb-2">
                                    <p className="text-white text-sm">{item[0].island}</p>
                                    <div className="bg-[#1A1B22] px-4 py-1 flex justify-between">
                                        <div className="flex gap-2.5 items-center">
                                            <figure className="w-[40px] h-[40px]   rounded-full UerProfileImage bg-[#272737] flex items-center justify-center relative flex-shrink-0">
                                                <i className="w-[10px] rounded-full h-[10px] block absolute border-1 bottom-0 right-[30px] border-white z-10 bg-[#646465]"></i>
                                                <Image
                                                    width={40}
                                                    height={40}
                                                    className="rounded-full "
                                                    src={getAvatarURL(item[0].user.avatar)}
                                                    alt=""
                                                />
                                            </figure>
                                            <div>
                                                <div className="flex gap-1.5 items-center">
                                                    <h5 className="font-Proxima-Regular text-white text-lg">
                                                        {item[0].user.firstName} {item[0].user.lastName}
                                                    </h5>
                                                    {item[0].user.isVerfied && <Verified />}
                                                </div>

                                                <p className="text-base -mt-1">{item[0].followers} Followers</p>
                                            </div>
                                        </div>
                                        {item[0].info ? (
                                            <div className="flex gap-2 items-center">
                                                <Follow
                                                    customClass={
                                                        '!rounded-2xl !min-w-[80px] !max-w-[80px] !text-sm gold !w-16  h-8 !px-0'
                                                    }
                                                    userModule={true}
                                                    otherUser={item[0].info}
                                                />
                                                <Button
                                                    className="rounded-2xl   text-sm gold !w-16  h-8 !px-0  "
                                                    onClick={() => {
                                                        let dimentions = getWindowSize();
                                                        if (dimentions.innerWidth < 1024) {
                                                            router.push('/mobileviewchat');
                                                        }
                                                        conectRoom(item[0].info && item[0].info._id);
                                                    }}>
                                                    Chat
                                                </Button>
                                                <Button className="border-2 border-themecolor bg-transparent text-themecolor rounded-2xl  font-bold text-md !w-16  h-8 !px-0  ">
                                                    {item[0].landCount}
                                                </Button>
                                            </div>
                                        ) : (
                                            ''
                                        )}
                                    </div>
                                </div>
                            </>
                        ))}
                </div>
                {/* <div className='mt-6'>
                    <ImageComponent objectFit="cover" layout="fill"  src="/assets/images/landmap.png" alt="" figClassName='h-[550px] w-full relative' />
                    </div> */}
            </div>
        </>
    );
};

export default LeaderboardModule;
