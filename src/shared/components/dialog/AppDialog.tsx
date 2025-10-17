import { type FC, type MouseEvent, type ReactNode, useRef } from 'react';

import styles from '~shared/components/dialog/AppDialog.module.scss';
import AppOverlay from '~shared/components/overlay/AppOverlay.tsx';

type AppDialogProps = {
  children: ReactNode;
  close: () => void;
  disableBackdropClose?: boolean;
};

const AppDialog: FC<AppDialogProps> = ({ disableBackdropClose, close, children }) => {
  const backdropRef = useRef<HTMLDivElement>(null);

  const backdropClickHandler = (event: MouseEvent<HTMLDivElement>) => {
    if (disableBackdropClose || event.target !== backdropRef.current) return;

    close();
  };

  return (
    <AppOverlay clickHandler={backdropClickHandler}>
      <div ref={backdropRef} className={styles.dialog__backdrop}>
        <div className={styles.dialog__body}>
          <button className={styles.dialogInside__closeButton} onClick={close} />
          {children}
        </div>
      </div>
    </AppOverlay>
  );
};

export default AppDialog;
