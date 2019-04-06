import * as React from "react";
import { PureComponent } from "react";
import { Button } from "reactstrap";
import { PiterJsModal } from "./PiterJsModal";

type Props = {
  color?: "primary" | "secondary" | "danger";
  initialValue: string;
  title: string;
};

type State = {
  opened: boolean;
};

export class PiterJsModalButton extends PureComponent<Props, State> {
  static defaultProps = {
    color: "primary"
  };

  state = {
    opened: false
  };

  handleOpen = () => this.setState({ opened: true });
  handleClose = () => this.setState({ opened: false });

  render() {
    return (
      <>
        <Button onClick={this.handleOpen} color={this.props.color}>
          Be awesome
        </Button>
        <PiterJsModal
          {...this.props}
          onClose={this.handleClose}
          opened={this.state.opened}
        />
      </>
    );
  }
}
