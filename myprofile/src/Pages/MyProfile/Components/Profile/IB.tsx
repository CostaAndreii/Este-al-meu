import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import CreateIcon from '@mui/icons-material/Create';
//import SvgIcon from '@mui/material/SvgIcon';
//import { createSvgIcon } from '@mui/material/utils';

export default function IB() {
    return (
            <IconButton aria-label="delete">
                <CreateIcon />
            </IconButton>
    );
}