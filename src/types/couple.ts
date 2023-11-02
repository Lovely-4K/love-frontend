interface CoupleInviteLink {
  coupledId: number;
  invitationCode: string;
}

interface CoupleProfile {
  boyNickname: string;
  boyMbti: string;
  girlNickname: string;
  girlMbti: string;
}

export type { CoupleInviteLink, CoupleProfile };
