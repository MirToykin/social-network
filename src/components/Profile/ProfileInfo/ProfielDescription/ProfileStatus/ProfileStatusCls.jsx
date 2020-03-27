import React, {Component} from "react";
import classes from './ProfileStatus.module.css'

export default class ProfileStatusCls extends Component {
  state = {
    editMode: false,
    statusValue: this.props.status
  }

  activateEditMode = () => {
    if (this.props.isAuthProfile) {
      this.setState({
        editMode: true
      })
    }
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    })
    this.props.updateStatus(this.state.statusValue)
  }

  changeStatusValue = (e) => {
    this.setState({
      statusValue: e.target.value
    })
  }

  componentDidUpdate(prevProps) {
    if (this.props.status !== prevProps.status) {
      this.setState({statusValue: this.props.status})
    }
  }

  render() {
    return (
      <div className={classes.status}>
        {!this.state.editMode && <div>
          <span onDoubleClick={this.activateEditMode}>
            {this.state.statusValue || this.props.isAuthProfile &&'Добавить статус'}
          </span>
        </div>}
        {this.state.editMode && <div>
          <input
            autoFocus={true}
            onBlur={this.deactivateEditMode}
            value={this.state.statusValue}
            onChange={(e) => this.changeStatusValue(e)}
          />
        </div>}
      </div>
    );
  }

}