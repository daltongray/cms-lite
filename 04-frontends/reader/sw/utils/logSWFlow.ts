import { DEBUG_LEVEL } from "../SWConsts";

export const logSWFlow = (flow: keyof typeof DEBUG_LEVEL, ...args: any[]) => {
  if (flow && DEBUG_LEVEL[flow])
    return console.log(`SW:[${String(flow)}]`, ...args);
  if (!flow && !DEBUG_LEVEL["any"]) return;
  console.log("SW:[INFO]", ...args);
};

export const alertSWFlow = (flow: keyof typeof DEBUG_LEVEL, ...args: any[]) => {
  return console.error(`SW:[${String(flow)}]`, args);
};
