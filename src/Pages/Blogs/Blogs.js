import React from "react";
import { Badge, Card } from "react-bootstrap";

const Blogs = () => {
  return (
    <div>
      <Card className="w-75 mx-auto">
        <Card.Header className="text-dark">
          Question: Difference between authorization and authentication ?
        </Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              A overview of the differences between authentication and
              authorization :- <br />
              <Badge pill bg="secondary">
                Authentication
              </Badge>
              <br />
              <small>
                -Determines whether users are who they claim to be <br />
                -Challenges the user to validate credentials. (Like password
                email) <br />
                -Usually done before authorization
                <br />
                -Transmits info through an ID Token
                <br />
                -Governed by the OpenID Connect protocol
              </small>
              <br />
              <Badge pill bg="secondary">
                Authorization
              </Badge>
              <br />
              <small>
                -Determines what users can and cannot access
                <br />
                -Verifies whether access is allowed through policies and rules
                <br />
                -Usually done after successful authentication
                <br />
                -Transmits info through an Access Token
                <br />
                Governed by the OAuth 2.0 framework
                <br />
              </small>
            </p>
          </blockquote>
        </Card.Body>
      </Card>
      <Card className="w-75 mx-auto mt-5">
        <Card.Header className="text-dark">
          Question: Why are you using firebase? What other options do you have
          to implement authentication?
        </Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              <Badge pill bg="secondary">
                Why are you using firebase :
              </Badge>
              <br />
              <small>
                The firebase realtime database make life easy. It lets me build
                and connect applications by allowing secure access to the
                database directly from client-side code. Data is persisted
                locally, and even while offline, realtime events continue to
                fire, giving the end user a responsive experience.
              </small>
              <br />
              <Badge pill bg="secondary">
                What other options do you have to implement authentication :
              </Badge>
              <br />

              <small>
                -STYTCH
                <br />
                -Ory
                <br />
                -Supabase
                <br />
                -Okta
                <br />
                -PingIdentity
                <br />
                -Keycloak
                <br />
                And many more option
              </small>
            </p>
          </blockquote>
        </Card.Body>
      </Card>
      <Card className="w-75 mx-auto mt-5">
        <Card.Header className="text-dark">
          Question: What other services does firebase provide other than
          authentication ?
        </Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              <small>
                There are many services which Firebase provides, Most useful of
                them are:
              </small>
              <small>
                -Cloud Firestore
                <br />
                -Cloud Functions
                <br />
                -Authentication
                <br />
                -Hosting
                <br />
                -Cloud Storage
                <br />
                -Google Analytics
                <br />
                -Predictions
                <br />
                -Cloud Messaging
                <br />
                -Dynamic Links
                <br />
                -Remote Config
                <br />
                Firebase is a full package that can help in developing your
                mobile or web applications faster with fewer resources and more
                efficiency.
              </small>
            </p>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Blogs;
