'use client';

import { ButtonProps } from '@/types';
import Image from 'next/image';

export default ({
  btnType,
  containerStyles,
  handleClick,
  isDisabled,
  rightIcon,
  textStyles,
  title,
}: ButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || 'button'}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right icon"
            fill
            sizes="srcset"
            className="object-contian"
          />
        </div>
      )}
    </button>
  );
};
