export type CodeForcesResponse = {
  status: string;
  comment?: string;
  result?: Contest[];
};

export type Contest = {
  id: number;
  name: string;
  type: string;
  phase: string;
  frozen: boolean;
  durationSeconds: number;
  startTimeSeconds: number;
  relativeTimeSeconds: number;
};
