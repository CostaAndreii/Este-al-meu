import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BB() {

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(`Form submitted`);
    };

    return (
        //<form onSubmit={handleSubmit}>
    <Stack spacing={2} direction="row">
                <Button variant="contained" type="submit">Comit Changes</Button>
            </Stack>
    //</form>
  );
}