class TimersDashboard extends React.Component {
  // can use property initializer syntax thanks to 'transform-class-properties'
  // or have to use Babel ES7 stage 3 present
  state = {
    timers: []
  };

  componentDidMount() {
    this.loadTimersFromServer();
    setInterval(this.loadTimersFromServer, 5000);
  }

  loadTimersFromServer = () => {
    client.getTimers(serverTimers => {
      this.setState({
        timers: serverTimers
      });
    });
  };

  createTimer = timer => {
    const t = helpers.newTimer(timer);
    this.setState({
      timers: this.state.timers.concat(t)
    });

    // remote call
    client.createTimer(t);
  };

  updateTimer = attrs => {
    this.setState({
      timers: this.state.timers.map(timer => {
        if (timer.id === attrs.id) {
          return Object.assign({}, timer, {
            title: attrs.title,
            project: attrs.project,
          });
        } else {
          return timer;
        }
      })
    });

    // remote call
    client.updateTimer(attrs);
  };

  deleteTimer = timerId => {
    this.setState({
      timers: this.state.timers.filter(timer => {
        return timer.id !== timerId;
      })
    });

    // remote call
    client.deleteTimer({
      id: timerId
    });
  };

  startTimer = timerId => {
    const now = Date.now();
    this.setState({
      timers: this.state.timers.map(timer => {
        if (timer.id === timerId) {
          return Object.assign({}, timer, {
            runningSince: now
          });
        } else {
          return timer;
        }
      })
    });

    // remote call
    client.startTimer({
      id: timerId,
      start: now
    });
  };

  stopTimer = timerId => {
    const now = Date.now();
    this.setState({
      timers: this.state.timers.map(timer => {
        if (timer.id === timerId) {
          const lastElapsed = now - timer.runningSince;
          return Object.assign({}, timer, {
            elapsed: timer.elapsed + lastElapsed,
            runningSince: null
          });
        } else {
          return timer;
        }
      })
    });

    // remote call
    client.stopTimer({
      id: timerId,
      stop: now
    });
  };

  handleEditFormSubmit = timer => {
    this.updateTimer(timer);
  };

  handleCreateFormSubmit = timer => {
    this.createTimer(timer);
  };

  handleTrashClick = timerId => {
    this.deleteTimer(timerId);
  };

  handleStartClick = timerId => {
    this.startTimer(timerId);
  };

  handleStopClick = timerId => {
    this.stopTimer(timerId);
  };

  render() {
    return (
      <div className='ui three column centered grid'>
        <div className='column'>
          <EditableTimerList
            timers={this.state.timers}
            onFormSubmit={this.handleEditFormSubmit}
            onTrashClick={this.handleTrashClick}
            onStartClick={this.handleStartClick}
            onStopClick={this.handleStopClick}
          />
          <ToggleableTimerForm
            onFormSubmit={this.handleCreateFormSubmit}
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
        onFormSubmit={this.props.onFormSubmit}
        onTrashClick={this.props.onTrashClick}
        onStartClick={this.props.onStartClick}
        onStopClick={this.props.onStopClick}
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

  openForm = () => {
    this.setState({
      editFormOpen: true
    });
  };

  closeForm = () => {
    this.setState({
      editFormOpen: false
    });
  };

  handleFormSubmit = (timer) => {
    this.props.onFormSubmit(timer);
    this.closeForm();
  };

  handleFormClose = () => {
    this.closeForm();
  };

  handleEditClick = () => {
    this.openForm();
  };

  render() {
    let result;
    if (this.state.editFormOpen) {
      result = (
        <TimerForm
          id={this.props.id}
          title={this.props.title}
          project={this.props.project}
          onFormSubmit={this.handleFormSubmit}
          onFormClose={this.handleFormClose}
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
          onEditClick={this.handleEditClick}
          onTrashClick={this.props.onTrashClick}
          onStartClick={this.props.onStartClick}
          onStopClick={this.props.onStopClick}
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

  handleSubmit = () => {
    this.props.onFormSubmit({
      id: this.props.id,
      title: this.state.title,
      project: this.state.project
    });
  };

  render() {
    const submitText = this.props.id ? 'Update' : 'Create'; // newly created instance has id as undefined
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
              <button
                className='ui basic blue button'
                onClick={this.handleSubmit} // use proxy method so we can pass custom data param up
              >
                {submitText}
              </button>
              <button
                className='ui basic red button'
                onClick={this.props.onFormClose}
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
  // react lifecycle methods are automatically bound to 'this'
  // no need to bind manually
  componentDidMount() {
    this.forceUpdateInterval = setInterval(() => {
      this.forceUpdate();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.forceUpdateInterval);
  }

  handleTrashClick = () => {
    this.props.onTrashClick(this.props.id);
  };

  handleStartClick = () => {
    this.props.onStartClick(this.props.id);
  };

  handleStopClick = () => {
    this.props.onStopClick(this.props.id);
  };

  render() {
    const elapsedString = helpers.renderElapsedString(this.props.elapsed, this.props.runningSince);

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
            <span
              className='right floated edit icon'
              onClick={this.props.onEditClick}
            >
              <i className='edit icon'/>
            </span>
            <span
              className='right floated trash icon'
              onClick={this.handleTrashClick}
            >
              <i className='trash icon'/>
            </span>
          </div>
        </div>
        <TimerActionButton
          timerIsRunning={!!this.props.runningSince}
          onStartClick={this.handleStartClick}
          onStopClick={this.handleStopClick}
        />
      </div>
    );
  }
}

class TimerActionButton extends React.Component {
  render() {
    return (
      <div
        className='ui bottom attached blue basic button'
        onClick={this.props.timerIsRunning ? this.props.onStopClick : this.props.onStartClick}
      >
        {this.props.timerIsRunning ? 'Stop' : 'Start'}
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

  handleFormSubmit = (timer) => {
    this.props.onFormSubmit(timer);
    this.setState({
      isOpen: false
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
          onFormSubmit={this.handleFormSubmit}
          onFormClose={this.handleFormClose}
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

