export default interface Member {
  memberId: number;
  nickname: string;
  profileImage?: string | null;
  jobCategory: JobCategory;
  workingYears: string;
}

export type JobCategory = 'designer' | 'developer' | 'pm';
