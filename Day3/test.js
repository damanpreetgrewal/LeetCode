/*
 * Complete the 'healthCheckup' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER lowerlimit
 *  2. INTEGER upperlimit
 * API URL: https://jsonmock.hackerrank.com/api/medical_records?page={page_no}
 */

const url = `https://jsonmock.hackerrank.com/api/medical_records`;
const https = require('https');

async function healthCheckup(lowerlimit, upperlimit, pageNumber) {
  return new Promise((resolve, reject) => {
    https
      .get(`${url}?page={pageNumber}`, resp => {
        let data = '';
        resp.on('data', chunk => {
          data += chunk;
        });
        resp.on('end', async () => {
          resolve(JSON.parse(data).data);
        });
      })
      .on('error', err => reject(err));
  });
}

async function main(lowerlimit, upperlimit) {
  console.log('lowerlimit', lowerlimit);
  let patients = [];
  for (let i = 1; i <= 10; i++) {
    let tempResult = [];
    tempResult = await healthCheckup(lowerlimit, upperlimit, i);
    patients = [...patients, ...tempResult];
  }

  const result = patients.filter(
    patient =>
      patient.vitals.bloodPressureDiastole >= lowerlimit &&
      patient.vitals.bloodPressureDiastole <= upperlimit
  );

  let count = result.length;
  console.log('count', count);
}

main(120, 160);
