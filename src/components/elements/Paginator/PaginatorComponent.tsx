import { Paginator, type PaginatorPageChangeEvent } from "primereact/paginator";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import type { PaginatorProps } from "./PaginatorComponent.types";

const PaginatorComponent = ({
    page,
    setPage,
    totalRecords,
    template = "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
}: PaginatorProps) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const rows = parseInt(searchParams.get('limit') || '10', 10);

    const onPageChange = (event: PaginatorPageChangeEvent): void => {
        setPage(event.page);
        setSearchParams({
            page: String(event.page + 1),
            limit: String(event.rows),
        });
    };

    useEffect(() => {
        const urlPage = parseInt(searchParams.get('page') || '0', 10) - 1;
        const urlLimit = parseInt(searchParams.get('limit') || '10', 10);

        if ((urlPage !== page && urlPage > 0) || urlLimit !== rows) {
            setPage(urlPage);
        }
    }, []);
    return (
        <Paginator
            first={page * rows}
            rows={rows}
            totalRecords={totalRecords}
            onPageChange={onPageChange}
            template={template}
            currentPageReportTemplate={`{totalRecords} results`}
        />
    );
};

export default PaginatorComponent;
