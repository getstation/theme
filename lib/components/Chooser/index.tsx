import { ChooserItem as ChooserItemType } from '../../types';
import * as React from 'react';
import ChooserItem from '../ChooserItem';

export interface Props {
  items: Array<ChooserItemType>,
  onSelect: (item: any) => any,
  className?: string,
  implicit?: boolean,
}

export default class Chooser extends React.PureComponent<Props, {}> {
  render() {
    const { className, items, onSelect } = this.props;

    return (
      <div className={className}>
        {
          items.map((item, index) =>
            <ChooserItem key={index} item={item} onSelect={onSelect} />
          )
        }
      </div>
    );
  }
}
