import * as React from 'react';

export interface Props {
  name: string,
}

export class Sample extends React.PureComponent<Props, {}> {
  render() {
    return (
      <div>
        Hello, {this.props.name} from Sample Component!
      </div>
    )
  }
}
