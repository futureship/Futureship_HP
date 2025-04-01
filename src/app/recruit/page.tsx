'use client';

import ColorFooter from '@app/components/footer/color-footer/color-footer';
import { ServiceAndRecruit } from '@app/shared/serviceAndRecruit/serviceAndRecruit';
import React from 'react';

const Recruit: React.FC = () => {
  return (
    <>
      <ServiceAndRecruit></ServiceAndRecruit>;
      <footer>
        <ColorFooter backGround=""></ColorFooter>
      </footer>
    </>
  );
};

export default Recruit;
