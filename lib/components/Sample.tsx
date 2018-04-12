import * as React from 'react';

export interface SampleProps {
  name: string,
}

export class Sample extends React.PureComponent<SampleProps, {}> {
  render() {
    return (
      <div>
        Hello, {this.props.name} from Sample Component!
      </div>
    )
  }
}
