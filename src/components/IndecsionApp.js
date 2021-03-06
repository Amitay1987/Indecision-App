import React from "react"
import Action from './Action'
import AddOption from './AddOption'
import Header from './Header'
import Options from './Options'
import OptionModal from './OptionModal'


export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of computer',
    selectedOption: undefined
  }

  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }))
  }



  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options: options }));
      }
    }
    catch (e) {
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.options.length !== prevState.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  componentWillUnmount() {
    console.log("component did unmount");
  }

  handleAddOptions = (option) => {
    if (!option) {
      return 'enter valid value item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'this option already exist';
    }
    else {
      this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    }
  }

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }))
  }

  handlePick = () => {
    let guess = Math.floor(Math.random() * this.state.options.length);
    let option = this.state.options[guess];
    this.setState(() => ({ selectedOption: option }))
  }

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => (
      { options: prevState.options.filter((option) => option !== optionToRemove) }
    ))
  }
  render() {
    return (
      <div>
        <Header
          title={this.state.title}
          subtitle={this.state.subtitle}
        />
        <div className='container'>
          <Action
            hasOptions={this.state.options.length > 0}
            options={this.state.options}
            handlePick={this.handlePick}
          />
          <div className='widget'>
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
          <OptionModal
            selectedOption={this.state.selectedOption}
            handleClearSelectedOption={this.handleClearSelectedOption}
          >
          </OptionModal>
        </div>

      </div>
    );
  }
}