import JSBI from 'jsbi';
export declare type BigintIsh = JSBI | number | string;
export declare enum ChainId {
    MAINNET = 56,
    TESTNET = 97
}
export declare enum TradeType {
    EXACT_INPUT = 0,
    EXACT_OUTPUT = 1
}
export declare enum Rounding {
    ROUND_DOWN = 0,
    ROUND_HALF_UP = 1,
    ROUND_UP = 2
}
export declare const FACTORY_ADDRESS = "0xa3fb2a47372C9E2C95E16950834D4Ce8983386B6";
export declare const FACTORY_ADDRESS_MAP: {
    56: string;
    97: string;
};
export declare const INIT_CODE_HASH = "0xd142e8b02b2deeb25d42dd1ec29fe3a383b8da20989f0bd6a377ade72b7d776c";
export declare const INIT_CODE_HASH_MAP: {
    56: string;
    97: string;
};
export declare const MINIMUM_LIQUIDITY: JSBI;
export declare const ZERO: JSBI;
export declare const ONE: JSBI;
export declare const TWO: JSBI;
export declare const THREE: JSBI;
export declare const FIVE: JSBI;
export declare const TEN: JSBI;
export declare const _100: JSBI;
export declare const FEES_NUMERATOR: JSBI;
export declare const FEES_DENOMINATOR: JSBI;
export declare enum SolidityType {
    uint8 = "uint8",
    uint256 = "uint256"
}
export declare const SOLIDITY_TYPE_MAXIMA: {
    uint8: JSBI;
    uint256: JSBI;
};
