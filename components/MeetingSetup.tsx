"use client";
import {
  DeviceSettings,
  VideoPreview,
  useCall,
} from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const MeetingSetup = ({
  setIsSetupComplate,
}: {
  setIsSetupComplate: (value: boolean) => void;
}) => {
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
      <div className="flex h-16 items-center justify-center gap-3">
        <label
          htmlFor="check"
          className="flex items-center gap-2 justify-center font-medium"
        >
          <input
            type="checkbox"
            checked={isMicCamToggleOn}
            onChange={(e) => setIsMicCamToggleOn(e.target.checked)}
            id="check"
          />
          Join with mic and camera off
        </label>
        <DeviceSettings />
      </div>
      <Button
        className="rounded-md bg-green-500 px-4 py-2.5"
        onClick={() => {
          call?.join();
          setIsSetupComplate(true);
        }}
      >
        Join Meeting
      </Button>
    </div>
  );
};

export default MeetingSetup;
