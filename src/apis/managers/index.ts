import { instance } from '../axios';
import {
  FindAccountIdResponse,
  GetStudentDetailResponse,
  SearchStudentListResponse,
} from './response';
import { ResetPasswordRequest } from './request';

const router = '/managers';

// 아이디 찾기
export const findAccountId = async (schoolId: string, answer: string) => {
  const { data } = await instance.get<Promise<FindAccountIdResponse>>(
    `${router}/account-id/${schoolId}?answer=${answer}`,
  );
  return data;
};

// 비밀번호 재설정
export const resetPassword = async (body: ResetPasswordRequest) => {
  await instance.patch(`${router}/password/initialization`, body);
};

// 학생 검색 정렬 타입
export type SortType = 'GCN' | 'NAME';
export enum SortEnum {
  GCN = '학번',
  NAME = '이름',
}

export const searchStudentList = async (name: string, sort: SortType) => {
  const { data } = await instance.get<Promise<SearchStudentListResponse>>(
    `${router}/students&name=${name}&sort=${sort}`,
  );
  return data;
};

export const getStudentDetail = async (student_id: string) => {
  const { data } = await instance.get<Promise<GetStudentDetailResponse>>(
    `${router}/students/${student_id}`,
  );
  return data;
};

export const deleteStudent = async (student_id: string) => {
  await instance.delete(`${router}/students/${student_id}`);
};
