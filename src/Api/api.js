import React from 'react';
import UserPost from './endpoints/UserPost';
import TokenPost from './endpoints/TokenPost';
import PhotoPost from './endpoints/PhotoPost';
import PhotoGet from './endpoints/PhotoGet';

function Api() {
    return (
        <div>
            <h2>USER POST</h2>
            <UserPost />

            <h2>Token</h2>
            <TokenPost />

            <h2>Photo POST</h2>
            <PhotoPost />

            <h2>Photo Get</h2>
            <PhotoGet />


        </div>
    )
}

export default Api
