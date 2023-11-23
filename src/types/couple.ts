interface CoupleInviteLink {
  coupledId: number;
  invitationCode: string;
}

interface CoupleProfile {
  myNickname: string;
  myBirthday: string;
  myMbti: string;
  myImageUrl: string;
  myCalendarColor: string;
  myId: number;
  opponentNickname: string;
  opponentBirthday: string;
  opponentMbti: string;
  opponentImageUrl: string;
  opponentCalendarColor: string;
  opponentId: number;
  meetDay: string;
}

export type { CoupleInviteLink, CoupleProfile };
