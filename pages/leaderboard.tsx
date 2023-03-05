import React from 'react';
import Head from 'next/head';

import TopLandownerModule from '../src/modules/TopLandownerModule/TopLandownerModule';

const TopLandOwner = () => {
    return (
        <div className="relative !min-h-[50vh]">
            <Head>
                <title>LooBr | TopLandOwner</title>

                <meta
                    name="description"
                    content="Design, Buy and Sell digital art and more. Use our interactive
social features and release your limitless imagination.
Welcome to the start of something great!"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <TopLandownerModule />
        </div>
    );
};

export default TopLandOwner;
