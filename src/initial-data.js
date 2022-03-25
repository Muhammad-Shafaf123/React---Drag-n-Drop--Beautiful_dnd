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
	},
	columnOrder : ['column1'],
}

export default initialData;