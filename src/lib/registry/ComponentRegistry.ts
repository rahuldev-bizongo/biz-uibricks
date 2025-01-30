declare global {
  interface Window {
    ComponentRegistry: Record<string, any>;
  }
}

window.ComponentRegistry = {
  Header: {
    defaultProps: {
      content: "Default Header Content",
    },
  },
  Div: {
    defaultProps: {},
  },
  Text: {
    defaultProps: {
      content: "Default Text Content",
    },
  },
  Button: {
    defaultProps: {
      label: "Click Me",
      type: "button",
      action: null,
    },
  },
  Input: {
    defaultProps: {
      type: "text",
      placeholder: "Enter value here",
      defaultValue: "",
    },
  },
  Form: {
    defaultProps: {
      onSubmit: {
        type: "api",
        url: "",
        method: "POST",
        payload: {},
      },
    },
  },
  Card: {
    defaultProps: {},
  },
  Stepper: {
    defaultProps: {
      currentStep: 0,
      numberOfSteps: 1,
    },
  },
  Container: {
    defaultProps: {},
  },
  ContainerRow: {
    defaultProps: {},
  },
  List: {
    defaultProps: {
      items: [],
      renderItem: {
        type: "list-item",
      },
    },
  },
  ListItem: {
    defaultProps: {
      title: "Default Title",
      description: "Default Description",
    },
  },
  Dropdown: {
    defaultProps: {
      options: [],
      placeholder: "Select an option",
      defaultValue: "",
    },
  },
  Image: {
    defaultProps: {
      src: "",
      alt: "Image",
    },
  },
  SpecialCard: {
    defaultProps: {
      title: "",
      description: "",
      image: "",
    },
  },
  Heading: {
    defaultProps: {
      content: "",
      type: "primary",
    },
  },
};
