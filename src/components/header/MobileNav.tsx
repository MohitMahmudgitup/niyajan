import React from 'react'
import SmallSizeBar from './SmallSizeBar'
import SocialLink from '../SocialLink';

interface Props {
    navigationBar: boolean;
    setNavigationBar: (value: boolean) => void;
  }

function MobileNav({navigationBar, setNavigationBar} : Props) {
  return (
    <div>
        {navigationBar && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex flex-col  text-white">
          <button
            className="absolute top-6 right-4 text-3xl"
            onClick={() => setNavigationBar(false)}
          >
            ✖
          </button>
          <SmallSizeBar/>
          <div className="px-4 py-4">
            <p>Hotline : +88 01012345678</p>
          </div>
          <div className="relative px-4">
            <div className="absolute">
              <SocialLink/>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MobileNav