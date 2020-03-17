<p align="center">
<img src="kapture.gif" />
</p>

<p align="center">
<b>Simple radio button component for React Native</b>
</p>

### Installation

To install a stable release use:

**yarn**

    yarn add rnative-radio-buttons

**npm**

    npm i rnative-radio-buttons --save
    
### Example

```JS
import RadioButtons from 'rnative-radio-buttons';

const options = [
  { label: 'Erkek', value: 'E' },
  { label: 'Kadın', value: 'K' },
];

class Index extends Component {
  state = {
    value: 'E'
  };
  
  render() {
    return (
      <RadioButtons
        options={options}
        selected={this.state.value}
        onPress={(value) => {
          return this.setState({ value })
        }}
      />
    )
  }
}
```
