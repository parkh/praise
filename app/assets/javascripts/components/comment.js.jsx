var Comment = React.createClass({

  // Not required, just a good practice.
  propTypes: {
    author: React.PropTypes.string,
    body: React.PropTypes.string,
    rank: React.PropTypes.number
  },

  // required
  render: function() {
    return (
      <div>
        <div> Author: {this.props.author} </div>
        <div> Body: {this.props.body} </div>
        <div> Rank: {this.props.rank} </div>
      </div>
    );
  }
});