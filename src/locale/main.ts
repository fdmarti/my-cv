import { createI18n } from 'vue-i18n';

import ES from '@/locale/es.json' ;
import EN from '@/locale/en.json';

type MessageSchema = typeof ES | typeof EN

export const i18n = createI18n<[MessageSchema], 'ES' | 'EN'>({
	legacy: false,
	locale: 'EN',
	messages: {
		EN: EN,
		ES: ES
	}
});
