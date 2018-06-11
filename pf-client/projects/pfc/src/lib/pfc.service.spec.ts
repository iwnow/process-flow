import { TestBed, inject } from '@angular/core/testing';

import { PfComponentsService } from './pfc.service';

describe('PfComponentsService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [PfComponentsService]
		});
	});

	it('should be created', inject([PfComponentsService], (service: PfComponentsService) => {
		expect(service).toBeTruthy();
	}));

	it('snap test', () => {
		const o = {
			k: 5
		};

		o.k++;

		expect(o).toMatchSnapshot();

	});
});
