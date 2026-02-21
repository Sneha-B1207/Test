import { Box, Button, TextField } from '@mui/material';
import React from 'react'

const ReportSearch = ({search,setSearch,setPage,onOpenModal}) => {
  return (
    <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
        <TextField
          fullWidth 
          size="small" 
          value={search}
          onChange={(e) => { setSearch(e.target.value); setPage(1); }}
        />
        <Button
          variant="contained" 
          onClick={onOpenModal} 
          sx={{ bgcolor: '#4e73df', minWidth: '60px' }}
        >
          ADD
        </Button>
    </Box>
  )
}

export default ReportSearch
