import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfComponentsComponent } from './pfc.component';

describe('PfComponentsComponent', () => {
	let component: PfComponentsComponent;
	let fixture: ComponentFixture<PfComponentsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PfComponentsComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PfComponentsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
