import React, { PureComponent } from "react";

class EditOrder extends PureComponent {
  handleUpdate = (e) => {
    e.preventDefault();

    const newRecipient = this.getRecipient.value;
    const newDate = this.getDate.value;
    const newTotalAmount = this.getTotalAmount.value;

    const {
      order: { orderId },
      dispatch,
    } = this.props;

    const data = {
      newRecipient,
      newDate,
      newTotalAmount,
    };

    dispatch({
      type: "UPDATE_ORDER",
      orderId,
      data,
    });
  };

  render() {
    const { order } = this.props;
    const { recipient, date, totalamount } = order;

    return (
      <div className="mb-3">
        <form onSubmit={this.handleUpdate}>
          <div className="row form-group">
            <div className="col">
              <input
                id="recipient"
                className="form-control"
                placeholder="Enter Updated Recipient Name"
                ref={(input) => (this.getRecipient = input)}
                defaultValue={recipient}
                required
              />
            </div>
          </div>
          <div className="row form-group">
            <div className="col">
              <input
                id="date"
                className="form-control"
                placeholder="Date"
                ref={(input) => (this.getDate = input)}
                defaultValue={date}
                required
              />
            </div>
          </div>
          <div className="row form-group">
            <div className="col">
              <input
                id="totalamount"
                className="form-control"
                placeholder="Total Amount"
                ref={(input) => (this.getTotalAmount = input)}
                defaultValue={totalamount}
                required
              />
            </div>
          </div>
          <button className="btn btn-success">Update</button>
        </form>
      </div>
    );
  }
}

export default EditOrder;
