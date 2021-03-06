import { PaySlip } from './paySlip.entity';
import { PaySlipService } from './paySlip.service';
import { CrudController, CrudRequest, CreateManyDto } from '@nestjsx/crud';
import { QueryOutcomeReport } from '../report/query.dto';
export declare class PaySlipController implements CrudController<PaySlip> {
    service: PaySlipService;
    constructor(service: PaySlipService);
    get base(): CrudController<PaySlip>;
    getMany(req: CrudRequest): Promise<{
        report: any;
        length: number;
        toString(): string;
        toLocaleString(): string;
        pop(): PaySlip;
        push(...items: PaySlip[]): number;
        concat(...items: ConcatArray<PaySlip>[]): PaySlip[];
        concat(...items: (PaySlip | ConcatArray<PaySlip>)[]): PaySlip[];
        join(separator?: string): string;
        reverse(): PaySlip[];
        shift(): PaySlip;
        slice(start?: number, end?: number): PaySlip[];
        sort(compareFn?: (a: PaySlip, b: PaySlip) => number): PaySlip[];
        splice(start: number, deleteCount?: number): PaySlip[];
        splice(start: number, deleteCount: number, ...items: PaySlip[]): PaySlip[];
        unshift(...items: PaySlip[]): number;
        indexOf(searchElement: PaySlip, fromIndex?: number): number;
        lastIndexOf(searchElement: PaySlip, fromIndex?: number): number;
        every(callbackfn: (value: PaySlip, index: number, array: PaySlip[]) => unknown, thisArg?: any): boolean;
        some(callbackfn: (value: PaySlip, index: number, array: PaySlip[]) => unknown, thisArg?: any): boolean;
        forEach(callbackfn: (value: PaySlip, index: number, array: PaySlip[]) => void, thisArg?: any): void;
        map<U>(callbackfn: (value: PaySlip, index: number, array: PaySlip[]) => U, thisArg?: any): U[];
        filter<S extends PaySlip>(callbackfn: (value: PaySlip, index: number, array: PaySlip[]) => value is S, thisArg?: any): S[];
        filter(callbackfn: (value: PaySlip, index: number, array: PaySlip[]) => unknown, thisArg?: any): PaySlip[];
        reduce(callbackfn: (previousValue: PaySlip, currentValue: PaySlip, currentIndex: number, array: PaySlip[]) => PaySlip): PaySlip;
        reduce(callbackfn: (previousValue: PaySlip, currentValue: PaySlip, currentIndex: number, array: PaySlip[]) => PaySlip, initialValue: PaySlip): PaySlip;
        reduce<U_1>(callbackfn: (previousValue: U_1, currentValue: PaySlip, currentIndex: number, array: PaySlip[]) => U_1, initialValue: U_1): U_1;
        reduceRight(callbackfn: (previousValue: PaySlip, currentValue: PaySlip, currentIndex: number, array: PaySlip[]) => PaySlip): PaySlip;
        reduceRight(callbackfn: (previousValue: PaySlip, currentValue: PaySlip, currentIndex: number, array: PaySlip[]) => PaySlip, initialValue: PaySlip): PaySlip;
        reduceRight<U_2>(callbackfn: (previousValue: U_2, currentValue: PaySlip, currentIndex: number, array: PaySlip[]) => U_2, initialValue: U_2): U_2;
        find<S_1 extends PaySlip>(predicate: (this: void, value: PaySlip, index: number, obj: PaySlip[]) => value is S_1, thisArg?: any): S_1;
        find(predicate: (value: PaySlip, index: number, obj: PaySlip[]) => unknown, thisArg?: any): PaySlip;
        findIndex(predicate: (value: PaySlip, index: number, obj: PaySlip[]) => unknown, thisArg?: any): number;
        fill(value: PaySlip, start?: number, end?: number): PaySlip[];
        copyWithin(target: number, start: number, end?: number): PaySlip[];
        [Symbol.iterator](): IterableIterator<PaySlip>;
        entries(): IterableIterator<[number, PaySlip]>;
        keys(): IterableIterator<number>;
        values(): IterableIterator<PaySlip>;
        [Symbol.unscopables](): {
            copyWithin: boolean;
            entries: boolean;
            fill: boolean;
            find: boolean;
            findIndex: boolean;
            keys: boolean;
            values: boolean;
        };
        includes(searchElement: PaySlip, fromIndex?: number): boolean;
        flatMap<U_3, This = undefined>(callback: (this: This, value: PaySlip, index: number, array: PaySlip[]) => U_3 | readonly U_3[], thisArg?: This): U_3[];
        flat<U_4>(this: U_4[][][][][][][][], depth: 7): U_4[];
        flat<U_5>(this: U_5[][][][][][][], depth: 6): U_5[];
        flat<U_6>(this: U_6[][][][][][], depth: 5): U_6[];
        flat<U_7>(this: U_7[][][][][], depth: 4): U_7[];
        flat<U_8>(this: U_8[][][][], depth: 3): U_8[];
        flat<U_9>(this: U_9[][][], depth: 2): U_9[];
        flat<U_10>(this: U_10[][], depth?: 1): U_10[];
        flat<U_11>(this: U_11[], depth: 0): U_11[];
        flat<U_12>(depth?: number): any[];
    } | {
        report: any;
        data: PaySlip[];
        count: number;
        total: number;
        page: number;
        pageCount: number;
    }>;
    getOneAndDoStuff(req: CrudRequest): Promise<PaySlip>;
    createOne(req: CrudRequest, dto: PaySlip): Promise<PaySlip>;
    createMany(req: CrudRequest, dto: CreateManyDto<PaySlip>, request: Request): Promise<any>;
    updateOne(req: CrudRequest, dto: PaySlip, request: Request): Promise<PaySlip>;
    replaceOne(req: CrudRequest, dto: PaySlip, request: Request): Promise<PaySlip>;
    deleteOne(req: CrudRequest, request: Request): Promise<any>;
    updateMany(request: Request): Promise<any>;
    getOutcomeReport(query: QueryOutcomeReport): Promise<{
        report: any[];
        data: any;
        count: number;
        total: number;
        page: number;
        pageCount: number;
    } | {
        report: any[];
        count: number;
        data: any[];
        page: number;
        total: number;
    }>;
    getTotalOutcomeReport(query: QueryOutcomeReport): Promise<{
        total: any;
        start_at: string;
        end_at: string;
    }>;
    getOvertimeReport(query: QueryOutcomeReport): Promise<{
        data: any;
        count: number;
        total: number;
        page: number;
        pageCount: number;
    } | {
        count: number;
        data: any[];
        page: number;
        total: number;
    }>;
    getTotalOvertimeReport(query: QueryOutcomeReport): Promise<{
        total: any;
        start_at: string;
        end_at: string;
    }>;
}
