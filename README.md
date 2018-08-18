# Sample React + Redux
Shows the usage of the react with redux including the followings:

- Parent / child / grand child
- Creating store and combining all reducers
- Reducers for data components
- Usage of rich components (containers) e.g. components conntected to redux using reducers and "Connect"
- Action and dispatchers to handle events

## Example:

Great sample and diagram -> https://github.com/RahmanM/React-Redux-Boilerplate

![redux flow image](https://github.com/RahmanM/react-redux-sample/blob/master/react_redux_diagram.png)

```javascript

// This maps the store data (state) to component props
function mapStateToProps(state) {
  return {
      todos: state.todos
  };
}

// This maps the actions (e.g. click events) to reducers data
function matchDispatchToProps(dispatch){
  return bindActionCreators({todoSelected: todoSelected}, dispatch);
}

// Required to do the glueing of the component to redux
export default connect(mapStateToProps, matchDispatchToProps)(Todo);

```

# Steps

- npm install create-react-app
- create-react-app <app-name>
- npm start -> start the build server and browser
- npm install --save react-redux
- npm install --save redux

