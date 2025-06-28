export interface VoteType {
  good: number;
  neutral: number;
  bad: number;
}

export type VoteKey = keyof VoteType;
