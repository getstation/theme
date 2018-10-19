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
}

interface Classes {
  container: string,
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
  onAdd: (serviceId: string, iconPath: string, iconRef?: any) => any,
  isExtension?: boolean,
  subTitle?: string,
  actionType?: ServiceActionType,
  alternate?: boolean,
  iconPath: string,
  getIconRef?: boolean,
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
    width: ({ alternate }: Props) => alternate ? null : 195,
    margin: '0 7px 10px 0',
    padding: ({ alternate }: Props) => alternate ? '0px 5px 10px 0' : 10,
    backgroundColor: 'transparent',
    borderRadius: '999px',
    transition: '200ms',
    userSelect: 'none',
    '&:hover': {
      backgroundColor: ({ alternate }: Props) => alternate ? 'none' : '#EEE',
    },
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
    '$container:hover &': {
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
  iconRef: any;

  constructor(props: Props) {
    super(props);

    this.iconRef = React.createRef();

    this.handleAddApplication = this.handleAddApplication.bind(this);
  }

  handleAddApplication() {
    const { service, iconPath } = this.props;

    const serviceId = (service.deprecated && service.newVersionId) ? service.newVersionId : service.id;

    this.props.onAdd(serviceId, iconPath, this.iconRef.current);
  }

  render() {
    const { classes, service, isExtension, iconPath, actionType, subTitle } = this.props;

    return (
      <div className={classes!.container}>
        <div className={classes!.iconContainer}>
          <img ref={this.iconRef} className={classes!.icon} src={iconPath} />

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

        { actionType &&
          <Icon
            symbolId={ServiceActionButtonIconMap[actionType]}
            size={24}
            className={classes!.action}
            onClick={this.handleAddApplication.bind(this)}
          />
        }
      </div>
    );
  }
}
