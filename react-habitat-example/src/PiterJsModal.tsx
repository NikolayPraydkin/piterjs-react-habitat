import * as React from "react";
import { PureComponent } from "react";
import {
  Button,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

type Props = {
  initialValue: string;
  onClose: () => void;
  opened: boolean;
  title: string;
};

type State = {
  value: string;
};

export class PiterJsModal extends PureComponent<Props, State> {
  state = {
    value: this.props.initialValue
  };

  input?: HTMLInputElement;

  handleChange = ({ target: { value } }) => this.setState({ value });

  handleOpened = () => {
    if (this.input) {
      this.input.focus();
    }
  };

  handleRef = (input: HTMLInputElement) => {
    this.input = input;
  };

  render() {
    return (
      <Modal isOpen={this.props.opened} onOpened={this.handleOpened}>
        <ModalHeader>{this.props.title}</ModalHeader>
        <ModalBody>
          {this.state.value}
          <Input
            innerRef={this.handleRef}
            onChange={this.handleChange}
            value={this.state.value}
          />
        </ModalBody>
        <ModalFooter>
          <Button onClick={this.props.onClose}>Bye, bye</Button>
        </ModalFooter>
      </Modal>
    );
  }
}
