import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "fc66838baf8547e6b24bd3efee349dee";
const token =
  "007eJxTYJj8IThk7gWlYre1hSXZqy52X/eeVBEUFCLyeuvMv86rH35XYEhLNjOzMLZISkyzMDUxTzVLMjJJSjFOTUtNNTaxTElNTd7+P+kxB2NywoYMFkYGCATxRRnci/JLC3TDMlNS83WDkzNSU0pzEosYGADPWiop";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "Group-Video-Schedular";
