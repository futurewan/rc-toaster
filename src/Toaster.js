import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

import Toast from './Toast';
import './index.css';

class Toaster extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    mask: PropTypes.bool
  };
  static defaultProps = {
    prefixCls: 'w-toast'
  };

  state = {
    notice: {}
  };

  add = notice => {
    console.log('notice', notice);
    this.setState(preState => ({
      notice
    }));
  };
  remove = () => {
    this.setState({
      notice: {}
    });
  };

  render() {
    const { notice } = this.state;
    const props = this.props;
    const className = {
      [props.prefixCls]: 1,
      [props.className]: !!props.className,
      [`${props.prefixCls}-mask`]: notice.mask,
      [`${props.prefixCls}-no-mask`]: !notice.mask
    };
    console.log('props', props);
    const onClose = createChainedFunction(this.remove.bind(this), notice.onCloseBack);
    return (
      <div className={classnames(className)}>
        {notice.content && (
          <Toast prefixCls={props.prefixCls} {...notice} onClose={onClose}>
            {notice.content}
          </Toast>
        )}
      </div>
    );
  }
}
function createChainedFunction() {
  var args = [].slice.call(arguments, 0);

  if (args.length === 1) {
    return args[0];
  }

  return function chainedFunction() {
    for (var i = 0; i < args.length; i++) {
      if (args[i] && args[i].apply) {
        args[i].apply(this, arguments);
      }
    }
  };
}
Toaster.createToast = function(properties, callback) {
  const { getContainer, ...props } = properties || {};
  let div = document.createElement('div');
  if (getContainer) {
    const root = getContainer();
    root.appendChild(div);
  } else {
    document.body.appendChild(div);
  }

  let called = false;
  function ref(toaster) {
    if (called) return;
    called = true;
    console.log('props', props);
    // toaster.add(props,callback);

    callback({
      toast(toastProps) {
        console.log('add');
        toaster.add(toastProps);
      },
      component: toaster,
      destroy() {
        ReactDOM.unmountComponentAtNode(div);
        div.parentNode.removeChild(div);
      }
    });
  }

  ReactDOM.render(<Toaster {...props} ref={ref} />, div);
};

export default {
  text(properties) {
    let toastConfig = {};
    if (typeof properties === 'string') {
      toastConfig.content = properties;
    } else if (Object.prototype.toString.call(properties) === '[object Object]') {
      toastConfig = Object.assign({}, properties);
    } else {
      throw new TypeError('The parameter is incorrect, requiring a string or object');
    }
    return Toaster.createToast({}, toaster => {
      const { onClose, ...props } = toastConfig;
      toaster.toast({
        mask: true,
        ...props,
        onCloseBack: () => {
          if (onClose) {
            onClose();
          }
          console.log('close');
          toaster.destroy();
        }
      });
    });
  }
};
