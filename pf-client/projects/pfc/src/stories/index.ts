import { storiesOf } from '@storybook/angular';
// import { action } from '@storybook/addon-actions';
import { PfComponentsComponent } from '../public_api';

storiesOf('My Button', module)
	.add('with some emoji', () => ({
		component: PfComponentsComponent,
		props: {
			text: '😀 😎 👍 💯',
		},
	}));
	// .add('with some emoji and action', () => ({
	//   component: MyButtonComponent,
	//   props: {
	//     text: '😀 😎 👍 💯',
	//     click: action('clicked'),
	//   },
	// }));
