import React from "react";
import { Badge, Card } from "react-bootstrap";
import me from "../../images/mypic.jpg";

const About = () => {
  return (
    <div>
      <h2 className="text-success text-center mt-5">Hi!! I'm Ronnie</h2>
      <h5 className="text-secondary text-center">
        I'm merely on energy-saving mode.
        <br /> Don't say Im lazy.
      </h5>
      <div className="w-50 mx-auto mt-4">
        <img className="w-50 mx-auto d-block " src={me} alt="" />
      </div>

      <div className="mt-5">
        <Card className="w-50  mx-auto text-center">
          <Card.Header className="text-primary fs-4">
            professional look picture!!
          </Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                <Badge pill bg="success">
                  My Goal !
                </Badge>
                <br />
                <Badge pill bg="secondary">
                  Staying ahead of the competition
                </Badge>
                <br />
                <Badge pill bg="secondary">
                  Long-term professional development
                </Badge>
                <br />
                <Badge pill bg="secondary">
                  Better time management
                </Badge>
                <br />
                <Badge pill bg="secondary">
                  More confidence
                </Badge>
                <br />
                <Badge pill bg="secondary">
                  Get a job in big Three ! #GFM
                </Badge>
                <br />
                <br />
                <Badge pill bg="success">
                  I will work hard to achieve my goal
                </Badge>
                <br />
                <Badge pill bg="secondary">
                  Write down my goal
                </Badge>
                <br />
                <Badge pill bg="secondary">
                  Set a deadline
                </Badge>
                <br />
                <Badge pill bg="secondary">
                  Work on my mindset
                </Badge>
                <br />
                <Badge pill bg="secondary">
                  Develop my skill and knowledge
                </Badge>
                <br />
                <Badge pill bg="secondary">
                  Take the first step kinda did !
                </Badge>
                <br />
                <Badge pill bg="secondary">
                  Continue to completion
                </Badge>
                <br />
                <Badge pill bg="secondary">
                  Reward yourself
                </Badge>
                <br />
              </p>
            </blockquote>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default About;
