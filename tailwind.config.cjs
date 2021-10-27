const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			textColor: {
				skin: {
					base: 'var(--color-text-base)',
					inverted: 'var(--color-text-inverted)',
					muted: 'var(--color-text-muted)',
					'inverted-muted': 'var(--color-text-inverted-muted)',
				}
			},
			backgroundColor: {
				skin: {
					primary: 'var(--color-primary)',
					'primary-muted': 'var(--color-primary-muted)',
					inverted: 'var(--color-inverted)',
					'inverted-muted': 'var(--color-inverted-muted)'
				}
			},
			borderColor: {
				skin: {
					base: 'var(--color-border-base)',
					muted: 'var(--color-border-muted)',
				}
			},

			ringColor: {
				skin: {
					base: 'var(--color-ring-base)',
					muted: 'var(--color-ring-muted)',
				}
			},
		}
	},
	plugins: [
		require('daisyui'),
	],
	// config (optional)
    daisyui: {
		styled: true,
		themes: false,
		base: true,
		utils: true,
		logs: false,
		rtl: false,
	  },
};

module.exports = config;
