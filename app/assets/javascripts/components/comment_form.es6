class CommentForm extends React.Component {

  static get contextTypes() {
    return {
      actions: React.PropTypes.func.isRequired
    }
  }

  constructor() {
    super();
    this.defaultState = { body: '', author: '' };
    this.state = this.defaultState;
  }

  submitComment(event) {
    event.preventDefault();
    this.context.actions.addComment(this.state);
    this.setState(this.defaultState);
  }

  onFieldChange(event) {
    let prop = {};
    prop[event.target.name] = event.target.value;
    this.setState(prop);
  }

  render() {
    return (
      <form>
        <label>Author</label>
        <input type="text" name="author" onChange={this.onFieldChange.bind(this)} value={this.state.author} />
        <label>Comment</label>
        <textarea name="body" onChange={this.onFieldChange.bind(this)} value={this.state.body} />
        <button onClick={this.submitComment.bind(this)} type="submit" >Submit</button>
      </form>
    );
  }
}
export default CommentForm;