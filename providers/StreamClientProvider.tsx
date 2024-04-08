// import { useUser } from "@clerk/nextjs";
// import { StreamVideoClient, StreamVideo } from "@stream-io/video-react-sdk";
// import { useEffect, useState } from "react";

// const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

// const StreamVideoProvider = ({ children }: { children: React.ReactNode }) => {
//   const [videoClient, setVideoClient] = useState<StreamVideoClient>();

//   const { user, isLoaded } = useUser();

//   useEffect(() => {
//     if (!isLoaded || !user) return;
//   }, [user, isLoaded]);
//   return <StreamVideo client={videoClient}></StreamVideo>;
// };

// export default StreamVideoProvider;
