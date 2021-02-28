import { memo } from 'react';
import { Checkbox } from '../../components';
import { actionCreators } from '../../store/form';

type CheckboxFormGroupProps = Readonly<{
  checked: boolean;
  onCheck: typeof actionCreators.handleOnCheck;
}>;

const CheckboxFormGroup = memo<CheckboxFormGroupProps>(({ checked, onCheck }) => (
  <div className="column">
    <h3 className="title is-4">Checkbox</h3>
    <h5 className="subtitle is-5">Toggle the checkbox</h5>
    <div className="field form-control-group">
      <Checkbox
        checked={checked}
        onCheck={onCheck}
      />
    </div>
    <p className="subtitle is-5">
      Checked: <code>{checked.toString()}</code>
    </p>
  </div>
));

CheckboxFormGroup.displayName = 'CheckboxFormGroup';

export default CheckboxFormGroup;