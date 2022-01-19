import Stripe from 'stripe'
import { version } from '../../package.json'

export const stripe = new Stripe(
    'sk_test_51KHGZJHGADrOIVJzQ1ZGdEgQH6I4vGEMTiPr908Fk3gHxgdMSakou4qBKj5truZ8dFCpXh1vStKrlOxjmVOD97SQ00hW6Qy1vH',
    {
        apiVersion: '2020-08-27',
        appInfo: {
            name: 'Ignews',
            version
        }
    }

)