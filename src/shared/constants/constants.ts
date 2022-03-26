export class Constants {
    public static url = {
        dataSource : 'https://assets.fc-dev.instore.oakley.com/assets/products/products.json',
        logoImage : 'https://via.placeholder.com/100x50/0Cf/fff.png',
        productImage : 'https://via.placeholder.com/600/0Cf/fff.png',
        smallProductImage : 'https://via.placeholder.com/300/0Cf/fff.png',
        productImageVariant : 'https://via.placeholder.com/80x50/0Cf/fff.png',
        linkedin : 'https://it.linkedin.com/in/micheleamante',
        _500px : 'https://500px.com/p/michele-amante?view=photos',
    };

    public static currencies = [
        { iso : 'USD', symbol :  '$' },
        { iso : 'EUR', symbol : '€' },
        { iso : 'JPY', symbol : '¥'},
    ];

    public static labels = {
        sunglasses : 'Sunglasses',
        eyeglasses : 'Eyeglasses',
        lenses : 'Lenses',
        files : 'Files',

        resetButton : 'Reset',
        subscribeButton : 'Sign Up',
        emailError: 'Incorrect e-mail address',
        relatedLeftButton: '<',
        relatedRightButton: '>',
        productListEmptyState : 'Sorry, we didn\'t find what you were looking for :\'(',

        subscribeToNewsletter : 'Subscribe to our Newsletter',

        linkedin : 'linkedin',
        _500px : '500px',
    }
}