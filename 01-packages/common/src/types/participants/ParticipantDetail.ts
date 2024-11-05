export type ParticipantDetail = {
  publicKey: string; // doc id of the participant doc
  privateKey: string; // crypto hash
  participantNumber: number; // unique incrementing number

  archived?: boolean;
};
