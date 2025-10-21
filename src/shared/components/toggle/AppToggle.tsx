import type { FC } from 'react';
import '~shared/components/toggle/AppToggle.scss';
// eslint-disable-next-line import/order
import cn from 'classnames';

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled: boolean;
}

const Toggle: FC<ToggleProps> = ({ checked, onChange, disabled }) => {
  return (
    <div
      className={cn('toggle', {
        checked,
        disabled,
      })}
      onClick={() => onChange(!checked)}
    >
      <div className="toggle__thumb" />
    </div>
  );
};

export default Toggle;
