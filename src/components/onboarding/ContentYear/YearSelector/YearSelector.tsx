import React, { FC, MouseEvent, useState } from 'react';

import * as S from './YearSelector.styles';

interface Props {
  defaultValue: number;
  onChangeYear: (year: number) => void;
}
const YearSelector: FC<Props> = (props) => {
  const { defaultValue, onChangeYear } = props;

  const [visible, setVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(defaultValue);

  const handleChangeItem = (e: MouseEvent<HTMLDivElement>) => {
    const selectedYear = Number(e.currentTarget.dataset.value);

    setSelectedItem(selectedYear);
    onChangeYear(selectedYear);
    setVisible(false);
  };

  return (
    <S.Wrapper>
      <S.SelectorWrapper onClick={() => setVisible((prev) => !prev)}>{getYear(selectedItem)}</S.SelectorWrapper>
      <S.DropDownWrapper $visible={visible}>
        {Array.from({ length: 10 }, (_, i) => i + 1).map((value) => (
          <S.DropDownItem key={value} data-value={value} onClick={handleChangeItem}>
            {getYear(value)}
          </S.DropDownItem>
        ))}
      </S.DropDownWrapper>
    </S.Wrapper>
  );
};

const getYear = (year: number) => {
  if (year === 1) return '1년 미만';
  if (year >= 10) return '10년 이상';

  return `${year}년차`;
};

export default YearSelector;
