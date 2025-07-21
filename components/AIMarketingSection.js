"use client"

import { useState, useRef } from 'react';
import YouTube from 'react-youtube';
import { Play, Pause } from 'lucide-react';

export default function AIMarketingSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);

  const videoId = '0betlkZZPV0';

  const onReady = (event) => {
    playerRef.current = event.target;
    playerRef.current.mute();
    setIsPlaying(false);
    playerRef.current.pauseVideo();
  };

  const onEnd = (event) => {
    event.target.playVideo(); // Loop the video
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
    setIsPlaying(!isPlaying);
  };
  
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 0,
      controls: 0,
      rel: 0,
      showinfo: 0,
      modestbranding: 1,
      loop: 1,
      playlist: videoId,
      mute: 1,
    },
  };

  return (
    <section id="marketing" className="bg-white py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4">Top AI Marketing Company</h2>
        </div>

        <div className="relative h-64 lg:h-96 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl mb-12 lg:mb-16 flex items-center justify-center overflow-hidden">
          <div className="absolute w-full h-full top-0 left-0 z-0">
            <YouTube
              videoId={videoId}
              opts={opts}
              onReady={onReady}
              onEnd={onEnd}
              className="w-full h-full"
            />
          </div>

          <div
            className="absolute inset-0 bg-black bg-opacity-20 z-10 flex items-center justify-center cursor-pointer"
            onClick={handlePlayPause}
          >
            {!isPlaying && (
              <div className="bg-white/30 backdrop-blur-sm rounded-full p-4 hover:bg-white/50 transition-all">
                <Play className="w-10 h-10 text-white fill-white" />
              </div>
            )}
          </div>

          <div className="relative z-20 text-center text-white px-4 w-full h-full flex flex-col items-center justify-center pointer-events-none" />

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 w-full flex justify-center pointer-events-none">
            
          </div>
        </div>
      </div>
    </section>
  )
}
