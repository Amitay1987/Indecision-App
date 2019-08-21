
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [],
            title: 'Indecision App',
            subtitle: 'Put your life in the hands of computer'
        }
        this.handleAddOptions = this.handleAddOptions.bind(this);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);

    }
    //add to options array
    handleAddOptions(option) {
        if (!option) {
            return 'enter valid value item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'this option already exist';
        }
        else {
            this.setState((prevState) => {
                return { options: prevState.options.concat(option) }
            })
        }
    }
    //delete all option array
    handleDeleteOptions() {
        this.setState(() => {
            return { options: [] }
        })
    }
    //guess option and alert it to screen 
    handlePick() {
        let guess = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[guess]);
    }

    render() {
        //const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of computer'
        console.log(this.state.options.length);
        return (
            <div>
                <Header
                    title={this.state.title}
                    subtitle={this.state.subtitle}
                />
                <Action
                    hasOptions={this.state.options.length > 0}
                    options={this.state.options}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    hasOptions={this.state.options.length > 0}
                />
                <AddOption
                    options={this.state.options}
                    handleAddOption={this.handleAddOptions}
                />
            </div>
        );
    }
}


const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
        </div>
    );
}

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do
                </button>
        </div>
    );
}


const Options = (props) => {
    return (
        <div>
            <button
                onClick={props.handleDeleteOptions}
                disabled={!props.hasOptions}
            >remove All</button>
            <div>
                {props.options.length > 0 && 'Your Options'}
                {props.options.map((option, index) => <Option key={index} data={option} />)}
            </div>
            <h3>Number of options : {props.options.length}</h3>
        </div>
    );
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
    }
    handleAddOption = (e) => {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if (option) {
            this.props.handleAddOption(option);
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input id='option'></input>
                    <button>add option</button>
                </form>
            </div>
        );
    }
}

//Option --> Option component here
const Option = (props) => {
    return (
        <div>{props.data}</div>
    );
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))