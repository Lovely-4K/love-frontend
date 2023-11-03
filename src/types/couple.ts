interface CoupleInviteLink {
  coupledId: number;
  invitationCode: string;
}

interface CoupleProfile {
  boyNickname: string;
  boyMbti: string;
  boyImageUrl: string;
  girlNickname: string;
  girlMbti: string;
  girlImageUrl: string;
}

export type { CoupleInviteLink, CoupleProfile };
