import http from 'k6/http';
import { check } from 'k6';

export default function () {
    const response = http.post(
        'http://localhost:5000/counter/increment'
    );

    check(response, {
        'status 200': (r) => r.status === 200,
    });

    console.log(response.body);
}