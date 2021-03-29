import React from 'react'

import guide from '../images/RHEACT-USER-GUIDE.pdf'

const UserGuide = () => {
    return (
        <div className='userGuide' style={{ height: '100vh' }}>
            <iframe
                title="file"
                style={{ width: '100%', height: '100%' }}
                src={guide}
            />
        </div>
    )
}

export default UserGuide