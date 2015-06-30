/**
 * Created by timwissel on 28-06-15.
 */
Offers = new Mongo.Collection('offers');

Offers.attachBehaviour('timestampable');

Offers.attachSchema(new SimpleSchema({
    item: {
        label: 'Item name (e.g. Rune Axe)',
        type: String
    },
    amount: {
        label: 'Amount in numbers (without suffixes like K or M)',
        type: Number
    },
    pricePerItem: {
        label: 'Price per item (in GP)',
        type: Number
    },
    buyingOrSelling: {
        type: String,
        label: 'Buying/selling',
        autoform: {
            options: [
                {
                    label: 'Buying',
                    value: 'Buying'
                },
                {
                    label: 'Selling',
                    value: 'Selling'
                }
            ]
        }
    },
    info: {
        label: 'Additional info',
        type: String,
        optional: true
    }
}));