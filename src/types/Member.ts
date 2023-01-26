export default interface Member {
  memberId: number;
  nickname: string;
  profileImage?: string | null;
  jobCategory: string;
  workingYears: number;
}
