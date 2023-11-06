interface CoupleInviteLink {
  coupledId: number;
  invitationCode: string;
}

interface CoupleProfile {
  boyNickname: string;
  boyMbti: string;
  boyImageUrl: string;
  bodyId: number;
  girlNickname: string;
  girlMbti: string;
  girlImageUrl: string;
  girlId: number;
  meetDay: string;
}

export type { CoupleInviteLink, CoupleProfile };
