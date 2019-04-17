import * as React from 'react';
import { PureComponent } from 'react';
import { Button, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

type Props = {
  color?: 'primary' | 'secondary' | 'danger',
  initialValue: string,
  proxy: HTMLInputElement,
  title: string,
};

type State = {
  opened: boolean,
  value: string,
};

export class PiterJsModal extends PureComponent<Props, State> {
  state = {
    opened: false,
    value: this.props.initialValue,
  };

  handleChange = ({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => {
    this.setState({ value });
    this.props.proxy.value = value;
  };

  handleToggle = () => this.setState((prevState) => ({ opened: !prevState.opened }));

  render() {
    return (
      <>
        <Button
          onClick={this.handleToggle}
          color={this.props.color}
        >
          Be awesome
        </Button>
        <Modal isOpen={this.state.opened}>
          <ModalHeader>{this.props.title}</ModalHeader>
          <ModalBody>
            {this.state.value}
            <Input
              onChange={this.handleChange}
              value={this.state.value}
            />
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.handleToggle}>Bye, bye</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
