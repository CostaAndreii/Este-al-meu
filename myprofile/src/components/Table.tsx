import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { DataGrid, GridColDef, GridRowParams } from "@mui/x-data-grid";

interface DataTableProps {
  rows: Array<any>;
  columns: GridColDef[];
  onDeleteRow: (id: number) => void;
  onCheckRow: (id: number) => void;
}

export default function DataTable({
  rows,
  columns,
  onCheckRow,
  onDeleteRow,
}: DataTableProps) {
  const getRowClass = (params: GridRowParams) => {
    const state = params.row.state;
    switch (state) {
      case "done":
        return "row-done";
      case "undone":
        return "row-undone";
      case "pending":
        return "row-pending";
      default:
        return "";
    }
  };

  const deleteButtonColumn: GridColDef = {
    field: "actions",
    headerName: "Quick Approve",
    width: 100,
    renderCell: (params) => (
      <>
        <button
          className="hover:text-lime bg-inherit"
          onClick={() => onCheckRow(params.row.id)}
        >
          <CheckIcon />
        </button>
        <button
          className="hover:text-rose-500 bg-inherit"
          onClick={() => onDeleteRow(params.row.id)}
        >
          <CloseIcon />
        </button>
      </>
    ),
  };

  const columnsWithDeleteButton = [...columns, deleteButtonColumn];

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columnsWithDeleteButton}
        initialState={{
          pagination: {
            paginationModel: { page: 3, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        getRowClassName={getRowClass}
      />
    </div>
  );
}
