import { type FC, type MouseEventHandler, type ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import styles from '~shared/components/overlay/AppOverlay.module.scss';

type AppOverlayProps = {
  clickHandler: MouseEventHandler<HTMLDivElement>;
  children: ReactNode;
};

const AppOverlay: FC<AppOverlayProps> = ({ children, clickHandler }) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const existedOverlay = overlayRef.current!;

    return () => {
      if (!existedOverlay || !existedOverlay.parentElement) return;

      existedOverlay.parentElement.removeChild(existedOverlay);
    };
  }, []);

  const overlayEl = (
    <div ref={overlayRef} className={styles.overlay} onClick={clickHandler}>
      {children}
    </div>
  );

  return createPortal(overlayEl, document.body);
};

export default AppOverlay;
