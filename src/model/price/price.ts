interface Current { 
    value: number; 
}

export class Price {
    public current: Current;
    public currency: string;


    constructor (current: Current, currency: string) {
        this.current = current;
        this.currency = currency;
    }
}