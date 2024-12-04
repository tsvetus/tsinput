import { jsx as _jsx } from "react/jsx-runtime";
import Label from '../Label';
import Icon from '../Icon';
const LabelIcon = ({ className, style, label, icon }) => {
    return (_jsx(Label, { className: className, style: style, ...label, children: _jsx(Icon, { ...icon }) }));
};
export default LabelIcon;
//# sourceMappingURL=LabelIcon.js.map