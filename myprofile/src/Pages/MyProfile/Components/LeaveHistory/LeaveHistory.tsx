import React from 'react';
import { DataGrid, GridColDef, GridRowParams } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';

interface DataTableProps {
  rows: Array<any>; 
  columns: GridColDef[]; 
  onDeleteRow: (id: number) => void; 
}

export default function DataTable({ rows, columns, onDeleteRow }: DataTableProps) {
  const getRowClass = (params: GridRowParams) => {
    const state = params.row.state; 
    switch (state) {
      case 'done':
        return 'row-done';
      case 'undone':
        return 'row-undone';
      case 'pending':
        return 'row-pending';
      default:
        return ''; 
    }
  };

  const deleteButtonColumn: GridColDef = {
    field: 'actions',
    headerName: 'Actions',
    width: 100,
    renderCell: (params) => (
      <button onClick={() => onDeleteRow(params.row.id)}>
        <DeleteIcon />
      </button>
    ),
  };

  const columnsWithDeleteButton = [...columns, deleteButtonColumn];

  return (
    <div style={{ height: '100%', width: '100%' }}>
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