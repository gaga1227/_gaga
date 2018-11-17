class TimersDashboard extends React.Component {
  // can use property initializer syntax thanks to 'transform-class-properties'
  // or have to use Babel ES7 stage 3 present
  state = {
    timers: [
      {
        title: 'Practice squat',
        project: 'Gym Chores',
        id: uuid.v4(),
        elapsed: 5456099,
        runningSince: Date.now(),
      },
      {
        title: 'Bake squash',
        project: 'Kitchen Chores',
        id: uuid.v4(),
        elapsed: 1273998,
        runningSince: null,
      },
    ],
  };

  render() {
    return (
      <div className='ui three column centered grid'>
        <div className='column'>
          <EditableTimerList
            timers={this.state.timers}
          />
          <ToggleableTimerForm
            isOpen={true}
          />
        </div>
      </div>
    );
  }
}

class EditableTimerList extends React.Component {
  render() {
    const timers = this.props.timers.map(timer => (
      <EditableTimer
        key={timer.id}
        id={timer.id}
        title={timer.title}
        project={timer.project}
        elapsed={timer.elapsed}
        runningSince={timer.runningSince}
      />
    ));

    return (
      <div id='timers'>
        {timers}
      </div>
    );
  }
}

class EditableTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editFormOpen: false
    };
  }

  handleFormClose = (e) => {
    this.setState({
      editFormOpen: false
    });
  };

  render() {
    let result;
    if (this.state.editFormOpen) {
      result = (
        <TimerForm
          id={this.props.id}
          title={this.props.title}
          project={this.props.project}
          onHandleFormClose={this.handleFormClose}
        />
      );
    } else {
      result = (
        <Timer
          id={this.props.id}
          title={this.props.title}
          project={this.props.project}
          elapsed={this.props.elapsed}
          runningSince={this.props.runningSince}
        />
      );
    }
    return result;
  }
}

class TimerForm extends React.Component {
  state = {
    title: this.props.title || '', // prop is undefined when used in ToggleableTimerForm
    project: this.props.project || '', // prop is undefined when used in ToggleableTimerForm
  };

  handleTitleChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  handleProjectChange = e => {
    this.setState({
      project: e.target.value
    });
  };

  render() {
    const submitText = this.props.title ? 'Update' : 'Create';
    return (
      <div className='ui centered card'>
        <div className='content'>
          <div className='ui form'>
            <div className='field'>
              <label>Title</label>
              <input
                type='text'
                value={this.state.title}
                onChange={this.handleTitleChange}
              />
            </div>
            <div className='field'>
              <label>Project</label>
              <input
                type='text'
                value={this.state.project}
                onChange={this.handleProjectChange}
              />
            </div>
            <div className='ui two bottom attached buttons'>
              <button className='ui basic blue button'>
                {submitText}
              </button>
              <button
                className='ui basic red button'
                onClick={this.props.onHandleFormClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Timer extends React.Component {
  render() {
    const elapsedString = helpers.renderElapsedString(this.props.elapsed);
    return (
      <div className='ui centered card'>
        <div className='content'>
          <div className='header'>
            {this.props.title}
          </div>
          <div className='meta'>
            {this.props.project}
          </div>
          <div className='center aligned description'>
            <h2>
              {elapsedString}
            </h2>
          </div>
          <div className='extra content'>
            <span className='right floated edit icon'>
              <i className='edit icon'/>
            </span>
            <span className='right floated trash icon'>
              <i className='trash icon'/>
            </span>
          </div>
        </div>
        <div className='ui bottom attached blue basic button'>
          Start
        </div>
      </div>
    );
  }
}

class ToggleableTimerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  // can use property initializer syntax thanks to 'transform-class-properties'
  // or have to use Babel ES7 stage 3 present
  // so we can have access to 'this' within arrow function without binding
  handleFormOpen = (e) => {
    this.setState({
      isOpen: true
    });
  };

  handleFormClose = (e) => {
    this.setState({
      isOpen: false
    });
  };

  render() {
    let result;
    if (this.state.isOpen) {
      result = (
        <TimerForm
          onHandleFormClose={this.handleFormClose}
        />
      );
    } else {
      result = (
        <div className='ui basic content center aligned segment'>
          <button
            className='ui basic button icon'
            onClick={this.handleFormOpen}
          >
            <i className='plus icon'/>
          </button>
        </div>
      );
    }
    return result;
  }
}

ReactDOM.render(
  <TimersDashboard/>,
  document.getElementById('content')
);

