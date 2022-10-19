%dw 2.0
import * from dw::test::Asserts
---
payload must equalTo([
  {
    "id": "string",
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Executive Anvil",
    "image": [
      "https://example.com/photos/1x1/photo.jpg https://example.com/photos/4x3/photo.jpg https://example.com/photos/16x9/photo.jpg"
    ],
    "description": "Sleeker than ACMEs Classic Anvil the Executive Anvil is perfect for the business traveler looking for something to drop from a height.",
    "sku": "0446310786",
    "mpn": "925872",
    "brand": {
      "@type": "Brand",
      "name": "ACME"
    },
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4",
        "bestRating": "5"
      }
    },
    "author": {
      "@type": "Person",
      "name": "Fred Benson"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.4",
      "reviewCount": "89"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://example.com/anvil",
      "priceCurrency": "USD",
      "price": "119.99",
      "priceValidUntil": "2020-11-20",
      "itemCondition": "https://schema.org/UsedCondition",
      "availability": "https://schema.org/InStock"
    },
    "status": "Approved"
  },
  {
    "id": "string",
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Executive Anvil Big",
    "image": [
      "https://example.com/photos/1x1/photo.jpg https://example.com/photos/4x3/photo.jpg https://example.com/photos/16x9/photo.jpg"
    ],
    "description": "Sleeker than ACMEs Classic Anvil the Executive Anvil is perfect for the business traveler looking for something to drop from a height.",
    "sku": "0446310786",
    "mpn": "925872",
    "brand": {
      "@type": "Brand",
      "name": "BIG"
    },
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4",
        "bestRating": "5"
      }
    },
    "author": {
      "@type": "Person",
      "name": "Fred Benson"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.4",
      "reviewCount": "89"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://example.com/anvil",
      "priceCurrency": "USD",
      "price": "119.99",
      "priceValidUntil": "2020-11-20",
      "itemCondition": "https://schema.org/UsedCondition",
      "availability": "https://schema.org/InStock"
    },
    "status": "Approved"
  }
])