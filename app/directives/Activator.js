'use strict'

const directivePaths = [
	'./view-panel/ViewPanelDirective',
	'./grid-view/GridViewDirective',
	'./sort-select/SortSelectDirective',
	'./user/user-directive',
	'./manager/manager-directive',
	'./user-editor/user-editor-directive'
];

define(directivePaths, function() {
	let directives = [...arguments];

	return directives.reduce((collection, directive) => {
		collection[directive.name] = directive;
		return collection;
	}, {});
})