var fs = require('fs');


function getCertificate() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ certificate: "test_certifcate", ttl: 1000 });
        }, 1000);
       
    });
}

exports.getCertificate = getCertificate;