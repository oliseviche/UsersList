'use strict'

define(function() {

	class KML {
		constructor(pattern) {
			this.pattern = pattern;
			this.patternTable = this.buildPatternTable(pattern);
		}

		search(text) {
			let m = 0;
			let i = 0;
			let t = this.patternTable;

			while (m + i < text.length) {
				if (this.pattern[i] === text[m+i]) {
					if (i === this.pattern.length - 1) {
						return m;
					}
					i = i + 1;
				} else {
					if (t[i] > -1) {
						m = m + i - t[i];
						i = t[i];
					} else {
						i = 0;
						m = m + 1;
					}
				}
			}
			return -1;
		}

		buildPatternTable(pattern) {
			let t = [];
			let pos = 2;
			let cnd = 0;
			
			t[0] = -1;
			t[1] = 0;
			
			while (pos < pattern.length) {
				if (pattern[pos-1] === pattern[cnd]) {
					cnd = cnd + 1;
					t[pos] = cnd;
					pos = pos + 1;
				} else if (cnd > 0) {
					cnd = t[cnd];
				} else {
					t[pos] = 0;
					pos = pos + 1;
				}
			}
			
			return t;
		}
	}

	return {
		KnutMorrisPratt: KML
	};
})