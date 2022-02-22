import { valueConverter } from 'aurelia';

@valueConverter('truncate')
export class Truncate {
    toView(value: string) {
        if (value.length > 8) {
            return value.substr(0, 4) + "..." + value.substr(value.length - 4, value.length - 1);
        }
        return value;
    }
}