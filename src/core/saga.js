import { all } from 'redusx-saga/effects';
import { personalHomepageSaga } from './features/personalHomepage/personalHomepageSaga'

export default function* saga() {
    yield all ([
        personalHomepageSaga(),
    ]);
}