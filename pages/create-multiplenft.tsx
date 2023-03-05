import Head from 'next/head';
import React from 'react';
import MultipleNftCreate from '../src/modules/CreateItemModule/MultipleNftCreate/MultipleNftCreate';

const MultipleCreateNft = () => {
    return (
        <>
            <Head>
                <title>LooBr | Create Multiple NFTs </title>
                <meta
                    name="description"
                    content="Design, Buy and Sell digital art and more. Use our interactive
social features and release your limitless imagination.
Welcome to the start of something great!"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MultipleNftCreate />;
        </>
    );
};

export default MultipleCreateNft;
