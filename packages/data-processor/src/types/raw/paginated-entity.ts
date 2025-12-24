export interface PaginatedEntity<T> {
    metadata: Metadata;
    data: T[];
}

export interface Metadata {
    self: string;
    apiVersion: string;
    reqTs: Date;
    respTs: Date;
    queryTime: number;
    username: string;
    pagination: Pagination;
    requestId: string;
}

export interface Pagination {
    itemsFrom: number;
    itemsTo: number;
    itemsCount: number;
    current: string;
    first: string;
    next: string;
}
