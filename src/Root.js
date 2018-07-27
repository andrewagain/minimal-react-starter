import React from "react";
import PropTypes from "prop-types";
import { hot, setConfig } from "react-hot-loader";
setConfig({ logLevel: 'debug' })

import Counter from "./Counter";

class Root extends React.Component {
  render() {
    return <Counter />;
  }
}
export default hot(module)(Root);
