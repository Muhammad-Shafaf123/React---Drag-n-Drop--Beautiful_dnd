import React from 'react';
import ReactDOM from 'react-dom';
import initialData from './initial-data.js';
import '@atlaskit/css-reset';
import Column from './column';

class App extends React.Component {
	state = initialData;
	render() {
		//console.log(this.state.columnOrder.map())
		return this.state.columnOrder.map(columnId => {
			const column = this.state.columns[columnId];
			const tasks = column.tasksIds.map(tasksId => this.state.tasks[tasksId]);


			return <Column key={column.id} column={column} tasks={tasks}/>
		  });
	}
}


ReactDOM.render(<App />, document.getElementById('root'));
