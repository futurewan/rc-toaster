import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Toast extends React.Component {
  static propTypes = {
    duration: PropTypes.number,
    onClose: PropTypes.func,
    children: PropTypes.any
    // update: PropTypes.bool,
    // closeIcon: PropTypes.node
  };

  static defaultProps = {
    onEnd() {},
    onClose() {},
    duration: 3
  };
  componentDidMount() {
    this.initTimer();
  }
  initTimer = () => {
    const { duration } = this.props;
    if (duration) {
      this.closeTimer = setTimeout(() => {
        this.close();
      }, duration * 1000);
    }
  };
  close = () => {
    this.clearTimer();
    this.props.onClose();
  };
  clearTimer = () => {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
      this.closeTimer = null;
    }
  };
  render() {
    const props = this.props;
    const componentClass = `${props.prefixCls}-notice`;
    const className = {
      [componentClass]: 1,
      [props.className]: !!props.className
    };
    return <div className={classnames(className)}>{props.children}</div>;
  }
}
