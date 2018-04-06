import React, { Component, Fragment } from 'react';
import { Button, Dialog } from 'material-ui'
import { Add } from 'material-ui-icons';
import {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

export default class extends Component {
  state = {
    open: false
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    const { open } = this.state

    return <Fragment>
      <Button variant="fab" onClick={this.handleToggle} mini>
        <Add />
      </Button>
      <Dialog
        open={open}
        onClose={this.handleToggle}
      >
        <DialogTitle id="form-dialog-title">
          Create a New Exercise
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill out the form below.
          </DialogContentText>
          <form>

          </form>
        </DialogContent>
          <DialogActions>
            <Button color="primary" variant='raised'>
              Create
            </Button>
          </DialogActions>
        </Dialog>
    </Fragment>
  }
}
