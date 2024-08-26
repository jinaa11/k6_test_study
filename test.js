import http from 'k6/http';
import {sleep} from 'k6';

// export const options = {
//   vus: 10,
//   duration: '30s',
// };

// 단일 사용자가 "https://test.k6.io"에 대해 요청을 보냄
// "https://test.k6.io" => k6에서 제공하는 간단한 테스트 웹사이트
export default function() {
  // http.get('확인하고 싶은 경로');
  http.get('http://test.k6.io');
  sleep(1);
}

// export default function() {
//   const url = 'http://localhost/sample';
//   const payload = JSON.stringify({
//       api_key: 'xxxxx'
//   });

//   const params = {
//       headers: {
//           'Content-Type': 'application/json',
//       },
//   };

//   http.post(url, payload, params);
// }

// export function handleSummary(data) {
//   return {
//     "summary.html" : htmlReport(data)
//   }
// }