const projectName = 'Currency Converter'
document.querySelector('title').textContent = projectName;

const coversionRatio = 0.89;

const toEuro = (amount, rate) => {
  return amount * rate;
}

const toUsd = (amount, rate) => {
  return amount * (1 / rate);
}

const that = this;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      conversionRatio: props.conversionRatio,
      project: props.project

    }
  }
  render() {
    const { conversionRatio, project } = this.state;
    return (
      <React.Fragment>
        <h2>
          {project}
        </h2>
        <h4>USD 1 : {conversionRatio}</h4>
      </React.Fragment>
    )
  }
}

class CurrencyInput extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return <input value={value} onChange={handleChange} type="number" />
  }
}


class Converter extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      rate: props.conversionRatio,
      usd: 1,
      euro: 1 * props.conversionRatio,
    };
  
  this.handleUsdChange = this.handleUsdChange.bind(this);
  this.handleEuroChange = this.handleEuroChange.bind(this);
}
// ...toUsd, toEuro
handleUsdChange(event) {
  const input = parseFloat(event.target.value);
  console.log(input);
  if (Number.isNaN(input)) {
    this.setState({
      usd: '',
      euro: '',
    });
    return; // early return
  }
  const euro = this.toEuro(input, this.state.rate).toFixed(3);
  console.log(euro, input, this.state.rate);
  this.setState({
    usd: event.target.value,
    euro
  });
  console.log(this.state);
}
handleEuroChange(event) {
  const input = parseFloat(event.target.value);
  if (Number.isNaN(input)) {
    this.setState({
      usd: '',
      euro: '',
    });
    return;  // early return
  }
  const usd = this.toUsd(input, this.state.rate).toFixed(3);
  this.setState({
    euro: event.target.value,
    usd
  });
}

toUsd(amount, rate) {
  return amount * (1 / rate);
}
toEuro(amount, rate) {
  return amount * rate;
}
  render() {
    const { usd, euro } = this.state;
    console.log(usd, euro);
    return (
      <React.Fragment>
         <div className="row text-center">

          <div className="col-12">
          <span className="mr-1">USD</span>
            <CurrencyInput value={usd} handleChange={this.handleUsdChange} />
            <span className="mx-3">=</span>
            <CurrencyInput value={euro} handleChange={this.handleEuroChange} />
            <span className="ml-1">EURO</span>
          </div>
         </div>
      </React.Fragment>
    )
  }
}

class SimpleOutput extends React.Component {
  render() {
    const { value, calculation } = this.props;
    return (
      <React.Fragment>
        
      </React.Fragment>  
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      conversionRatio: props.conversionRatio
    };
  }

  render() {
    const { name, conversionRatio } = this.state;
    return (
      <div class="col-12 text-center">
        <Header project={projectName} conversionRatio={conversionRatio} />
        <Converter conversionRatio={conversionRatio}/> 
      </div>
    );
  }
}

ReactDOM.render(
  <App conversionRatio={0.89}/>,
  document.getElementById('root')
);