import * as ReactHabitat from "react-habitat";
import { PiterJsModalButton } from "./PiterJsModalButton";

class Bootstrapper extends ReactHabitat.Bootstrapper {
  constructor() {
    super();

    const builder = new ReactHabitat.ContainerBuilder();
    builder.register(PiterJsModalButton).as("PiterJsModalButton");

    this.setContainer(builder.build());

    window.updateHabitat = this.update.bind(this);
  }
}

export const App = new Bootstrapper();
