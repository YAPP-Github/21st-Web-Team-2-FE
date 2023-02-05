import React, { ChangeEvent, useEffect, useRef, useState } from 'react';

import { PostTopicRequest } from '@src/apis';
import CodeEditor, { Languages } from '@src/components/common/CodeEditor';
import Icon from '@src/components/common/Icon';
import ImgSelector from '@src/components/common/ImgSelector';
import Input from '@src/components/common/Input';
import SelectButton from '@src/components/common/SelectButton';

import * as PS from '../WriteMain.styles';
import * as S from './VoteOptionInputs.styles';

type VoteOptionType = 'text' | 'img' | 'code' | 'img+code';

type VoteOption = PostTopicRequest['voteOptions'][number];
interface Option extends VoteOption {
  id: number;
}

interface VoteOptionInputsProps {
  onChange: (options: PostTopicRequest['voteOptions']) => void;
}

const VoteOptionInputs: React.FC<VoteOptionInputsProps> = (props) => {
  const { onChange } = props;

  const [selected, setSelected] = useState<VoteOptionType>('text');
  const [options, setOptions] = useState<Option[]>([
    { id: 0, text: '' },
    { id: 1, text: '' },
  ]);
  const id = useRef<number>(2);

  useEffect(() => onChange(options.map(({ id, ...rest }) => ({ ...rest }))), [options]);

  const handleSelectType = (type: VoteOptionType) => () => {
    setSelected(type);
  };

  const handleChangeText = (targetId: number) => (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    const index = options.findIndex(({ id }) => id === targetId);
    const changed = [...options];
    changed[index].text = value;
    setOptions(changed);
  };

  const handleChangeCodeLanguage = (targetId: number) => (language: Languages) => {
    const changed = [...options];
    const index = options.findIndex(({ id }) => id === targetId);
    const target = changed[index].codeBlock;
    changed[index].codeBlock = {
      language,
      contents: target?.contents || '',
    };
    setOptions(changed);
  };

  const handleChangeCode = (targetId: number) => (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    const index = options.findIndex(({ id }) => id === targetId);
    const changed = [...options];
    const target = changed[index].codeBlock;
    changed[index].codeBlock = {
      language: target?.language || 'javascript',
      contents: value,
    };
    setOptions(changed);
  };

  const handleUploadImg = (targetId: number) => (img: string) => {
    const index = options.findIndex(({ id }) => id === targetId);
    const changed = [...options];
    changed[index].image = img;
    setOptions(changed);
  };

  const handleAddOption = () => {
    if (options.length >= 4) return;
    setOptions((prev) => [...prev, { id: id.current++, text: '' }]);
  };

  const handleDeleteOption = (targetId: number) => () => {
    if (options.length <= 2) return;
    setOptions((prev) => prev.filter(({ id }) => id !== targetId));
  };

  return (
    <PS.Section>
      <PS.SectionTitle>토픽 항목</PS.SectionTitle>
      <PS.ButtonContainer>
        {BUTTONS.map(({ text, type }, index) => (
          <SelectButton key={index} $selected={selected === type} onClick={handleSelectType(type)}>
            {text}
          </SelectButton>
        ))}
      </PS.ButtonContainer>
      <S.OptionsContainer>
        {(selected === 'text' ? options : options.slice(0, 2)).map(({ id, text, image, codeBlock }, index) => (
          <React.Fragment key={id}>
            <S.Label>
              <S.LabelText>항목{index + 1}</S.LabelText>
              <Input placeholder="항목을 입력해주세요." value={text} maxLength={20} onChange={handleChangeText(id)} />
              {selected === 'text' && options.length > 2 && (
                <S.DeleteBtn onClick={handleDeleteOption(id)}>
                  <Icon name="X" color="G8" size={18} />
                </S.DeleteBtn>
              )}
            </S.Label>
            {selected.includes('code') && (
              <S.CodeEditorWrapper>
                <CodeEditor
                  value={codeBlock?.contents || ''}
                  language={codeBlock?.language || 'javascript'}
                  onChangeLanguage={handleChangeCodeLanguage(id)}
                  onChange={handleChangeCode(id)}
                />
              </S.CodeEditorWrapper>
            )}
            {selected.includes('img') && (
              <S.ImgSelectorWrapper>
                <ImgSelector onChange={handleUploadImg(index)}>
                  <Icon name="Image" />
                </ImgSelector>
                {image && <S.SelectedImage src={image} alt="vote option image" width={232} height={180} />}
              </S.ImgSelectorWrapper>
            )}
          </React.Fragment>
        ))}
        {selected === 'text' && options.length < 4 && <S.AddOption onClick={handleAddOption}>+ 항목 추가</S.AddOption>}
      </S.OptionsContainer>
    </PS.Section>
  );
};

export default VoteOptionInputs;

const BUTTONS: { text: string; type: VoteOptionType }[] = [
  { text: '텍스트', type: 'text' },
  { text: '이미지 추가', type: 'img' },
  { text: '코드 추가', type: 'code' },
  { text: '이미지+코드 추가', type: 'img+code' },
];
