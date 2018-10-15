import { Icon, IconSymbol } from '../Icon';
import * as React from 'react';
// @ts-ignore: no declaration file
import injectSheet from 'react-jss';
import { ThemeTypes } from "../../types";
import { roundedBackground } from "../../jss";

/** The type of action: will influence icon used and checkbox. If not present, no action button will be shown. */
export enum ServiceActionType {
  Add = 'Add',
  Settings = 'Settings',
  Select = 'Select',
}

interface Classes {
  container: string,
  checkbox: string,
  iconContainer: string,
  serviceDetails: string,
  serviceName: string,
  icon: string,
  iconPin: string,
  action: string,
  svgPath: string,
}

interface IService {
  deprecated?: boolean,
  newVersionId?: string,
  id: string,
  name: string,
}

interface Props {
  classes?: Classes,
  service: IService,
  onAdd: (serviceId: string, checked?: boolean) => any,
  isExtension?: boolean,
  subTitle?: string,
  actionType?: ServiceActionType,
  checked?: boolean,
  alternate?: boolean,
  disabled?: boolean,
  iconPath: string,
}

const ServiceActionButtonIconMap = {
  [ServiceActionType.Add]: IconSymbol.PLUS,
  [ServiceActionType.Settings]: IconSymbol.COG,
};

@injectSheet((theme: ThemeTypes) => ({
  container: {
    flex: 0,
    display: 'inline-flex',
    color: 'rgb(38, 33, 33)',
    alignItems: 'center',
    width: ({ alternate }: Props) => alternate ? null : 220,
    margin: '0 7px 10px 0',
    padding: ({ alternate }: Props) => alternate ? '0px 5px 10px 0' : 10,
    backgroundColor: 'transparent',
    borderRadius: '999px',
    transition: '200ms',
    '&:hover': {
      backgroundColor: ({ alternate }: Props) => alternate ? 'none' : '#EEE',
    },
  },
  checkbox: {
    '-webkit-appearance': 'checkbox',
    marginRight: 10,
    ...theme.mixins.size(20),
  },
  iconContainer: {
    margin: '0 10px 0 0',
    position: 'relative',
    width: '30px',
    height: '30px',
  },
  serviceDetails: {
    flexGrow: 1,
    width: '130px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '& small': {
      fontSize: '10px',
      fontStyle: 'italic',
    },
  },
  serviceName: {
    display: 'inline-block',
    fontSize: '12px',
    fontWeight: '600',
  },
  icon: {
    display: 'inline-block',
    borderRadius: '50%',
    width: 30,
  },
  iconPin: {
    ...theme.mixins.flexbox.containerCenter,
    position: 'absolute',
    bottom: -6,
    right: -7,
    ...theme.mixins.size(22),
    backgroundColor: '#BBB',
    border: '2px solid white',
    borderRadius: '100%',
  },
  action: {
    flexShrink: 0,
    ...roundedBackground('#999'),
    opacity: 0,
    cursor: 'pointer',
    transition: '200ms',
    '$service:hover &': {
      opacity: .6,
    },
    '&:hover': {
      opacity: '1 !important',
    },
  },
  svgPath: {
    fill: 'white',
  },
}))
export class Service extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);

    this.handleAddApplication = this.handleAddApplication.bind(this);
  }

  handleAddApplication(event?: React.ChangeEvent<HTMLInputElement>) {
    const { service } = this.props;

    const serviceId = (service.deprecated && service.newVersionId) ? service.newVersionId : service.id;
    const checked = event && event.target.checked;

    this.props.onAdd(serviceId, checked);
  }

  render() {
    const { classes, service, isExtension, checked, disabled, iconPath, actionType, subTitle } = this.props;

    return (
      <div className={classes!.container}>
        { actionType === ServiceActionType.Select &&
          <input
            className={classes!.checkbox}
            type="checkbox"
            checked={checked}
            onChange={this.handleAddApplication}
            disabled={disabled}
          />
        }

        <div className={classes!.iconContainer}>
          <img className={classes!.icon} src={iconPath} />

          { isExtension &&
            <div className={classes!.iconPin}>
              <Icon symbolId={IconSymbol.EXTENSION} size={25} color={'#5d5d5d'} />
            </div>
          }
        </div>

        <p className={classes!.serviceDetails}>
          <strong className={classes!.serviceName}>{service.name}</strong>

          { subTitle && <small>{subTitle}</small> }
        </p>

        { actionType && actionType !== ServiceActionType.Select &&
          <Icon
            symbolId={ServiceActionButtonIconMap[actionType]}
            size={24}
            className={classes!.action}
            onClick={() => this.handleAddApplication}
          />
        }
      </div>
    );
  }
}
