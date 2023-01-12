export * from './topic';

export interface IError {
  message: string;
  code: string;
}

export interface IBaseResponse<T> {
  message: string;
  code: string;
  data?: T; // THINK-GYU: data 가 없으면 에러인 경우
}

export interface IBasePaginationResponse<T> extends IBaseResponse<T> {
  hasNext: boolean;
  offsetId: number; // THINK-GYU: 이 부분 논의 해보기
}
