/*

Athlytic：https://apps.apple.com/app/id515094775

[rewrite_local]
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/Tossy654/Script/js/Athlytic.js

[MITM]
hostname = buy.itunes.apple.com

*/
var guding = { 
    "receipt": { 
      "receipt_type": "Production", 
      "bundle_id": "myndarc.newFitnessApp", 
      "in_app": [ 
        { 
          "quantity": "1", 
          "expires_date": "2026-02-24 06:06:06 Etc\/GMT",
          "expires_date_pst": "2666-06-06 06:06:06 America\/Los_Angeles",
          "purchase_date_ms": "166666666666666", 
          "transaction_id": "666666666666662", 
          "original_transaction_id": "666666666666662", 
          "product_id": "newfitnessapp02", 
          "in_app_ownership_type": "PURCHASED", 
          "original_purchase_date_ms": "666666666666662" 
        } 
      ], 
      "request_date": "2022-02-02 06:06:06 Etc\/GMT",
      "application_version": "5.7.8", 
      "original_purchase_date_ms": "666666666666662", 
      "original_application_version": "5.7.8" 
    }, 
    "environment": "Production", 
    "pending_renewal_info": [ 
      { 
        "product_id": "newfitnessapp02", 
        "auto_renew_status": "1" 
      } 
    ], 
    "status": 0, 
    "latest_receipt_info": [ 
      { 
        "quantity": "1", 
        "purchase_date_ms": "666666666666662", 
        "expires_date": "2026-02-24 06:06:06 Etc\/GMT", 
        "expires_date_pst": "2026-06-06 06:06:06 America\/Los_Angeles", 
        "is_in_intro_offer_period": "false", 
        "transaction_id": "666666666666662", 
        "is_trial_period": "false", 
        "original_transaction_id": "666666666666662", 
        "product_id": "newfitnessapp02", 
        "original_purchase_date_ms": "666666666666662", 
        "expires_date_ms": "148204937166002" 
      } 
    ] 
};
$done({ body: JSON.stringify(guding) });
