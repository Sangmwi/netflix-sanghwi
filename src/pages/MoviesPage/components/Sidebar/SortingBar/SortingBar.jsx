import React from 'react'
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import { useSortStore } from "@/store/useFilterStore";



const SortingBar = () => {
  const { sort, setSort } = useSortStore();

  console.log(sort)

  return (
    <Box sx={{ minWidth: 90 }}>
    <FormControl fullWidth error>
      <InputLabel className='sorting-bar-input-label' id="demo-simple-select-label-sort">정렬</InputLabel>
      <Select
        labelId="demo-simple-select-label-sort"
        id="demo-simple-select-sort"
        value={sort}
        label="정렬"
        onChange={(e) => setSort(e.target.value)}
      >
        <MenuItem value={"popularity.desc"}>인기순</MenuItem>
        <MenuItem value={"vote_average.desc"}>평점순</MenuItem>
        <MenuItem value={"release_date.desc"}>최신순</MenuItem>
      </Select>
    </FormControl>
  </Box>
  )
}

export default SortingBar