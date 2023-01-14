export * from './topic';

export interface IError {
  message: string;
  code: string;
}

export interface IBaseResponse<T> {
  message: string;
  code: string;
  data?: T; // THINK-GYU: data 가 없으면 에러인 경우 (에러 핸들링 관련해서 논의하기!)
}

export interface IBasePaginationResponse<T> extends IBaseResponse<T> {
  hasNext: boolean;
  offsetId: number | null; // THINK-GYU: 이 부분 논의 해보기
}
