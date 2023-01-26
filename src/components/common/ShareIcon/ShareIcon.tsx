import React, { MouseEvent, useState } from 'react';

import Icon from '@src/components/common/Icon';

import * as S from './ShareIcon.styles';

interface ShareIconProps {
  url: string;
}

const ShareIcon: React.FC<ShareIconProps> = (props) => {
  const { url } = props;
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleShare = async (e: MouseEvent<SVGSVGElement>) => {
    e.stopPropagation();
    e.nativeEvent.preventDefault();

    if (isCopied) return;
    if (!navigator.clipboard) return;

    await navigator.clipboard.writeText(url);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <S.Container>
      <S.Share name="Share" onClick={handleShare} />
      {isCopied && (
        <S.Toast>
          <Icon name="Smile" />
          링크가 복사되었습니다!
        </S.Toast>
      )}
    </S.Container>
  );
};

export default ShareIcon;
