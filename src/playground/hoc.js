// HOC - A component that renders another component
// reuse code
// render hijacking ???
// prop manipulation ???
// abstract state ???

import React from "react";
import ReactDOM from "react-dom";

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

// function is called to generate higher order component
const withAdminWarning = WrappedComponent => {
  // below is higher order component
  return props => (
    <div>
      {props.isAdmin && <p>Please, don't share the info.</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.isAuthenticated ? (
        <p>Welcome, You are authenticated member</p>
      ) : (
        <p>Please, Log in</p>
      )}
      <WrappedComponent {...props} />
    </div>
  );
};

const AuthInfo = requireAuthentication(Info);

const AdminInfo = withAdminWarning(Info);

/*ReactDOM.render(
  <AdminInfo isAdmin={true} info="These are the details" />,
  document.getElementById("app")
);*/

ReactDOM.render(
  <AuthInfo isAuthenticated={false} info="These are the details" />,
  document.getElementById("app")
);

/*
const Info = props => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share.</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Please, log in the info.</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(
//   <AdminInfo isAdmin={true} info="There are the details." />,
//   document.getElementById("app")
// );

ReactDOM.render(
  <AuthInfo isAuthenticated={false} info="There are the details." />,
  document.getElementById("app")
);
*/
