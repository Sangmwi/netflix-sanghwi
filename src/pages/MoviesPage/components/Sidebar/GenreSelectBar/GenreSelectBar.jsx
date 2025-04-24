import * as React from "react";
import { useGenreStore } from "@/store/useFilterStore";
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const GENRE_LIST = [
    { id: 'ALL', name: "모든 장르" },
    { id: '28', name: '액션' },
    { id: '12', name: '어드벤쳐' },
    { id: '16', name: '애니메이션' },
    { id: '35', name: '코미디' },
    { id: '80', name: '범죄' },
    { id: '99', name: '다큐멘터리' },
    { id: '18', name: '드라마' },
    { id: '10751', name: '가족' },
    { id: '14', name: '판타지' },
    { id: '36', name: '역사' },
    { id: '27', name: '공포' },
    { id: '10402', name: '음악' },
    { id: '9648', name: '미스터리' },
    { id: '10749', name: '로맨스' },
    { id: '878', name: 'SF' },
    { id: '10770', name: 'TV 영화' },
    { id: '53', name: '스릴러' },
    { id: '10752', name: '전쟁' },
    { id: '37', name: '서부' },
  ];

export default function GenreSelectBar() {
  const { selectedGenre, setSelectedGenre } = useGenreStore();
  console.log("선택된 장르", selectedGenre)

  return (
    <Box sx={{ minWidth: 90 }}>
    <FormControl fullWidth error>
      <InputLabel id="demo-simple-select-label-genre">장르</InputLabel>
      <Select
        labelId="demo-simple-select-label-genre"
        id="demo-simple-select-genre"
        value={selectedGenre}
        label="장르"
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        {GENRE_LIST.map((genre) => (
          <MenuItem key={genre?.id} value={genre?.id}>
            {genre?.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </Box>
  );
}
