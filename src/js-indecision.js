
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [],
            title: 'Put your life in the hands of computer',
        }
        this.handleAddOptions = this.handleAddOptions.bind(this);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);

    }
    //add to options array
    handleAddOptions(option) {
        this.setState((prevState) => {
            return { options: prevState.options.concat(option) }
        })
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
                <h1>Indecision-App</h1>
                <Header title={this.state.title} />
                <Action hasOptions={this.state.options.length > 0}
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


class Header extends React.Component {

    render() {
        return (
            <div>
                <p>{this.props.title}</p>
            </div>
        );
    }
}

class Action extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <button
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}
                >
                    What should I do
                </button>
            </div>
        );
    }
}


class Options extends React.Component {
    render() {
        console.log(this.props.options);
        return (
            <div>
                <button
                    onClick={this.props.handleDeleteOptions}
                    disabled={!this.props.hasOptions}
                >remove All</button>
                <div>
                    {this.props.options.length > 0 && 'Your Options'}
                    {this.props.options.map((option, index) => <Option key={index} data={option} />)}
                </div>
                <h3>Number of options : {this.props.options.length}</h3>
            </div>
        );
    }
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
    }
    handleAddOption = (e) => {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        console.log(option);
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
class Option extends React.Component {
    render() {
        return (
            <div>{this.props.data}</div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))