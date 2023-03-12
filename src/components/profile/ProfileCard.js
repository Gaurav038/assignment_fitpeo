import React from 'react'
import Meter from './Meter'
import './Profile.css'

function ProfileCard() {
  return (
    <div className="profileRight">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="https://images.unsplash.com/photo-1621682372775-533449e550ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                alt=""
              />
              <img
                className="profileUserImg"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h2 className="profileInfoName">gaurav Singh</h2>
                <span className="profileInfoDesc">Hello my friends!</span>
            </div>

            <div className='item'>
                  <div className='info'>
                      <smalll className='text-muted'>425</smalll>
                      <div>Product</div>
                  </div>
                  <div className='info'>
                      <smalll className='text-muted'>5425K</smalll>
                      <div>Followers</div>
                  </div>
            </div>

            <Meter />

            <div className="activity">

              <div>Recent Activity</div>
              <div className='item'>
                      <div className='info'>
                          <div>12</div>
                          <smalll className='text-muted'>Sept</smalll>
                      </div>
                      <div className='info-det'>
                          lorem dvbdnd dkjcn djcndsc
                      </div>
              </div>
              <div className='item'>
                      <div className='info'>
                          <div>12</div>
                          <smalll className='text-muted'>Sept</smalll>
                      </div>
                      <div className='info-det'>
                          lorem dvbdnd dkjcn djcndsc
                      </div>
              </div>
              <div className='item'>
                      <div className='info'>
                          <div>12</div>
                          <smalll className='text-muted'>Sept</smalll>
                      </div>
                      <div className='info-det'>
                          lorem dvbdnd dkjcn djcndsc
                      </div>
              </div>
            </div>
          </div>
  )
}

export default ProfileCard