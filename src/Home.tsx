import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Store from './store';

import './Home.scss';

const appStore = new Store();

const Row = (props: any) => {
  return (
    <tr>
      <td>{props.data.name}</td>
      <td>{props.data.salary}</td>
    </tr>
  );
};

@observer
class Table extends Component<ExampleProps> {
  public render() {
    const { store } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <td>Name:</td>
            <td>Daily salary:</td>
          </tr>
        </thead>
        <tbody>
          {store.employeeList.map((employee, index) =>
            <Row key={index} data={employee} />
          )}
        </tbody>
        <tfoot>
          <tr>
            <td>TOTAL:</td>
            <td>{store.totalSum}</td>
          </tr>
      </tfoot>
      </table>
    );
  }
}

interface ExampleProps {
  store: Store;
}

@observer
class Controls extends Component<ExampleProps> {

  private clearAll = () => {
    this.props.store.clearAll();
  }

  private addNew = () => {
    const name = String(prompt('The name:'));
    const salary = parseInt(String(prompt('The salary:')), 10);

    this.props.store.addEmployee({ name, salary });
  }

  public render() {
    return (
      <div className="controls">
        <button onClick={this.clearAll}>clear table</button>
        <button onClick={this.addNew}>add record</button>
      </div>
    );
  }
}

@observer
class Home extends Component {
  public render() {
    return (
      <div>
        <h1>Mobx Table</h1>
        <Controls store={appStore} />
        <Table store={appStore} />
      </div>
    );
  }
}

export default Home;
