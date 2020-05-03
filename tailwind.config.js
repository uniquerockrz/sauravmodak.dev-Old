module.exports = {
    purge: [],
    theme: {
        extend: {
            screens: {
                'sm': '640px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1280px',
            },
            fontFamily: {
                heading: [ "Rubik", "Helvetica", "Arial" ],
                body: [ "Karla", "Helvetica", "Arial" ]
            },
            colors: {
                primary: '#2161f2',
                primaryLight: '#4d80f4'
            },
            lineHeight: {
                normal: '1.5'
            },
            minWidth: {
                '1/4': '25%'
            },
            maxWidth: {
                '800': '800px'
            }
        },
    },
    variants: {},
    plugins: [],
}