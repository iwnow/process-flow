import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'pfc-pf-components',
	template: `
		<p>
			pf-components works! {{text}}
		</p>
	`,
	styles: []
})
export class PfComponentsComponent implements OnInit {

	@Input() text;

	constructor() { }

	ngOnInit() {
	}

}
