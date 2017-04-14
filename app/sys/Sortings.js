'use strict'

define(function() {
	let comparer = (a, b) => {
		return a.localeCompare(b);
	}

	let fields = [
		{ 
			name: 'Name', 
			getValue: (value) => {
				return `${value.name.first} ${value.name.last}`;
			},
			comparer: comparer
		}, 
		{ 
			name: 'Email', 
			getValue: (value) => { 
				return value.email;
			},
			comparer: comparer
		},
		{ 
			name: 'Phone', 
			getValue: (value) => {
				return value.phone;
			},
			comparer: comparer 
		},
		{
			name: 'Department',
			getValue: (value) => {
				return value.department;
			},
			comparer: comparer
		}
	];

	return {
		fields: fields
	};
})