import React, { ChangeEvent, KeyboardEvent, useState } from 'react';

import { PostTopicRequest } from '@src/apis';
import Icon from '@src/components/common/Icon';
import { IconNameType } from '@src/components/common/Icon/Icon';
import Input from '@src/components/common/Input';
import SelectButton from '@src/components/common/SelectButton';
import TextArea from '@src/components/common/TextArea';
import { TopicCategory } from '@src/types/Topic';

import * as S from './WriteMain.styles';

const WriteMain: React.FC = () => {
  const [topic, setTopic] = useState<PostTopicRequest>({
    topicCategory: 'CAREER',
    title: '',
    contents: '',
    voteOptions: [],
    tags: [],
  });
  const [tag, setTag] = useState<string>('');

  const handleSelectCategory = (value: TopicCategory) => () => {
    setTopic((prev) => ({ ...prev, topicCategory: value }));
  };

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setTopic((prev) => ({ ...prev, [name]: value }));
  };

  const handleChangTag = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setTag(value);
  };

  const handleInputTag = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') return;

    const { value } = event.target as HTMLInputElement;
    setTopic((prev) => ({ ...prev, tags: [...prev.tags, value] }));
    setTag('');
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>토픽 만들기</S.Title>
        <S.Description>궁금한 것들을 토픽으로 만들어 피드에 올려보세요!</S.Description>
      </S.Header>
      <S.Section>
        <S.SectionTitle>토픽 카테고리</S.SectionTitle>
        <S.ButtonContainer>
          {CATEGORY_BUTTONS.map(({ icon, value, text }, index) => (
            <SelectButton key={index} $selected={topic.topicCategory === value} onClick={handleSelectCategory(value)}>
              <Icon name={icon} /> {text}
            </SelectButton>
          ))}
        </S.ButtonContainer>
      </S.Section>
      <S.Section>
        <S.SectionTitle>토픽 내용</S.SectionTitle>
        <S.Label>
          <S.LabelText>토픽 제목</S.LabelText>
          <Input
            name="title"
            placeholder="항목을 입력하주세요."
            value={topic.title}
            maxLength={20}
            onChange={handleChangeInput}
          />
        </S.Label>
        <S.Label>
          <S.LabelText>토픽 설명</S.LabelText>
          <TextArea
            name="contents"
            placeholder="항목을 입력하주세요."
            value={topic.contents}
            maxLength={20}
            onChange={handleChangeInput}
          />
        </S.Label>
      </S.Section>
      <S.Section>
        <S.SectionTitle>토픽 항목</S.SectionTitle>
        <S.ButtonContainer>
          <SelectButton>텍스트</SelectButton>
          <SelectButton>이미지 추가</SelectButton>
          <SelectButton>코드 추가</SelectButton>
          <SelectButton>이미지+코드 추가</SelectButton>
        </S.ButtonContainer>
        <S.OptionsContainer>
          <S.Label>
            <S.LabelText>항목1</S.LabelText>
            <Input placeholder="항목을 입력하주세요." value="" maxLength={20} />
          </S.Label>
          <S.Label>
            <S.LabelText>항목2</S.LabelText>
            <Input placeholder="항목을 입력하주세요." value="" maxLength={20} />
          </S.Label>
          <S.AddOption>+ 항목 추가</S.AddOption>
        </S.OptionsContainer>
      </S.Section>
      <S.Section>
        <S.SectionTitle>태그</S.SectionTitle>
        <S.Label>
          <S.LabelText>태그 입력</S.LabelText>
          <Input
            placeholder="최대 5개까지 입력 가능해요!"
            value={tag}
            onChange={handleChangTag}
            onKeyUp={handleInputTag}
          />
        </S.Label>
      </S.Section>
    </S.Container>
  );
};

export default WriteMain;

const CATEGORY_BUTTONS: { icon: IconNameType; value: TopicCategory; text: string }[] = [
  { icon: 'Career', value: 'CAREER', text: '커리어 생활' },
  { icon: 'Computer', value: 'DEVELOPER', text: '개발' },
  { icon: 'Paint', value: 'DESIGN', text: '디자인' },
  { icon: 'Paper', value: 'PRODUCT_MANAGER', text: '기획' },
];
