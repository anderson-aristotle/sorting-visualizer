import React from 'react';
import Alert from 'react-bootstrap/Alert';

class AutoDismissAlert extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true,
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ show: false });
    }, 1500);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  handleClose = () => this.setState({ show: false });

  render() {
    const { variant, heading, message } = this.props;
    return (
      <Alert
        dismissible
        show={this.state.show}
        variant={variant}
        onClose={this.handleClose}
      >
        <div className="container">
          <Alert.Heading>{heading}</Alert.Heading>
          <p className="alert-body">{message}</p>
        </div>
      </Alert>
    );
  }
}

export default AutoDismissAlert;
