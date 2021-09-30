import React from 'react'
import "./index.less"

const App = () => {
  return (
    <div className="grid grid-cols-6 h-full p-1">
      <div className="col-span-1 flex justify-center h-full pr-1">
        <div className="bg-gray-100 w-full p-2 rounded-lg">
          <p className="text-xs my-2">EtherealMusic</p>
          <div>
            <p>主页</p>
            <p>发现</p>
            <p>音乐库</p>
          </div>
          <p className="text-xs my-2">Playlist</p>
          <div>
            <p>创建歌单</p>
            <p>收藏歌单</p>
          </div>
        </div>
      </div>
      <div className="col-span-5 flex justify-center h-full">
        <div className="bg-gray-100 w-full p-2 rounded-lg">Right</div>
      </div>
    </div>
  );

}

export default App
