# PRAISE

Another test project (you may have noticed that I have a bunch of them). Here I'm going to develop an application following the O'Reilly - ['Hands-on with React and Ruby on Rails'](http://shop.oreilly.com/product/0636920044307.do) course. One thing to point out, I'm not going to blindly copypaste the provided examples and there are going to be Songs with Comments in my app. Other differences to come.

## TOPICS COVERED

- Setting up Rails with React
- Introduction to ES6
- The Flux pattern
- Using Webpack with Rails
- Writing isomorphic apps
- Browser-based testing
- Redux Refactor

### Setting up Rails with React

is simple. Scaffolded *Song* and *Comment* models. Added `gem 'react-rails'` to *Gemfile* and developed my first React Component:

```jsx
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
```

Which can be called in my views using the `react_component` helper provided by the *react-rails* gem:

```erb
<%= react_component( 'Comment', { author: 'D', body: 'asdf', rank: 14 }) %>
```