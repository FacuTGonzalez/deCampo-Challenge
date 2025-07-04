export interface PaginatorProps {
    page: number;
    setPage: (page: number) => void;
    totalRecords: number;
    template?: string;
}