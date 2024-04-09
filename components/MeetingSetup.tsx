"use client";
import { VideoPreview, useCall } from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";

const MeetingSetup = () => {
  const [isMicCamToggleOn, setIsMicCamToggleOn] = useState(false);
  const call = useCall();

  useEffect(() => {
    // Ensure call object is available before accessing its properties
    if (call && call.camera && call.microphone) {
      if (isMicCamToggleOn) {
        call.camera.disable();
        call.microphone.disable();
      } else {
        call.camera.enable();
        call.microphone.enable();
      }
    }
  }, [isMicCamToggleOn, call?.microphone, call?.camera]);
//   if (!call) {
//     throw new Error("Call not found");
//   }
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-3 text-white">
      <h1 className="text-2xl font-bold">Setup</h1>
  
      {call && <VideoPreview />}
    </div>
  );
};

export default MeetingSetup;
