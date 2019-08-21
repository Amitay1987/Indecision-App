class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: props.options,
            title: 'Indecision App',
            subtitle: 'Put your life in the hands of computer'
        }
        this.handleAddOptions = this.handleAddOptions.bind(this);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);

    }
    //add to options array
    handleAddOptions(option) {
        if (!option) {
            return 'enter valid value item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'this option already exist';
        }
        else {
            this.setState((prevState) => ({ options: prevState.options.concat(option) }))
        }
    }
    //delete all option array
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }))
    }
    //guess option and alert it to screen 
    handlePick() {
        let guess = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[guess]);
    }
    handleDeleteOption(option) {
        // console.log('test', option);

        for (let i = 0, found = false; i < this.state.options.length && found == false; i++) {
            if (option == this.state.options[i]) {
                found = true;
                this.state.options.splice(i, 1);
            }
        }
        this.setState(() => ({ options: this.state.options }));
    }
    render() {
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
                    handleDeleteOption={this.handleDeleteOption}
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
            {props.subtitle && <p>{props.subtitle}</p>}
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of computer'
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
                {
                    props.options.map((option) => (
                        <Option
                            key={option}
                            optionText={option}
                            handleDeleteOption={props.handleDeleteOption}
                        />
                    ))
                }
            </div>

        </div>
    );
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAddOption = (e) => {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({ error }))
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
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
        <div>
            {props.optionText}
            <button
                onClick={(e) => {
                    e.preventDefault();
                    props.handleDeleteOption(props.optionText)
                }}
            >
                remove
            </button>
        </div>
    );
}

IndecisionApp.defaultProps = {
    options: []
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))