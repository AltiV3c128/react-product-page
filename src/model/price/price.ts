import { isConstructorDeclaration } from "typescript";
import { Constants } from "../../modules/constants/constants";

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

    public getCurrencySymbol() {
        const currencies = Constants.currencies.filter((item) => item.iso == this.currency );
        return !!currencies.length ? currencies[0].symbol : this.currency;
    }
}