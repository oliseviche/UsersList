'use strict'

const directivePaths = [
	'./nav-menu/NavMenuDirective',
	'./view-panel/ViewPanelDirective', 
	'./list-view/ListViewDirective', 
	'./grid-view/GridViewDirective', 
	'./group-view/GroupViewDirective', 
	'./sort-select/SortSelectDirective'
];

define(directivePaths, function() {
	let directives = [...arguments];

	return directives.reduce((collection, directive) => {
		collection[directive.name] = directive;
		return collection;
	}, {});
})