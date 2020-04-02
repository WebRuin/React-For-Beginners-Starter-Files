import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  fab,
  faFacebook,
  faGithub,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import PropTypes from 'prop-types';

import Button from './Button';

library.add(fab);

const Login = props => (
  <nav className="login">
    <h2>Iventory Login</h2>
    <p>Sign in to manage you inventory</p>
    <Button
      buttonClass="facebook"
      authenticate={props.authenticate}
      service="Facebook"
    >
      <FontAwesomeIcon size="2x" icon={faFacebook} />
    </Button>
    <Button
      buttonClass="github"
      authenticate={props.authenticate}
      service="Github"
    >
      <FontAwesomeIcon size="2x" icon={faGithub} />
    </Button>
    <Button
      buttonClass="twitter"
      isDisabled={true}
      authenticate={props.authenticate}
      service="Twitter"
    >
      <FontAwesomeIcon size="2x" icon={faTwitter} />
    </Button>
  </nav>
);

Button.propType = {
  authenticate: PropTypes.func.isRequired
};

export default Login;
