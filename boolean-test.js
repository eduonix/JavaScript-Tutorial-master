console.log('===== Boolean Value!');
console.log( ( 1 ) ? 'true' : 'false' ); // true
console.log( ( '0' ) ? 'true' : 'false' ); // true
console.log( ( '1' ) ? 'true' : 'false' ); // true
console.log( ( [] ) ? 'true' : 'false' ); // true
console.log( ( {} ) ? 'true' : 'false' ); // true
console.log( ( '' ) ? 'true' : 'false' ); // false
console.log( ( 0 ) ? 'true' : 'false' ); // false
console.log( ( NaN ) ? 'true' : 'false' ); // false
console.log( ( undefined ) ? 'true' : 'false' ); // false
console.log( ( null ) ? 'true' : 'false' ); // false

// Comparison
console.log('===== Comparison');
console.log( ( 1=='1' ) ? 'true' : 'false' ); // true
console.log( ( 1=='0' ) ? 'true' : 'false' ); // false
console.log( ( 0=='0' ) ? 'true' : 'false' ); // true
console.log( ( 1==='1' ) ? 'true' : 'false' ); // false
console.log( ( 1==='0' ) ? 'true' : 'false' ); // false
console.log( ( 0==='0' ) ? 'true' : 'false' ); // false
console.log( ( 0==='0' ) ? 'true' : 'false' ); // false
console.log( ( 12==(1+'2') ) ? 'true' : 'false' ); // true