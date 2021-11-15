{
  "items": [
    {
      "amount": 100,
      "description": "Chaveiro do Tesseract",
      "quantity": 1,
      "code": "12345"
    }
  ],
    "customer": {
    "name": "Tony Stark",
      "email": "Tony@Avangers.com"
  },
  "payments": [
    {
      "payment_method": "credit_card",
      "credit_card": {
        "installments": 1,
        "statement_descriptor": "AVENGERS",
        "card": {
          "number": "342793631858229",
          "holder_name": "Tony Stark",
          "exp_month": 1,
          "exp_year": 30,
          "cvv": "3531",
          "billing_address": {
            "line_1": "10880, Malibu Point, Malibu Central",
            "zip_code": "90265",
            "city": "Malibu",
            "state": "CA",
            "country": "US"
          }
        }
      },
      "split": [
        {
          "amount": 50,
          "recipient_id": "rp_5yGwpMGckBHVYmb6",
          "type": "percentage",
          "options": {
            "charge_processing_fee": true,
            "charge_remainder_fee": true,
            "liable": true
          }
        },
        {
          "amount": 50,
          "type": "percentage",
          "recipient_id": "rp_yLnAyVpHbQIqZxwO",
          "options": {
            "charge_processing_fee": false,
            "charge_remainder_fee": false,
            "liable": false
          }
        }
      ]
    }
  ]
}
