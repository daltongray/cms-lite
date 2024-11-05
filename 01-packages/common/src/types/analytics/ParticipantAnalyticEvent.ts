import { AnalyticEvent } from "types/analytics/AnalyticEvent";

export type ParticipantAnalyticEvent = AnalyticEvent & {
  participantNumber: number;
  publicKey: string;
};
