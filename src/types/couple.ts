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
  coupleStatus: 'SOLO' | 'RELATIONSHIP' | 'BREAKUP' | 'RECOUPLE';
}

export type { CoupleInviteLink, CoupleProfile };
