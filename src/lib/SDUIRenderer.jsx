import BizButton from './components/Button';
import BizCard from './components/Card';
import Container from './components/Container';
import ContainerRow from './components/ContainerRow';
import Div from './components/Div';
import Dropdown from './components/Dropdown';
import Form from './components/Form';
import Header from './components/Header';
import Image from './components/Image';
import Input from './components/Input';
import List from './components/List';
import ListItem from './components/ListItem';
import SpecialCard from './components/SpecialCard';
import Stepper from './components/Stepper';
import Text from './components/Text';

const COMPONENT_MAP = {
  header: Header,
  div: Div,
  text: Text,
  input: Input,
  button: BizButton,
  form: Form,
  card: BizCard,
  stepper: Stepper,
  container: Container,
  container_row: ContainerRow,
  list: List,
  'list-item': ListItem,
  dropdown: Dropdown,
  image: Image,
  specialCard: SpecialCard,
};

const SDUIRenderer = ({ config, action, onDropdownChange }) => {
  const renderComponent = (component) => {
    const { type, props, children } = component;
    const Component = COMPONENT_MAP[type];

    if (!Component) {
      console.warn(`Unknown component type: ${type}`);
      return null;
    }

    if (type === 'list') {
      return (
        <Component {...props}>
          {props.items.map((item, index) => (
            <ListItem key={index} {...item} />
          ))}
        </Component>
      );
    }

    if (type === 'dropdown') {
      return (
        <Component
          {...props}
          onChange={(value) => onDropdownChange && onDropdownChange(props.name, value)}
        />
      );
    }

    return (
      <Component action={action} {...props}>
        {children && children.map(renderComponent)}
      </Component>
    );
  };

  return <>{config.children.map(renderComponent)}</>;
};

export default SDUIRenderer;
