// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'https://product.prod.psi.initz.run/multikart/v1/product',
  cartUrl: 'https://cart.prod.psi.initz.run/multikart/v1/cart',
  orderUrl: 'https://order.prod.psi.initz.run/multikart/v1/order',
  ratingUrl: 'https://rating.prod.psi.initz.run/ratings',
  compareUrl: 'https://compare.prod.psi.initz.run/multikart/compare',
  wishlistUrl: 'https://wishlist.prod.psi.initz.run/multikart/product/wishlist',
  razorpayUrl:'https://razorpay.prod.psi.initz.run/payment',
  stripe_token: 'STRIPE_TOKEN',
  paypal_token: 'PAYPAL_TOKEN'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
