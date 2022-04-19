const initialData = {
	tasks : {
		'task1' : {'id' : 'task1' , 'content' : 'takout the garbage'},
		'tast2' : {'id' : 'tast2' , 'content' : 'Which my favorite show'},
		'tast3' : {'id' : 'tast3' , 'content' : 'Change my phone'},
		'tast4' : {'id' : 'tast4' , 'content' : 'Cook dinner'},
	},
	columns : {
		column1 : {
			'id' : 'column1',
			'title' : 'To do',
			'taskIds' : ['task1', 'tast2', 'tast3', 'tast4'],
		},
		column2 : {
			'id' : 'column2',
			'title' : 'Progress',
			'taskIds' : [],
		},
		column3 : {
			'id' : 'column3',
			'title' : 'Done',
			'taskIds' : [],
		},
	},
	columnOrder : ['column1', 'column2', 'column3'],
}

export default initialData;
