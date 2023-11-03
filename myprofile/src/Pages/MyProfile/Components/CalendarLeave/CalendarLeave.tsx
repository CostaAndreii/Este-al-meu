import React from 'react';
import { DataGrid, GridColDef, GridRowParams } from '@mui/x-data-grid';

interface DataTableProps {
  rows: Array<any>; 
  columns: GridColDef[]; 
}

export default function DataTable({ rows, columns }: DataTableProps) {
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

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
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