module.exports = {
    purge: [],
    theme: {
        extend: {
            screens: {
                'xs': {'min': '200px', 'max': '639px'},
                'sm': {'min': '640px', 'max': '767px'},
                'md': {'min': '768px', 'max': '1023px'},
                'lg': {'min': '1024px', 'max': '1279px'},
                'xl': {'min': '1280px'},
            },
            fontFamily: {
                heading: [ "Inter", "Helvetica", "Arial" ],
                body: [ "Karla", "Helvetica", "Arial" ],
                reading: [ "Montserrat", "Helvetica", "Arial" ] 
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