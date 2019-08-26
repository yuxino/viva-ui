import * as React from "react";

class LightButton extends React.Component<{}, {}> {
  render() {
    return <div>hello world</div>;
  }
}

export { LightButton };

export default ({ name }: { name: string }) => {
  return <button>hello {name} !!</button>;
};
