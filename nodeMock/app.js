const express = require( 'express' )
const app     = express()
const port    = process.env.PORT || 3000

//Elastick Search Mock
const ES = "/acme-elasticsearch-v1"
app.get( ES+'/products' ,(req, res) => {
	res.type( 'application/json' )
	res.send( '[{"id":"string","@context":"https://schema.org/","@type":"Product","name":"Executive Anvil","image":["https://example.com/photos/1x1/photo.jpg https://example.com/photos/4x3/photo.jpg https://example.com/photos/16x9/photo.jpg"],"description":"Sleeker than ACMEs Classic Anvil the Executive Anvil is perfect for the business traveler looking for something to drop from a height.","sku":"0446310786","mpn":"925872","brand":{"@type":"Brand","name":"ACME"},"review":{"@type":"Review","reviewRating":{"@type":"Rating","ratingValue":"4","bestRating":"5"}},"author":{"@type":"Person","name":"Fred Benson"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.4","reviewCount":"89"},"offers":{"@type":"Offer","url":"https://example.com/anvil","priceCurrency":"USD","price":"119.99","priceValidUntil":"2020-11-20","itemCondition":"https://schema.org/UsedCondition","availability":"https://schema.org/InStock"},"status":"Approved"}] ')
})
app.post( ES+'/products' ,(req, res) => {
	res.type( 'application/json' )
	res.status( 201 )
	res.send( )
})
app.put( ES+'/products/:id' ,(req, res) => {
	res.type( 'application/json' )
	res.status( 200 )
	res.send( )
})
app.delete( ES+'/products/:id' ,(req, res) => {
	res.type( 'application/json' )
	res.status( 200 )
	res.send( )
})
//end Elastick Search Mock

// MongoDB mock
const mongo = "/acme-mongodb-v1"
app.post( mongo+'/products' ,(req, res) => {
	res.type( 'application/json' )
	res.status( 200 )
	res.send( )
})
// end mongodb mock

//big company db mock
const big = "/acme-bigcompanydb-v1"
app.get( big+'/products' ,(req, res) => {
	res.type( 'application/json' )
	res.status( 200 )
	res.send( '[{"id":"string","@context":"https://schema.org/","@type":"Product","name":"Executive Anvil Big","image":["https://example.com/photos/1x1/photo.jpg https://example.com/photos/4x3/photo.jpg https://example.com/photos/16x9/photo.jpg"],"description":"Sleeker than ACMEs Classic Anvil the Executive Anvil is perfect for the business traveler looking for something to drop from a height.","sku":"0446310786","mpn":"925872","brand":{"@type":"Brand","name":"BIG"},"review":{"@type":"Review","reviewRating":{"@type":"Rating","ratingValue":"4","bestRating":"5"}},"author":{"@type":"Person","name":"Fred Benson"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.4","reviewCount":"89"},"offers":{"@type":"Offer","url":"https://example.com/anvil","priceCurrency":"USD","price":"119.99","priceValidUntil":"2020-11-20","itemCondition":"https://schema.org/UsedCondition","availability":"https://schema.org/InStock"},"status":"Approved"}] ')
})
//end big company mock

//email api mock
const email = "/acme-emailnotification-v1"
app.post( email+'/send' ,(req, res) => {
	res.type( 'application/json' )
	res.status( 201 )
	res.send( )
})
//end email api mock

app.listen( port ,
() => console.log(`Expresso ☕ is on Port ${ port } Ctrl + C to Stop `) )
