import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'
import forms from '@tailwindcss/forms'
import colors from 'tailwindcss/colors'

export default <Partial<Config>> {
    content: [],
    plugins: [
        typography(),
        forms(),
        require('tailwindcss-bg-patterns'),
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['bunny', 'sans-serif'],
            },
            colors: {
                primary: colors.red,
                secondary: colors.pink,
                background: colors.white,
                foreground: colors.black,
                text: colors.gray,
                accent: colors.sky,

            }
        },
    }

};
