import * as ReactHabitat from 'react-habitat';
import { PiterJsModal } from './PiterJsModal';

declare global {
  interface Window {
    updateHabitat: () => void;
  }
}

class Bootstrapper extends ReactHabitat.Bootstrapper {
  constructor() {
    super();

    const builder = new ReactHabitat.ContainerBuilder();
    builder.register(PiterJsModal).as('PiterJsModal');

    this.setContainer(builder.build());

    window.updateHabitat = this.update.bind(this);
  }
}

export const App = new Bootstrapper();
